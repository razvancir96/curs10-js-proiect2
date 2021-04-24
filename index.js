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

function startRendering() {
    renderProductList(products);
}
window.addEventListener('load', startRendering);