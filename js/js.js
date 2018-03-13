var slideIndex = 1;

function showSlide(n) {
    var i,
        slide = document.getElementsByClassName("pic");
    if (n > slide.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slideIndex.length;
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[slideIndex - 1].style.display = "block";
}

function plusSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}
showSlide(slideIndex);

function down() {
    window.scrollTo(0, 1000);
}

function changeNav() {
    var nav = document.getElementById("nav");
    if (screen.height > 100) {
        nav.setAttribute("style", "background:#ffceaf");
    } else {
        nav.setAttribute("style", "background:transparent");
    }
    //nav.("nav").addEventListener("click", down);
}
