let box = document.querySelector(".nav-list");
let btn = document.querySelector(".M-Burger");

btn.addEventListener('click', ()=>{
    if(box.style.height != "150px"){
        box.style.height = "150px";
        box.style.padding = "5px";
    }
    else{
        box.style.height = "0"
        box.style.padding = "0";
    }
});



let currentSlide = 0;
const slideInterval = 3000; // Change slide every 3 seconds

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    // Wrap-around index handling
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    // Update the transform style with correct syntax
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

function autoplaySlides() {
    currentSlide++;
    showSlide(currentSlide);
}

// Show the first slide
showSlide(currentSlide);

// Start autoplay
setInterval(autoplaySlides, slideInterval);

 