const greetingDisplay = document.getElementById("greeting-display");
const btn = document.getElementById("btn");
let toName = document.getElementById("input-to");
let fromName = document.getElementById("input-from");
let displayToName = document.getElementById("to-name");
let displayFromName = document.getElementById("from-name");
let topDecorations = document.getElementById("decorationsOne");
let bottomDecorations = document.getElementById("decorationsTwo");


const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
    "Enjoy the Holiday Season",
    "Wishing you a new year full of peace and joy",
    "May your holidays be full of warmth and cheer",
    "Warmest Wishes to you and yours this holiday season",
    "Glad tidings of comfort and joy",
];

// Task:
// Write a function to display a random greeting in the card.

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.


btn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * (greetings.length));
    greetingDisplay.innerHTML = greetings[randomNumber];    
    let greetingsTo = toName.value;
    displayToName.innerHTML = greetingsTo + ",";
    let greetingsFrom = fromName.value;
    displayFromName.innerHTML = "From, " + "<br>" + greetingsFrom; 
    topDecorations.innerHTML = "🎄 🎄 🎄 🎄 🎄 🎄 ";
    bottomDecorations.innerHTML = "️️️☃️ ☃️ ☃️ ☃️ ☃️ ☃️";
});


fromName.addEventListener("keyup", () => {
    if(event.keyCode === 13){
        let randomNumber = Math.floor(Math.random() * (greetings.length));
        greetingDisplay.innerHTML = greetings[randomNumber];    
        let greetingsTo = toName.value;
        displayToName.innerHTML = greetingsTo + ",";
        let greetingsFrom = fromName.value;
        displayFromName.innerHTML = "From, " + "<br>" + greetingsFrom; 
        topDecorations.innerHTML = "🎄 🎄 🎄 🎄 🎄 🎄 ";
        bottomDecorations.innerHTML = "️️️☃️ ☃️ ☃️ ☃️ ☃️ ☃️";        
    }
});
