let eyeColorPicker = document.getElementById("color");
let eyeOne = document.getElementsByClassName("eye")[0];
let eyeTwo = document.getElementsByClassName("eye")[1];

 eyeColorPicker.addEventListener('change', () => {
    let input = eyeColorPicker.value;
    eyeOne.style.background = input;
    eyeTwo.style.background = input;
});


let noseColorPicker = document.getElementById("color3");
let nose = document.getElementById("nose");

noseColorPicker.addEventListener("change", () => {
    let inputNose = noseColorPicker.value;
    nose.style.borderColor = `transparent transparent transparent ${inputNose}`;

});

let buttonColorPicker = document.getElementById("color2");
let buttonOne = document.getElementsByClassName("button")[0];
let buttonTwo = document.getElementsByClassName("button")[1];
let buttonThree = document.getElementsByClassName("button")[2];
buttonColorPicker.addEventListener("change", () => {
    let inputbuttons = buttonColorPicker.value;
    buttonOne.style.backgroundColor = inputbuttons;
    buttonTwo.style.backgroundColor = inputbuttons;
    buttonThree.style.backgroundColor = inputbuttons;
});
