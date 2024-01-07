const productContainer = document.getElementById('product-list'); 

export function product1(){
    productContainer && new Glide('.glide',{
        perView: 4,
        gap:20,
        autoplay:3000,
        bound:true,
        breakpoints:{
            992:{
                perView:3,
            },
            768:{
                perView:2,
            },
            576:{
                perView:1,
            }
        }
    }).mount()
}

productContainer && new Glide('.glide2',{
    type: 'carousel',
    perView: 4,
    gap:20,
    autoplay:3000,
    bound:true,
    breakpoints:{
        992:{
            perView:3,
        },
        768:{
            perView:2,
        },
        576:{
            perView:1,
        }
    }
}).mount()