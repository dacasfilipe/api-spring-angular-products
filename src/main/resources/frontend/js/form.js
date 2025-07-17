function loadForm() {
    fetch('form.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('form-container').innerHTML = html;
            document.getElementById('productForm').onsubmit = onFormSubmit;
            document.getElementById('cancelBtn').onclick = resetForm;
        });
}

function resetForm() {
    document.getElementById('productId').value = '';
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
}

function onFormSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('productId').value;
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const product = { name, price };

    if (id) {
        api.updateProduct(id, product).then(() => {
            loadTable();
            resetForm();
        });
    } else {
        api.createProduct(product).then(() => {
            loadTable();
            resetForm();
        });
    }
}

function editProduct(id, name, price) {
    document.getElementById('productId').value = id;
    document.getElementById('productName').value = name;
    document.getElementById('productPrice').value = price;
}