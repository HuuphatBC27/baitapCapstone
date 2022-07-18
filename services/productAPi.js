let baseUrl = "https://62bc904d6b1401736cfd0eb4.mockapi.io/baitapCapstone";

// lấy sp

function getProducts(search) {
  return axios({
    url: baseUrl,
    method: "GET",
    params: {
      type: search,
    },
  });
}

// thêm sp
function apiAddProducts(product) {
  return axios({
    url: baseUrl,
    method: " POST",
    data: product,
  });
}
