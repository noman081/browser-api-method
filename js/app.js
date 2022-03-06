const addCart = () => {
    const searchFeild = document.getElementById('search-text');
    const searchText = searchFeild.value;
    searchFeild.value = '';
    if (!searchText) return;
    //display products in UI
    displayProducts(searchText);

    //add to local storage
    addProductToCart(searchText);
}
const displayInitialCart = () => {
    const cart = getCart();
    console.log(cart);
    for (const name in cart) {
        displayProducts(name);
    }
}

const displayProducts = productName => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = productName;
    ul.appendChild(li);
}
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart);
    }
    else {
        cartObject = {};
    }
    return cartObject;
}

const addProductToCart = name => {
    const cart = getCart();
    cart[name] = 1;
    console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const purchaseNow = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

displayInitialCart();