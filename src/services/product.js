export async function getProducts() {
    const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
    return response.json()
}

export async function getProduct(id) {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        cache: 'reload'
    })
    return response.json()
}

export async function getProductsByCategory(id) {
    const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products?offset=0&limit=5`)
    return response.json()
}

export async function getCategories() {
    const response = await fetch(`https://api.escuelajs.co/api/v1/categories`)
    return response.json()
}

export async function getCategoryProducts(id) {
    const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
    return response.json()
}