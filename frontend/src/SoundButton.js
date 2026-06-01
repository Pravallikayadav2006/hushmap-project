import React from "react";
import L from "leaflet";

const SoundButton = ({ map }) => {

  const startRecording = async () => {

    alert("Recording noise for 5 seconds...");

    try {

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      const audioContext = new window.AudioContext();

      const analyser = audioContext.createAnalyser();

      const microphone =
        audioContext.createMediaStreamSource(stream);

      microphone.connect(analyser);

      const dataArray = new Uint8Array(
        analyser.frequencyBinCount
      );

      setTimeout(() => {

        analyser.getByteFrequencyData(dataArray);

        let sum = 0;

        for (let i = 0; i < dataArray.length; i++) {
          sum += dataArray[i];
        }

        const noiseLevel = Math.round(
          sum / dataArray.length
        );

        alert(`Noise recorded! Level: ${noiseLevel}`);

        navigator.geolocation.getCurrentPosition((position) => {

          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          let color = "green";

          if (noiseLevel > 70) {
            color = "red";
          } else if (noiseLevel > 40) {
            color = "orange";
          }
          console.log("Map received:", map);
          L.circle([lat, lng], {
            radius: 200,
            color: color,
            fillColor: color,
            fillOpacity: 0.5,
          }).addTo(map);

        });

      }, 5000);

    } catch (error) {

      console.log(error);

      alert(
        "Please allow microphone permission."
      );
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        zIndex: 9999,
      }}
    >
      <button
        onClick={startRecording}
        style={{
          padding: "12px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Start
      </button>
    </div>
  );
};

export default SoundButton;