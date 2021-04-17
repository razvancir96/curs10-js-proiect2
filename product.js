// Fiecare produs va fi un obiect cret cu ajutorul clasei Product.
class Product {
    // La creare, produsului i se va preciza numele si pretul.
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // Cream o metoda care va afisa produsul pe ecran.
    renderProduct() {
        // Selectam lista.
        const productList = document.querySelector('#product-list');
        // Afisam produsul pe ecran, tinand cont de nume si pret.
        productList.innerHTML += `
            <li class="product">
                <p>Nume: ${this.name}</p>
                <p>Pret: ${this.price}</p>
            </li>
        `;
    }
}