document.addEventListener("DOMContentLoaded", () => {

const search = document.querySelector(".header-right input");
const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function(){

const value = search.value.toLowerCase();

cards.forEach(card=>{

const name = card.querySelector("h3").textContent.toLowerCase();

if(name.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});

const buttons=document.querySelectorAll(".card button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

alert("✅ Product Added to Cart");

});

});

});
