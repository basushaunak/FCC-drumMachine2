const pads = Array.from(document.querySelectorAll(".drum-pad"));
const audios = Array.from(document.querySelectorAll("audio"));
const display = document.querySelector("#display");
const trapKeys = "QWEASDZXC";

pads.forEach((pad) => {
  pad.addEventListener("click", () => {
    playBeat(pad.innerText);
  });
});

audios.forEach((audio) => {
  audio.addEventListener("play", () => {
    audio.parentNode.classList.add("playing");
  });
  audio.addEventListener("ended", () => {
    audio.parentNode.classList.remove("playing");
  });
});

document.addEventListener("keydown", (event) => {
  const pressedKey = event.code.match(/Key([A-Z])/)[1];
  console.log(event);
  console.log("Key Pressed: ", pressedKey);
  if (trapKeys.includes(pressedKey)) {
    playBeat(pressedKey);
  }
});

function playBeat(pressedKey) {
  const audioTrack = audios.find((audio) => audio.id === pressedKey);
  audioTrack.play();
  display.innerText = audioTrack.getAttribute("data-drumname");
}
