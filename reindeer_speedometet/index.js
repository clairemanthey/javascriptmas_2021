const speedometer = document.getElementById("speedometer");
const select = document.getElementById("select");
const time = document.getElementById("time");
let currentLocation = "";
let amountTime = 0;
let btn = document.getElementById("btn");


let destination = [
    {
        name: "Munich",
        distanceFromPrevDestination: 2892
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324
    },
     {
        name: "Sydney",
        distanceFromPrevDestination: 5458
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729
    }
];

btn.addEventListener("click", () => {
        let speed = 0;
        let location = select.value;
        let distance = destination.find(({ name }) => name === location).distanceFromPrevDestination;
        amountTime = time.value;

        speed = Math.round(distance / amountTime);

        speedometer.innerHTML = `<p>Average reindeer speed was <span style="color: #C7375F; font-weight: bold">${speed}</span> mph. </p>`;
});


