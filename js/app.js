const addCart = () => {
    const searchFeild = document.getElementById('search-text');
    const searchText = searchFeild.value;
    searchFeild.value = '';

    //display products in UI
    displayProducts(searchText);

    //add to local storage
    addToCart(searchText);
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

const addToCart = name => {
    const cart = getCart();
    cart[name] = 1;
    console.log(cart);
}

const purchaseNow = () => {
    document.getElementById('products').textContent = '';
}