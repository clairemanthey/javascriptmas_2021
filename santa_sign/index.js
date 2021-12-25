let input = document.getElementById("text-input");
let displayText = document.getElementById("sign");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	displayText.innerHTML = input.value;
});