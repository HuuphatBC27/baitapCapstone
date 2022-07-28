// //Array localstorege
// cart = [];

// //Thêm sản phẩm vào giỏ hàng
// const addCart = (event) => {
//   let id = event.target.parentElement.getAttribute("data-id");
//   let type = event.target.parentElement.getAttribute("data-type");
//   console.log(id);
//   console.log(type);
//   // if (id === null) {
//   //   return;
//   // }
//   // if (type === "push") {
//   //   const index = cart.findIndex((product) => product.id === id);
//   //   if (index === -1) {
//   //     apiGetProductDetail(productId).then(function (result) {
//   //       document.getElementById("danhSachSp").innerHTML = "";
//   //       let products = result.data;
//   //       products.amount += 1;
//   //       localProducts.push(products);
//   //       localStorage.setItem("products", JSON.stringify(localProducts));
//   //       // console.log('add to cart');
//   //       localRender();
//   //     });

//   //     document.getElementById(`addCart${id}`).style.display = "None";
//   //     document.querySelector(`.showAmount${id}`).style.display = "Block";
//   //   }
//   // }
// };
// //Event click của btn thêm SP
// document.getElementById("danhSachSp").addEventListener("click", addCart);
