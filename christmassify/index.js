const greeting = document.getElementById("greeting");
const christmassifierBtn = document.getElementById("christmassifierBtn");
let body = document.body;

christmassifierBtn.addEventListener("click", () => {
   if(christmassifierBtn.innerText === "De-Christmassify"){
      body.classList.remove("christmassified");
      christmassifierBtn.innerHTML = "Christmassify";

   }else{
      body.classList.add("christmassified");
      christmassifierBtn.innerHTML = "De-Christmassify";
   }
});

