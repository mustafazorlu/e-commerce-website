import { product1 } from "./glide.js";

let products = [];
let cart = [];

cart = localStorage.getItem('cart')
? JSON.parse(localStorage.getItem('cart'))
: [];

function addToCart(){
    const cartItems = document.querySelector('.header-cart-count');
    
    const buttons = [...document.getElementsByClassName("add-to-cart")];
    buttons.forEach(button => {

        const inCart = cart.find(item => item.id == button.dataset.id);
        if(inCart){
            button.setAttribute('disabled','disabled');
        }else{
            button.addEventListener('click', (e) => {
            
                const id = e.target.dataset.id;
                const findProduct = products.find(product => product.id == id);
                cart.push({...findProduct, quantity:1});
                localStorage.setItem("cart", JSON.stringify(cart));
                button.setAttribute('disabled','disabled');
                cartItems.innerHTML = cart.length;
            })
        }

        
    })
}




function productFunc(){
    
    products = (localStorage.getItem("products")) 
    ? JSON.parse(localStorage.getItem('products')) 
    : [];

    const productContainer = document.getElementById('product-list'); 
    

    let results = "";
    products.forEach(item => {
        results += `
            <li class="product-item glide__slide">
                <div class="product-image">
                    <a href="">
                        <img src="${item.img.singleImage}" alt="" class="img1">
                        <img src="${item.img.thumbs[1]}" alt="" class="img2">
                    </a>
                </div>
                <div class="product-info">
                    <a href="#" class="product-title">${item.name}</a>
                    <ul class="product-star">
                        <li>
                            <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                            <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                            <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                            <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                            <i class="bi bi-star-half"></i>
                        </li>
                    </ul>
                    <div class="product-prices">
                        <strong class="new-price">$${item.price.newPrice}</strong>
                        <span class="old-price">$${item.price.oldPrice}</span>
                    </div>
                    <span class="product-discount">-${item.discount}%</span>
                    <div class="product-links">
                        <button class="add-to-cart" data-id="${item.id}">
                            <i class="bi bi-basket-fill"></i>
                        </button>
                        <button>
                            <i class="bi bi-heart-fill"></i>
                        </button>
                        <a href="#">
                            <i class="bi bi-eye-fill"></i>
                        </a>
                        <a href="">
                            <i class="bi bi-share-fill"></i>
                        </a>

                    </div>
                </div>
            </li>
        `;
        productContainer ? (productContainer.innerHTML = results) : '';
        product1();
        addToCart();
});

    
}   


export default productFunc;