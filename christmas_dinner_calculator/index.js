const btn = document.getElementById("btn");
let food = document.getElementById("food");
let guests = document.getElementById("num-input");
let veggie = document.getElementById("vegetarian-input");

btn.addEventListener("click", () => {
	let veggieMeal = veggie.checked;
	let guestNum = guests.value;
	if(veggieMeal === true){
		food.textContent = "Nut Roast";
	} else if(guests <= 4){
		food.textContent = "Turkey";
	} else{
		food.textContent = "Goose";
	}
});
