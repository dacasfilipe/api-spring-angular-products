const apiUrl = 'http://localhost:8080/api/products';

const api = {
    fetchProducts: () => fetch(apiUrl).then(res => res.json()),
    createProduct: (product) =>
        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        }),
    updateProduct: (id, product) =>
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        }),
    deleteProduct: (id) =>
        fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
};