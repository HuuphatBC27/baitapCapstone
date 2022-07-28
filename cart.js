



cartItem = document.querySelectorAll(".banner");

for (let i = 0; i < cartItem.length; i++) {
  cartItem[i].addEventListener("click", () => {
    cartNumbers();
  });
}

function onLoadCartNumbers() {
  let productNumber = localStorage.getItem("cartNumbers");
  if (productNumber) {
    document.querySelector(".btn span").textContent = productNumber;
  }
}

function cartNumbers(product) {
  console.log("the product clicked is", product);
  let productNumber = localStorage.getItem("cartNumbers");

  }