const meter = document.getElementById("meter");
let date = new Date().getDate();

function christmasLoader(){
	meter.setAttribute("value", date);
}

christmasLoader();
