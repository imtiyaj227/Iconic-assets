let cartCount = 0;
let totalPrice = 0;

const cartCounter = document.getElementById("cart-count");
const total = document.getElementById("total-price");
const cartItems = document.getElementById("cart-items");

const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.textContent = cartCount;

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        totalPrice += price;

        total.textContent = totalPrice;

        if(cartItems.innerHTML.includes("Your cart is empty.")){
            cartItems.innerHTML="";
        }

        const item = document.createElement("div");
item.className = "cart-item";

item.innerHTML = `
    <span>${name}</span>
    <span>₹${price}</span>
    <button class="remove-btn">Remove</button>
`;

cartItems.appendChild(item);

item.querySelector(".remove-btn").addEventListener("click", () => {
    item.remove();

    cartCount--;
    cartCounter.textContent = cartCount;

    totalPrice -= price;
    total.textContent = totalPrice;

    if(cartCount === 0){
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }
});

    });

});