const house = document.getElementById("item-five");
const decorator = document.getElementById("decorator");
let reindeerOne = document.getElementById("item-one");
let reindeerTwo = document.getElementById("item-two");
let santa = document.getElementById("item-three");
let treeOne = document.getElementById("item-four");
let treeTwo = document.getElementById("item-six");
let snowmanOne = document.getElementById("item-seven");
let bell = document.getElementById("item-eight");
let snowmanTwo = document.getElementById("item-nine");

decorator.addEventListener("click", () => {
  if(decorator.checked){
    reindeerOne.textContent = "🦌";
    reindeerTwo.textContent = "🦌";
    santa.textContent = "🎅";
    treeOne.textContent = "🎄";
    house.textContent = "🏡";
    treeTwo.textContent = "🎄";
    snowmanOne.textContent = "☃️";
    bell.textContent = "🔔";
    snowmanTwo.textContent = "☃️";


  } else{
    reindeerOne.textContent = "";
    reindeerTwo.textContent = "";
    santa.textContent = "";
    treeOne.textContent = "";
    house.textContent = "🏡";
    treeTwo.textContent = "";
    snowmanOne.textContent = "";
    bell.textContent = "";
    snowmanTwo.textContent = "";
  }

});

/*
  if(decorator.checked){
    rowOne.textContent = "🦌 🦌 🎅";
    house.textContent = "🎄 🏡 🎄";
    rowThree.textContent = "☃️ ☃️ ☃️️️️️️";
  } else{
    rowOne.textContent = " ";
    house.textContent = "🏡";
    rowThree.textContent = " ";
    */