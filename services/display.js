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
    <br>
    <button  class= "btn btn-success ms-3" 
    data-type = "addProductCart" 
    data-id = "${product.id}" > 
    Thêm vào giỏ hàng</button>
    </div>
      
    </div>
    </div>
     
      `;
  }
  // DOM  và xuất ra giao diện HTML

  document.getElementById("danhSachSp").innerHTML = html;
  // hàm load local
  // onLoadCartNumbers();
}
