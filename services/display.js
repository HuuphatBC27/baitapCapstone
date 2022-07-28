function display(products) {
  let html = "";

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    html += `
      <div class="   col-lg-4 col-sm-6 pb-5 ps-5 ">
      <div class="card border border-light">
      <div class="img">
      <img src="${product.img}" alt="" />
    </div>
    
    <div class = "card-text" id='card-text'>
    
    <h1 style="font-size:2rem">${product.name}</h1>
    <h5>${product.price}</h5>
    <p>${product.desc}</p>

    <div class="d-flex justify-content-end" id="btnAdd">
    <button id="addCart"  class= "btn btn-success btnSp " 
    data-type = "push" data-id = '${product.id}'
     > 
     Thêm vào giỏ hàng</button>
     </div>
    </div>
      
    </div>
    </div>
     
      `;
  }
  // DOM  và xuất ra giao diện HTML

  document.getElementById("danhSachSp").innerHTML = html;
}

// lắng nge button


// cartProduct = [];
// function selectProduct(productId) {
//   apiGetProductDetail(productId)
//     .then(function (result) {
//       // thành công
//       let products = result.data;
//       console.log(products);
//       let cartItem = [
//         {
//           product: {
//             id: products.id,
//             img: products.img,
//             name: products.name,
//             price: products.price,
//           },
//           quantity: 1,
//         },
//       ];
//       cartProduct.push(cartItem);
//       cartRender();
//       console.log(cartProduct);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

//render

function cartRender(product) {
  for (let i = 0; i < cartProduct.length; i++) {
    let cart = "";
    let products = new Products(
      products.id,
      products.name,
      products.price,
      products.screen,
      products.backCamera,
      products.frontCamera,
      products.img,
      products.desc,
      products.type
    );
  }
  cart += `<tr>
  <td> ${products.id}</td>
        <td class="clear-tbl">
              <img src="${product.img}" alt="" style="width:50px;height:50px">
        </td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td><button data-type="delete" data-id="${product.id}"  class="btn-del-product"><i class="fa-solid fa-trash"></i></button></td>
      </tr>
      `;

  //Render danh sách sản phẩm
  document.getElementById("myCart").innerHTML += cart;
}
