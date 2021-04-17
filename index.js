// index.js este primul fisier care se incarca, deci root va fi disponibil in toate celelalte fisiere.
const root = document.querySelector('#root');
// Vrem ca produsele sa fie disponibile in intreaga aplicatie, pentru a putea fi modificate.
const products = [
    {
        // Un telefon are nume si pret.
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

function startRendering() {
    // Randam(afisam) lista de produse, trimitand ca parametru produsele.
    renderProductList(products);
}
// DUPA ce s-au incarcat TOATE scripturile, apelam functia startRendering.
// Facem asta pentru ca la momentul incarcarii lui index.js, nu stim cine e renderProductList.
window.addEventListener('load', startRendering);