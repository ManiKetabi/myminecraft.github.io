//header

let ul = document.querySelector("ul");
let menuBtn = document.querySelector("#menu-btn");
let header = document.querySelector("header");

menuBtn.onclick = () =>{
    ul.classList.toggle("active");
    menuBtn.classList.toggle("fa-times");
}

window.onscroll = () =>{
    ul.classList.remove("active");
    menuBtn.classList.remove("fa-times");

    if(window.scrollY > 0){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
}

//slideshow

var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
clearTimeout(timer);
showSlides(slideIndex += n);
}

function currentSlide(n) {
clearTimeout(timer);
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n==undefined){n = ++slideIndex}
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
timer = setTimeout(showSlides, 10000);
} 