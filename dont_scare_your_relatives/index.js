const greeting = document.getElementById("greeting");
const btn = document.getElementById("btn");
let body = document.body;
let container = document.getElementById("container");
let iconOne = document.getElementById("icon-one");
let iconTwo = document.getElementById("icon-two");


btn.addEventListener("click", () => {
  body.style.backgroundColor = "var(--wine-red)";
  greeting.style.color = "var(--wine-red)";
  greeting.style.fontFamily = 'Lobster Two';
  greeting.style.fontWeight = "800";
  iconOne.innerHTML = "🎅";
  iconTwo.innerHTML = "🎄";
  btn.style.backgroundColor = "var(--wine-red)";
  btn.style.color = "var(--snow)";
  container.style.backgroundColor = "var(--gold)";
  container.style.border = "3px solid var(--dark-green)";  
});



