function loadTable() {
    fetch('table.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('table-container').innerHTML = html;
            api.fetchProducts().then(data => {
                const table = document.getElementById('productTable');
                table.innerHTML = '';
                data.forEach(product => {
                    table.innerHTML += `
                        <tr>
                            <td>${product.id}</td>
                            <td>${product.name}</td>
                            <td>${product.price}</td>
                            <td>
                                <button class="btn btn-sm btn-warning" onclick="editProduct('${product.id}', '${product.name}', ${product.price})">Edit</button>
                                <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
                            </td>
                        </tr>
                    `;
                });
            });
        });
}

function deleteProduct(id) {
    if (confirm('Delete this product?')) {
        api.deleteProduct(id).then(() => loadTable());
    }
}