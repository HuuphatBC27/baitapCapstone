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

// Nút select

function start() {
  document.getElementById("cars").addEventListener("change", selectItem, false);
}

function selectItem(evt) {
  console.log(evt);

  //option is selected
  var value = evt.target.value;
  console.log(value);
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
        product.frontCamera,
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
