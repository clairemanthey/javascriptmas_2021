const elf = document.getElementById("elf");
const btn = document.getElementById("btn");
let enoughElves = document.getElementById("enough-elves");

let elves = ["🧝"];

btn.addEventListener("click", () => {
    if (elves.length < 100) {
    elves.push("🧝");
    elf.textContent = "";
    for (const item of elves) {
        elf.textContent += item;
    }
    }
    else {
    enoughElves.textContent = `The elf has so many elf friends, Thank you!`;
  }  
});