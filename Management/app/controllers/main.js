main()
const url = "https://62bc904d6b1401736cfd0eb4.mockapi.io/baitapCapstone"


function main() {
  apiGetProducts()
    .then((result) => {
      var products = result.data

      for (var i = 0; i < products.length; i++) {
        var product = products[i]
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
        )
      }

      display(products)
    })
    .catch((error) => {
      console.log(error);
    })
}


function display(products) {
  var html = ``;
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    html += `
      <tr>
          <td>${i + 1}</td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.screen}</td>
          <td>${product.backCamera}</td>
          <td>${product.frontCamera}</td>
          <td ><img src="${product.img}" style="width:200px"/></td>
          <td>${product.desc}</td>
          <td>${product.type}</td>
          <td>
              <button
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
              data-type="update"
              data-id="${product.id}"
              
          >
              Cập Nhật
          </button>
          <button
              class="btn btn-danger"
              data-type="delete"
              data-id="${product.id}"
          >
              Xoá
          </button>
        </td>
      </tr>`
  }
  document.getElementById("tableDanhSach").innerHTML = html;
}

function resetForm() {
  document.getElementById("name").value = ""
  document.getElementById("price").value = ""
  document.getElementById("screen").value = ""
  document.getElementById("backCamera").value = ""
  document.getElementById("frontCamera").value = ""
  document.getElementById("img").value = ""
  document.getElementById("desc").value = ""
  document.getElementById("type").value = ""

  document.getElementById("tbName").style = "display:none"
  document.getElementById("tbPrice").style = "display:none"
  document.getElementById("tbScreen").style = "display:none"
  document.getElementById("tbBackCamera").style = "display:none"
  document.getElementById("tbFrontCamera").style = "display:none"
  document.getElementById("tbImg").style = "display:none"
  document.getElementById("tbDesc").style = "display:none"
  document.getElementById("tbType").style = "display:none"
}

function addProduct() {

  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var screen = document.getElementById("screen").value;
  var backCamera = document.getElementById("backCamera").value;
  var frontCamera = document.getElementById("frontCamera").value;
  var img = document.getElementById("img").value;
  var desc = document.getElementById("desc").value;
  var type = document.getElementById("type").value;
  var product = new Product(null, name, price, screen, backCamera, frontCamera, img, desc, type)
  if (validation(product) !== false) {

    apiAddProduct(product)
      .then((result) => {
        main()
        console.log(result)

      })
      .catch((error) => {
        consol.log(error)
      })
    resetForm()
    $("#myModal").modal("hide");

  }


}

document.querySelector(".modal-footer").addEventListener("click", handleClick)
function handleClick(event) {
  var btnType = event.target.getAttribute("btn-type")
  switch (btnType) {
    case "add":
      addProduct()
      break;
    case "update":
      updateProduct()
      break;

  }
}


function deleteProduct(productId) {
  apiDeleteProduct(productId)
    .then(() => {
      main();

    })

    .catch((error) => {
      console.log(error)
    })

}

document.getElementById("tableDanhSach").addEventListener('click', handleUserAction)

function handleUserAction(event) {
  var type = event.target.getAttribute('data-type');
  var id = event.target.getAttribute('data-id');

  switch (type) {
    case "delete":
      deleteProduct(id)
      break;
    case "update":
      showUpdateModal(id)
      break;
    default:
      break;
  }

}

function showUpdateModal(productId) {
  resetForm();
  document.getElementById('btnThemSP').disabled = true;
  document.getElementById('btnCapNhatSP').disabled = false;
  document.getElementById('header-title').innerHTML = "Cập nhật sản phẩm"

  apiGetProductDetail(productId)
    .then((result) => {
      var product = result.data
      console.log(product.id)
      document.getElementById('productId').value = product.id
      document.getElementById("name").value = product.name
      document.getElementById("price").value = product.price
      document.getElementById("screen").value = product.screen
      document.getElementById("backCamera").value = product.backCamera
      document.getElementById("frontCamera").value = product.frontCamera
      document.getElementById("img").value = product.img
      document.getElementById("desc").value = product.desc
      document.getElementById("type").value = product.type
    })
    .catch((error) => { console.log(error) })

}

