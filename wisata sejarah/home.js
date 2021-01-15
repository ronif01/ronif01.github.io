// slider pada homepage
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// responsive navbar
function navbarClass() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function show() {
    var titik2 = document.getElementById("titik2");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (titik2.style.display === "none") {
        titik2.style.display = "inline";
        btnText.innerHTML = "<b>Lihat Selengkapnya</b>";
        moreText.style.display = "none";
    } else {
        titik2.style.display = "none";
        btnText.innerHTML = "<b>Lihat Lebih Sedikit</b>";
        moreText.style.display = "inline";
    }
}