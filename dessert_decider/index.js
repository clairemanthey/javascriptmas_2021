const btn = document.getElementById("btn");
let foodholder = document.getElementById("foodHolder");

btn.addEventListener("click", () => {
    fetch('https://foodish-api.herokuapp.com/api/images/dessert')
    .then(response => response.json())
    .then(photo => {
        foodholder.innerHTML = `<img src=${photo.image} alt="random dessert idea" />`;

    });
});


/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/