function updateProduct() {
  var id = document.getElementById("productId").value
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var screen = document.getElementById("screen").value;
  var backCamera = document.getElementById("backCamera").value;
  var frontCamera = document.getElementById("frontCamera").value;
  var img = document.getElementById("img").value;
  var desc = document.getElementById("desc").value;
  var type = document.getElementById("type").value;
  var product = new Product(id, name, price, screen, backCamera, frontCamera, img, desc, type)

  if (validation(product) !== false) {
    apiUpdateProduct(product)
      .then((result) => {
        main()

      })
      .catch((error) => {
        console.log(error);
      });
    resetForm();
    $("#myModal").modal("hide");

  }
}

function disableUpdate() {
  resetForm()
  document.getElementById('btnThemSP').disabled = false;
  document.getElementById('btnCapNhatSP').disabled = true;
  document.getElementById('header-title').innerHTML = "Thêm sản phẩm"
}



//Validation 

function isRequired(value) {
  if (!value) {
    return false;
  }
  return true
}


function validation(product) {
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var screen = document.getElementById("screen").value;
  var backCamera = document.getElementById("backCamera").value;
  var frontCamera = document.getElementById("frontCamera").value;
  var img = document.getElementById("img").value;
  var desc = document.getElementById("desc").value;
  var type = document.getElementById("type").value;
  var isValid = true;

  if (!isRequired(name)) {
    isValid = false
    document.getElementById("tbName").innerHTML = "Tên sản phẩm không được để trống";
    document.getElementById('tbName').style = "display:block"
  }
  if (!isRequired(price)) {
    isValid = false
    document.getElementById("tbPrice").innerHTML = "Giá sản phẩm không được để trống";
    document.getElementById('tbPrice').style = "display:block"
  }
  if (!isRequired(screen)) {
    isValid = false
    document.getElementById("tbScreen").innerHTML = "Màn hình sản phẩm không được để trống";
    document.getElementById('tbScreen').style = "display:block"
  }
  if (!isRequired(backCamera)) {
    isValid = false
    document.getElementById("tbBackCamera").innerHTML = "Camera sau sản phẩm không được để trống";
    document.getElementById('tbBackCamera').style = "display:block"
  }
  if (!isRequired(frontCamera)) {
    isValid = false
    document.getElementById("tbFrontCamera").innerHTML = "Camera trước sản phẩm không được để trống";
    document.getElementById('tbFrontCamera').style = "display:block"
  }
  if (!isRequired(img)) {
    isValid = false
    document.getElementById("tbImg").innerHTML = "Hình ảnh sản phẩm không được để trống";
    document.getElementById('tbImg').style = "display:block"
  }
  if (!isRequired(desc)) {
    isValid = false
    document.getElementById("tbDesc").innerHTML = "Mô tả sản phẩm không được để trống";
    document.getElementById('tbDesc').style = "display:block"
  }
  if (!isRequired(type)) {
    isValid = false
    document.getElementById("tbType").innerHTML = "Loại sản phẩm không được để trống";
    document.getElementById('tbType').style = "display:block"
  }


  return isValid

}

//Search
document.getElementById('searchName').addEventListener('keypress', searchProduct)

document.getElementById('btnTimNV').addEventListener("click", searchProduct)

function subSearchProduct() {
  var productSearch = document.getElementById("searchName").value;
  productSearch = productSearch.toLowerCase();


  apiGetProducts(productSearch)
    .then((res) => {
      products = res.data
      for (var i = 0; i < products.length; i++) {
        var product = products[i]
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
        )
      }
      display(products)
    })
    .catch((err) => { console.log(err) })
}

function searchProduct(event) {

  if (event.type === "keypress") {
    if (event.key !== "Enter") {
      return;
    }
    else {
      subSearchProduct()
    }
  }
  else if (event.type === "click") {
    subSearchProduct()
  }


}
document.getElementById('searchName').addEventListener('keyup', resetSearchProduct)

function resetSearchProduct() {
  var productSearch = document.getElementById("searchName").value;
  productSearch = productSearch.toLowerCase();
  if (productSearch === "") {
    apiGetProducts()
      .then((result) => {
        var products = result.data

        for (var i = 0; i < products.length; i++) {
          var product = products[i]
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
          )
        }

        display(products)
      })
      .catch((error) => {
        console.log(error);
      })
  }

}
