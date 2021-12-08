
let countdownDisplay = document.getElementById("countdown-display");
let countDownDays = document.getElementById("day");
let countDownHours = document.getElementById("hours");
let countDownMinutes = document.getElementById("minutes");
let countDownSeconds= document.getElementById("seconds");
let christmas = new Date("December 25, 2021 00:00:00");

function updateTimer(christmas){
    let time = christmas - new Date();
    return{
        "days": Math.floor(time / (1000 * 60 * 60 * 24)),
        "hours": Math.floor((time / (1000 * 60 * 60)) % 24),
        "minutes": Math.floor((time / 1000 / 60) % 60),
        "seconds": Math.floor((time / 1000) % 60),
        "total": time
    };
}

function startTimer(countDownDays, countDownHours, countDownMinutes, countDownSeconds, christmas){
    let timerInterval = setInterval(function() {
        let timer = updateTimer(christmas);

        countDownDays.innerHTML = timer.days;
        countDownHours.innerHTML = timer.hours;
        countDownMinutes.innerHTML = timer.minutes;
        countDownSeconds.innerHTML = timer.seconds;


        if(timer.total = 0){
            clearInterval(timerInterval);
            countDownDays.innerHTML = 0;
            countDownHours.innerHTML = 0;
            countDownMinutes.innerHTML = 0;
            countDownSeconds.innerHTML = 0;
        }
    }, 1000);
}

// Task:
// - Get today's date (you only need the day).
// - Calculate remaining days.
// - Display remaining days in countdownDisplay.


// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.

window.onload = function(){
    startTimer(countDownDays, countDownHours, countDownMinutes, countDownSeconds, christmas);
};