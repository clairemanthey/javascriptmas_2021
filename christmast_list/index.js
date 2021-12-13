const items = ["Candles", "Decorations", "Chocolate"];
const checklist = document.getElementById("checklist");
let addItems = document.getElementById("add-item");
let input = document.getElementById("userInput");
let ul = document.getElementById("ul");
let christmasList = document.getElementById("list-items");


let text = "";
for(let i = 0; i < items.length; i++){
	text += items[i] + "<br>";
}
christmasList.innerHTML = text;

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
	ul.appendChild(listItem);

  listBtn.addEventListener("click", () => {
  	ul.removeChild(listItem);
  });

	input.focus();	
}

addItems.addEventListener("click", addListItems);


input.addEventListener("keyup", () => {
	if(event.keyCode === 13){
	let item = input.value;
	input.value = "";

	let listItem = document.createElement("li");
	let listText = document.createElement("span");
	let listBtn = document.createElement("button");

	listItem.appendChild(listText);
	listText.innerHTML = item;
	listItem.appendChild(listBtn);
	listBtn.classList.add("fas", "fa-minus", "addBtn");
	ul.appendChild(listItem);

  listBtn.addEventListener("click", () => {
  	ul.removeChild(listItem);
  });

	input.focus();	
	}
});