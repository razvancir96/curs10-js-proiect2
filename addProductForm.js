root.innerHTML += `
    <form id="add-product">
        <label for="name">Nume:</label>
        <input type="text" name="name" id="name"/>
        <label for="price">Pret:</label>
        <input type="number" name="price" id="price"/>
        <input type="submit"/>
    </form>
`

function addFormFunctionality() {
    const form = document.querySelector('#add-product');
    form.addEventListener('submit', function(event) {
        console.log(event)
        event.preventDefault();
        const phoneName = event.target.name.value;
        const phonePrice = Number(event.target.price.value);
        const newPhone = {
            name: phoneName,
            price: phonePrice
        };

        // Extragem produsele din localStorage
        const localStorageProducts = getProducts();
        // Modificam array-ul de produse
        localStorageProducts.push(newPhone);
        // Adaugam array-ul modificat in localStorage
        setProducts(localStorageProducts);

        renderProductList(localStorageProducts);
    })
}

window.addEventListener('load', addFormFunctionality);