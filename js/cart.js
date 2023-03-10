const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";
  displayProduct(product, quantity);
  saveProductToLocalStorgage(product, quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;
  ul.appendChild(li);
};

// save product to local storage
const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorgage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  console.log(cart[product]);
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const displayProductsFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();
  //   console.log(savedCart);
  for (const product in savedCart) {
    const quantity = savedCart[product];
    // console.log(product, quantity);
    displayProduct(product, quantity);
  }
};

displayProductsFromLocalStorage();
