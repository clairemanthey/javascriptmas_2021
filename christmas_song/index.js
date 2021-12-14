const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
let bells = document.getElementById("christmasAudio");
let decreaseVolume = document.getElementById("volume_down");
let increaseVolume = document.getElementById("volume-up");
let volumneOff = document.getElementById("volume-off");

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
playBtn.addEventListener("click", () => {
	bells.play();
});

pauseBtn.addEventListener("click", () => {
	bells.pause();

});

stopBtn.addEventListener("click", () => {
	bells.pause();
	bells.currentTime = 0;
});

decreaseVolume.addEventListener("click", () => {
	bells.volume -= 0.2;
});

increaseVolume.addEventListener("click", () =>{
	bells.volume += 0.2;

});

volumneOff.addEventListener("click", () =>{
	if(bells.volume === 0){
		bells.volume = 1;
	}else{
		bells.volume = 0.0;
	}
});