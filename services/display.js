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
    
    <button id="addCart${product.id}"  class= "btn btn-success ms-3 btnSp" 
    data-bs-toggle = "modal" data-bs-target ="#exampleModal" data-type = "push" data-id = '${product.id}'
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
  // console.log(event);

  switch (type) {
    case "push":
      selectProduct(id);
      break;

    default:
      break;
  }
}

cartProduct = [];
function selectProduct(productId) {
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
      cartProduct.push(cartItem);
      cartRender();
      console.log(cartProduct);
    })
    .catch(function (error) {
      console.log(error);
    });
}

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
