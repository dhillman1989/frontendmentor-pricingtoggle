const cards = document.querySelector(".cards");
const checkbox = document.getElementById("toggle");

checkbox.addEventListener("change", ()=>{
    if (checkbox.checked === true){
        cards.classList.remove("annually");
        cards.classList.add("monthly");
    }
    else if (checkbox.checked === false){
        cards.classList.remove("monthly");
        cards.classList.add("annually");
    }
});