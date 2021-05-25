const root = document.querySelector('#root');
const products = [
    {
        name: 'Iphone XS',
        price: 4500
    },
    {
        name: 'Huawei P30',
        price: 4000
    },
    {
        name: 'Samsung S10',
        price: 4250
    }
];

// Functie folosita pentru a extrage produsele din localStorage
function getProducts() {
    // Extragem valoarea corespunzatoare cheii "products".
    const localStorageProducts = localStorage.getItem("products");
    // Transformam produsele din string in vector de obiecte.
    console.log(localStorageProducts);
    const parsedProducts = JSON.parse(localStorageProducts);
    // Returnam produsele.
    return parsedProducts;
}

// Functie folosita pentru a adauga produsele in localStorage
function setProducts(products) {
    // Parametrul primit este transformat in sir de caracter.
    const stringifiedProducts = JSON.stringify(products);
    // Setam valoarea corespunzatoare in localStorage.
    localStorage.setItem("products", stringifiedProducts);
}

// Daca nu avem produsele in localStorage, atunci le adaugam.
if (getProducts() === null){
    setProducts(products);
}

function startRendering() {
    // Produsele afisate pe ecran sunt preluate din localStorage.
    const localStorageProducts = getProducts();
    renderProductList(localStorageProducts);
}
window.addEventListener('load', startRendering);