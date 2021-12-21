const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const btn = document.getElementById("btn");
let inputName = document.getElementById("new-name");
let naughtyNice = document.getElementById("naughty-or-nice");
let addNames = document.getElementById("addBtn");

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
];

let niceNames = [];
let naughtyNames = [];

btn.addEventListener("click", () => {
    for (let i = 0; i < sorteesArr.length; i++){
        if(sorteesArr[i].hasBeenGood){
            niceNames.push(sorteesArr[i].name);
            let listGood = document.createElement("li");
            let listGoodName = document.createTextNode(sorteesArr[i].name);
            listGood.appendChild(listGoodName);
            niceList.appendChild(listGood);

        }else{
            naughtyNames.push(sorteesArr[i].name);
            let listBad = document.createElement("li");
            let listBadName = document.createTextNode(sorteesArr[i].name);
            listBad.appendChild(listBadName);
            naughtyList.appendChild(listBad);

        }
    }
});


addNames.addEventListener("click", () => {
    let item = inputName.value;
    inputName.value = "";

    let listItem = document.createElement("li");
    let listText = document.createElement("span");

    if(naughtyNice.value === "nice" ){
        listItem.appendChild(listText);
        listItem.innerHTML = item;
        niceList.appendChild(listItem);

    }else{
        listItem.appendChild(listText);
        listItem.innerHTML = item;
        naughtyList.appendChild(listItem);
    }
});

console.log(niceNames);
console.log(naughtyNames);
// Task: 
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.