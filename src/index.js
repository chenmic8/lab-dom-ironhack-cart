// ITERATION 1

//query selectors

const totalValueParent = document.getElementById("total-value");
const totalValueSpan = totalValueParent.querySelector("span");
const calculatePricesBtn = document.getElementById("calculate");
const allProducts = document.querySelectorAll(".product");
const createBtn = document.getElementById("create");
const products = document.querySelectorAll(".product");
const productClone = products[0].cloneNode(true);


//event listeners
window.addEventListener("load", () => {
  calculatePricesBtn.addEventListener("click", calculateAll);
  createBtn.addEventListener("click", createProduct);
  products.forEach((e) => {
    const deleteProductBtn = e.querySelector(".action button");

    deleteProductBtn.addEventListener("click", removeProduct);
  });
});

//functions
function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");
  let subtotalValue = Number(price.textContent) * Number(quantity.value);
  subtotal.textContent = subtotalValue;
  return subtotalValue;
}

function calculateAll() {
  let totalSum = 0;
  let total = document.querySelector("#total-value span");

  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach((e) => {
    totalSum += updateSubtotal(e);
  });
  total.textContent = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentElement.parentElement;

  target.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const createProduct = document.querySelector(".create-product");
  const productValues = createProduct.querySelectorAll("input");
  let productName = productValues[0].value;
  let productPrice = productValues[1].value;
  
  console.log(productPrice);
  const products = document.querySelector(".product");
  const productClone = products.cloneNode(true);
  const productNameSpan = productClone.querySelector(".name span");
  const productPriceSpan = productClone.querySelector(".price span");
  const productQuantitySpan = productClone.querySelector(".quantity input");
  const productSubtotalSpan = productClone.querySelector(".subtotal span");
  const deleteBtn = productClone.querySelector(".action button");
  deleteBtn.addEventListener("click", removeProduct);
  productNameSpan.textContent = productName;
  productPriceSpan.textContent = productPrice;
  productQuantitySpan.value = +0;
  productSubtotalSpan.textContent = 0;
  productClone.classList.remove("hidden");
  console.log(products);
  products.parentElement.appendChild(productClone);
  productValues[0].value = "";
  productValues[1].value = 0;
}

// });
