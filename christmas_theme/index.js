
let toggle = document.getElementById('toggle');
let body = document.body;
let santas = document.getElementById("santas");
let snowflakes = document.getElementById("snowflakes");
let greeting = document.getElementById("greeting");


toggle.addEventListener("input", (e) => {
	const isChecked = e.target.checked;
	if(isChecked){
		body.classList.add("snow");
	    greeting.innerHTML = "☃️ Let it Snow!";
	    santas.style.display = "none";
	    snowflakes.style.display = "block";
	} else{
		body.classList.remove("snow");
		greeting.innerHTML = `🎅Merry Christmas!`;
		snowflakes.style.display = "none";
		santas.style.display = "block";

	}
});
