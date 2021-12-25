const btn = document.getElementById("start");
let timer = document.getElementById("timer");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let hr = 0;
let min = 15;
let sec = 0;
let stoptime = true;
let lastChange = null;

function calcLastChange(){
	if(lastChange == null){
		lastChange = new Date();
		return 0;
	}else{
		let now = new Date();
		let diff = (now - lastChange) / 1000;
		lastChange = now;
		return diff;
	}
}

function getCurrentTime(){
	let currentDate = new Date();
	return currentDate.getMinutes() + ":" + currentDate.getSeconds() + "--" + calcLastChange().toString();
}

function startTimer(){
	let newLog = document.createElement("li");
	newLog.append("Started: " + getCurrentTime());
	document.getElementById('log');
	document.getElementById("start").disabled = true;
	document.getElementById("pause").disabled = false;

	if(stoptime == true){
		stoptime = false;
		timerCycle();
	}
}

function stopTimer(){
	document.getElementById("start").disabled = false;
	document.getElementById("pause").disabled = true;

	if(stoptime == false){
		stoptime = true;
	}
}

function timerCycle() {
    if (stoptime == false) {
//      document.body.style.background = '#202020';
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec - 1;

    if (sec == -1) {
      min = min - 1;
      sec = 59;
    }

    if (min == -1) {
      hr = hr - 1;
      min = 0;
      sec = 0;
    }
      
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }
    
    timer.innerHTML =  min + ':' + sec;


    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '15:00';
}

//ADD EVENTLISTENERS HERE

//Start


btn.addEventListener("click", startTimer);

//Pause
pauseBtn.addEventListener("click", stopTimer);

//Reset
resetBtn.addEventListener("click", resetTimer);