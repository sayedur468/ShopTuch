document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to ShopTuch!");

    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Product added to cart! (Demo)");
        });
    });
});
