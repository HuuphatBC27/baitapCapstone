var baseUrl = "https://62bc904d6b1401736cfd0eb4.mockapi.io/baitapCapstone";

function apiGetProducts(search) {
    return axios({
        url: baseUrl,
        method: 'get',
        params: { name: search, }
    })
}

function apiAddProduct(product) {
    return axios({
        url: baseUrl,
        method: 'post',
        data: product,
    }
    )
}

function apiDeleteProduct(productId) {
    return axios({
        url: `${baseUrl}/${productId}`,
        method: "delete"

    })
}

function apiGetProductDetail(productId) {
    return axios({
        url: `${baseUrl}/${productId}`,
        method: "get"
    })
}

function apiUpdateProduct(product) {
    return axios({
        url: `${baseUrl}/${product.id}`,
        method: 'put',
        data: product
    })
}