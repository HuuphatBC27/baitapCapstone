// cart = [];
// getProducts().then(function (result) {
//   let products = result.data;

//   for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//     products[i] = new Product(
//       product.id,
//       product.name,
//       product.price,
//       product.screen,
//       product.backCamera,
//       product.forontCamera,
//       product.img,
//       product.desc,
//       product.type,
//       product.quantity
//     );
//     cart.push(product);
//   }
// });
// console.log(cart);

// cartItems = document
//   .querySelector(".card-text")
//   .addEventListener("click", cartNumbers);
// function cartNumbers(event) {
//   console.log(event.target);
// }

// for (let i = 0; i < cartItems.length; i++) {
//   cartItems[i].addEventListener("click", () => {
//     cartNumbers();
//   });
// }

// hàm load đầu tiên để hiển thị số trên shop
// function onLoadCartNumber() {
//   let productNumbers = localStorage.getItem("cartNumbers");
//   if (productNumbers) {
//     document.querySelector(".cart span").textContent = productNumbers;
//   }
// }

// function cartNumbers() {
//   console.log("hello");

// let productNumbers = localStorage.getItem("cartNumbers");
// productNumbers = parseInt(productNumbers);

// if (productNumbers) {
//   localStorage.setItem("cartNumbers", productNumbers + 1);
//   document.querySelector(".cart span").textContent = productNumbers + 1;
// } else {
//   localStorage.setItem("cartNumbers", 1);
//   document.querySelector(".cart span").textContent = 1;
// }
// }

// function setItem(product) {
//   let cartItems = localStorage.getItem("ProductIncart");
//   cartItems = JSON.parse(cartItems);

//   if (cartItems != null) {
//   } else {
//     product.quantity = 1;
//     cartItems = {
//       [product.]result: product,
//     };
//   }

//   localStorage.setItem("ProductIncart", JSON.stringify(product));
// onLoadCartNumber();
