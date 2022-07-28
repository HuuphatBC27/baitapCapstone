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
    
    <div class = "card-text">
    
    <h1>${product.name}</h1>
    <h5>${product.price}</h5>
    <span>${product.desc}</span>
    
    <button  class= "btn btn-success ms-3 btnSp" 
    data-bs-toggle = "modal" data-bs-target ="#exampleModal" data-type = "add" data-id = '${product.id}'
     > 
    Thêm vào giỏ hàng</button>
    </div>
      
    </div>
    </div>
     
      `;
  }
  // DOM  và xuất ra giao diện HTML

  document.getElementById("danhSachSp").innerHTML = html;
}

// lắng nge button
document
  .getElementById("danhSachSp")
  .addEventListener("click", handleAddProduct);
function handleAddProduct(event) {
  let type = event.target.getAttribute("data-type");
  let id = event.target.getAttribute("data-id");

  switch (type) {
    case "add":
      selectProduct(id);
      break;

    default:
      break;
  }
}

function selectProduct(productId) {
  cart = [];
  apiGetProductDetail(productId)
    .then(function (result) {
      // thành công
      let products = result.data;
      console.log(products);
      let cartItem = [
        {
          product: {
            id: products.id,
            img: products.img,
            name: products.name,
            price: products.price,
          },
          quantity: 1,
        },
      ];
      console.log(cartItem);

      // for (let i = 0; i < cart.length; i++) {
      //   document.getElementById("myCart").innerHTML = `
      //   <tr>
      //   <td>${products.id}</td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   </tr>`;
      // }
    })
    .catch(function (error) {
      console.log(error);
    });
}
