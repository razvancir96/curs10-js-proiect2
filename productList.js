function renderProductList(products) {
    root.innerHTML += `
        <h2>Telefoane:</h2>
        <ul id="product-list"></ul>
    `;
    products.forEach(function (product) {
        const phone = new Product(product.name, product.price);
        phone.renderProduct();
    });
}