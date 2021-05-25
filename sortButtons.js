root.innerHTML += `
    <button id="sort-by-price">Sorteaza dupa pret</button>
`;

function sortPhones(sortType) {
    switch(sortType) {
        // Cazul in care e apasat butonul de sortare dupa pret
        case "SORT_BY_PRICE":
            const localStorageProducts = getProducts();
            const sortedArray = localStorageProducts.sort((elem1, elem2) => {
                // Daca primul element este mai mic, se returneaza un numar negativ, ceea ce insemana ca elementele nu vor fi schimbate.
                if (elem1.price < elem2.price) {
                    return -1;
                // Elementele sunt schimbate.
                } else if (elem1.price > elem2.price) {
                    return 1;
                // Elementele raman pe loc.
                } else {
                    return 0;
                }
                // Varianta prescurtata: return elem1.price - elem2.price;
            });
            // Adaugam produsele in localStorage
            setProducts(sortedArray);
            // Afisam produsele
            renderProductList(sortedArray);
            break;
    }
}

function addSortingFunctionality() {
    // Cand se face click pe butonul de sortare dupa pret, se apeleaza functia de sortare.
    const sortByPrice = document.querySelector('#sort-by-price');
    sortByPrice.addEventListener('click', function() {
        sortPhones('SORT_BY_PRICE');
    })
}

window.addEventListener('load', addSortingFunctionality);