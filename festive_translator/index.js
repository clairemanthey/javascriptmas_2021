const languageSelector = document.getElementById("language-selector");
const greetingDisplay = document.getElementById("greeting-text");
let headingOne = document.getElementById("heading-one");


const greetingsArr = [
    {
        language: "English",
        greeting: "Merry Christmas!",
        image: "imgs/english_christmas.jpg",
        color: "#344D2F",
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!",
        image: "imgs/spanish_christmas.jpg",
        color: "#FAC57D",
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!",
        image: "imgs/ukrainian_christmas.jpg",
        color: "#344D2F",
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!",
        image: "imgs/welsh_christmas.jpg",
        color: "#344D2F",
    },
    {
        language: "French",
        greeting: "Joyeux Noël",
        image: "imgs/french_christmas.jpg",
        color: "#000",
    }
];

languageSelector.addEventListener("change", () => {
    let greetingLanguage = languageSelector.value;
    for (let i = 0; i < greetingsArr.length; i++) {
        let url = greetingsArr[i].image;
        if (greetingsArr[i].language === greetingLanguage) {
            greetingDisplay.textContent = greetingsArr[i].greeting;

            document.body.style.background = "url(" + url + ") no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";

            headingOne.style.color = greetingsArr[i].color;
        }
    }
});


/*

let greetingLanguage = languageSelector.value;

languageSelector.addEventListener("change", () => {
    for (let i = 0; i < greetingsArr.length; greetingsArr++){
        if (greetingsArr[i].language === greetingLanguage);{
            greetingDisplay.textContent = greetingsArr[i].greeting;
        }
    }
});
*/
// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".
