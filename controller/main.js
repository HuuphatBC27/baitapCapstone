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
        product.frontCamera,
        product.img,
        product.desc,
        product.type,
        product.quantity
      );
    }
    console.log(products)

    // hàm display
    display(products);
  });
}

let carts = []



document.getElementById("danhSachSp").addEventListener("click", handleAddProduct);
function handleAddProduct(event) {
  let id = event.target.getAttribute("data-id")
  apiGetProductDetail(id)
    .then((res) => {
      let product = res.data


      const index = carts.findIndex(product => product.id === id)
      if (index === -1) {
        carts.push(product)
        let html =
          `
      <tr>
      <td><img src="${product.img}" style='width:100px;height:100px'/></td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.quantity = 1}</td>
      </tr >`
        document.getElementById('myCart').innerHTML += html
        console.log(carts)
      }
      else {

        carts[index].quantity += 1
        console.log(carts)

        apiGetProductDetail(id)
          .then((res) => {
            let product = res.data
            for (i = 0; i <= carts.length; i++) {
              let html = `
          <tr>
          <td><img src="${carts[i].img}" style='width:100px;height:100px'/></td>
          <td>${carts[i].name}</td>
          <td>${carts[i].price}</td>
          <td>${carts[index].quantity}</td>
          </tr >`
          console.log(html)
              document.getElementById('myCart').innerHTML = html
            }
          }


          )
      }
    })
    .catch((error) => { console.log(error) })
}



    

// const data = JSON.parse(localStorage.getItem('myCart'))
// console.log(data)
// for (i = 0; i <= data.length; i++) {
//   let html =
//     `
// <tr>
// <td><img src="${data[i].img}" style='width:100px;height:100px'/></td>
// <td>${data[i].name}</td>
// <td>${data[i].price}</td>
// <td>${data[i].quantity}</td>
// </tr >`
//   document.getElementById('myCart').innerHTML += html
//   carts.push(data[i])

// }





