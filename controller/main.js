// chạy hàm main khi mở ứng dụng
main();
function main() {
  getProducts().then(function (result) {
    let products = result.data;
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      products[i] = new Product(
        product.id,
        product.name,
        product.price,
        product.screen,
        product.backCamera,
        product.forontCamera,
        product.img,
        product.desc,
        product.type
      );
    }
    // hàm display
    display(products);
  });
}
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
  <button class= "btn btn-success ms-3"> Add</button>
  </div>
    
  </div>
  </div>
   
    `;
  }
  // DOM  và xuất ra giao diện HTML

  document.getElementById("danhSachSp").innerHTML = html;
}

// Nút select

function start() {
  document.getElementById("cars").addEventListener("change", selectItem, false);
}

function selectItem(evt) {
  console.log(evt);

  //option is selected
  var value = evt.target.value;

  getProducts(value).then(function (result) {
    let products = result.data;
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      products[i] = new Product(
        product.id,
        product.name,
        product.price,
        product.screen,
        product.backCamera,
        product.forontCamera,
        product.img,
        product.desc,
        product.type
      );
    }
    // hàm display
    display(products);
  });
}

window.addEventListener("load", start, false);
