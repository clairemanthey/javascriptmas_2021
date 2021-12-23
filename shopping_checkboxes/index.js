const items = [
    {
        name: "Candles", 
        icon: "🕯️",
    },
    {
        name: "Decorations",
        icon: "🎄", 
    },
    {
        name: "Chocolate",
        icon: "🍫",
    },
];

const checklist = document.getElementById("checklist");

for (let i=0; i<items.length; i++) {
    checklist.innerHTML += `
         <div class="checklist-item">
                <label for="${items[i]}" class="strikethrough">
                    <input type="checkbox" id="${items[i]}" value="${items[i]}">
                    <span class="custom-checkbox">${items[i].name} ${items[i].icon}
                </label>
            </div>
    `;
}
