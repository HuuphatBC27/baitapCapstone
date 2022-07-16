// chạy hàm main khi mở ứng dụng
main();
function main() {
  axios({
    url: "https://62bc904d6b1401736cfd0eb4.mockapi.io/baitapCapstone",
    method: "GET",
  }).then(function (result) {
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
    <div class="col-xl-3 col-lg-6 col-sm-6 pb-5 ps-5">
    <div class="card">
    <div class="img">
    <img src="${product.img}" alt="" />
      </div>
  <div class="content">
    <h1>${product.name}</h1>
    <h5>${product.price}</h5>
    <span>${product.desc}</span>
  </div>
  </div>
   
  </div>   `;
  }
  // DOM  và xuất ra giao diện HTML

  document.getElementById("danhSachSp").innerHTML = html;
}
