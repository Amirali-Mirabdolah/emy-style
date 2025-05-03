export async function getProducts() {
    const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
    return response.json()
}

export async function getProduct(id) {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`,{
        cache:'reload'
    })
    return response.json()
}