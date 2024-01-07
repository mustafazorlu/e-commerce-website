import Header from "./header.js";
import Slider from "./slider.js";
import Product from "./products.js";

Header();
Slider();

(async function(){
    const photos = await fetch('../js/data.json');
    const data = await photos.json();

    data ? localStorage.setItem('products', JSON.stringify(data)) : [];
    
    Product();
})();

const cartItems = document.querySelector('.header-cart-count');
console.log(cartItems)
cartItems.innerHTML = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : '0';












// console.log(products);
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

