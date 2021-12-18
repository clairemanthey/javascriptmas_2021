let guests = ["Me", "Cat","Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"];
const btn = document.getElementById("btn");
const input = document.getElementById("name");

let guestList = document.getElementById("guest-list");


// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?

let text = "";
for(let i = 0; i < guests.length; i++){
	text += guests[i] + "<br>";
}
guestList.innerHTML = text;


function addListItems(){
	let item = input.value;
	input.value = "";

	let listItem = document.createElement("li");
	let listText = document.createElement("span");
	let listBtn = document.createElement("button");

	listItem.appendChild(listText);
	listText.innerHTML = item;
	listItem.appendChild(listBtn);
	listItem.classList.add("added-items");
	listBtn.classList.add("fas", "fa-minus", "minusBtn");
	guestList.appendChild(listItem);

  listBtn.addEventListener("click", () => {
  	guestList.removeChild(listItem);
  });

	input.focus();	
}

btn.addEventListener("click", addListItems);
