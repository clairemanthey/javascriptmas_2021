const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const audio = new Audio('bells.wav');
let bell = document.getElementById("bell");

playBtn.addEventListener("click", () => {
    audio.play();
    bell.classList.add("animate");
});

pauseBtn.addEventListener("click", () => {
    audio.pause();
    if(bell.style.animationPlayState === "paused"){
        bell.style.animationPlayState = "running";
    } else {
        bell.style.animationPlayState = "paused";
    }
});

stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    bell.classList.remove("animate");
});