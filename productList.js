root.innerHTML += `
    <h2>Telefoane:</h2>
    <ul id="product-list"></ul>
`;

function renderProductList(products) {
    const productList = document.querySelector('#product-list');
    productList.innerHTML = '';
    products.forEach(function (product) {
        const phone = new Product(product.name, product.price);
        phone.renderProduct();
    });
}