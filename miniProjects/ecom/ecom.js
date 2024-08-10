const productGrid = document.getElementById("product-grid");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const checkoutForm = document.getElementById("checkout-form");

let cart = []; //user's cart

//fetching products
fetch("db.json")
  .then((res) => res.json())
  .then((products) => displayProducts(products))
  .catch((err) => console.log("Err : %s", err));

//display products
function displayProducts(products) {
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="product-img">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
        `;
    productGrid.append(productCard);

    const addToCartBtn = productCard.querySelector(".add-to-cart");
    addToCartBtn.addEventListener("click", () => addToCart(product));
  });
}

function addToCart(product) {
  const existingIndex = cart.findIndex((item) => item.id === product.id);
  if (existingIndex === -1) {
    cart.push({ ...product, quantity: 1 });
  } else cart[existingIndex].quantity++;

  updateCartDisplay();
}

function updateCartDisplay() {
  cartItems.innerHTML = ""; // Clear existing cart items

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
            <p class="cart-product-name">${item.name}</p>
                <div class="cart-quantity">
                    <button class="decrease-quantity" data-product-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="increase-quantity" data-product-id="${item.id}">+</button>
                </div>
                <button class="remove-from-cart" data-product-id="${item.id}">Remove</button>
            `;
      cartItems.appendChild(cartItem);

      const decreaseQuantityBtn = cartItem.querySelector(".decrease-quantity");
      decreaseQuantityBtn.addEventListener("click", () => {
        updateQuantity(item.id, -1);
      });

      const increaseQuantityBtn = cartItem.querySelector(".increase-quantity");
      increaseQuantityBtn.addEventListener("click", () => {
        updateQuantity(item.id, +1);
      });

      // Remove from cart button
      const removeFromCartBtn = cartItem.querySelector(".remove-from-cart");
      removeFromCartBtn.addEventListener("click", () => {
        removeFromCart(item.id);
      });
    });
  }
  updateCardCount();
}

function updateQuantity(productId, change) {
  const productIndex = cart.findIndex((item) => item.id === productId);
  if (productIndex !== -1) {
    cart[productIndex].quantity += change;
    updateCartDisplay();
  }
}

function removeFromCart(productId) {
  const productIndex = cart.findIndex((item) => item.id === productId);
  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
    updateCartDisplay();
  }
}

function updateCardCount() {
  cartCount.textContent = `Cart (${cart.length})`;
}

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const payment = document.getElementById("payment").value;

  if (name.trim() === "" || address.trim() === "") {
    alert("Please fill in all required fields.");
    return;
  }

  // Request permission to display notifications
if (Notification.permission !== "granted") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        // Create a notification
        const notification = new Notification("Order Placed!", {
          body: `Your order has been placed successfully!`,
          icon: ''
        });
      }
    });
  } else {
    // Create a notification (permission already granted)
    const notification = new Notification("Order Placed!", {
      body: `Your order has been placed successfully!`,
      icon: ''
    });
  }

  console.log("Checkout Data:", { name, address, payment, cart });
  alert("Order placed successfully!");

  cart = [];
  updateCartDisplay();
});