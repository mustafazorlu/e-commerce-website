function sliderFunc(){
    let slideIndex = 0;
    const nextSliderButton = document.getElementById('nextSliderButton');
    const prevSliderButton = document.getElementById('prevSliderButton');
    const sliderDotsList = document.querySelectorAll('.slider-dot');

    sliderDotsList[0].addEventListener('click', function(){
        currentSlide(0);
    });
    sliderDotsList[1].addEventListener('click', function(){
        currentSlide(1);
    });
    sliderDotsList[2].addEventListener('click', function(){
        currentSlide(2);
    });

    nextSliderButton.addEventListener('click', function(){
        plusSlide(1);
    });
    prevSliderButton.addEventListener('click', function(){
        plusSlide(-1);
    })

    function plusSlide(n){
        showSlides(slideIndex += n);
        console.log(slideIndex);
        
    }

    function currentSlide(n){
        showSlides(slideIndex = n);
    }

    plusSlide(0);

    function showSlides(n){
        const slides = document.getElementsByClassName('slider-item');
        const dots = document.getElementsByClassName('slider-dot');
        //    console.log(slides);
        
        if(n >= slides.length){
            slideIndex = 0;
        }else if(n < 0){
            slideIndex = slides.length - 1;
        }
        
        for(let i = 0; i < slides.length; i++){
            slides[i].style.display = 'none';
        }

        for(let i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(' active','');
        }


        slides[slideIndex].style.display = 'flex';
        dots[slideIndex].className += ' active';
    }

    showSlides();

    setInterval(()=> {
        showSlides(slideIndex += 1);
    },3000)
}

export default function(){
    sliderFunc();
}