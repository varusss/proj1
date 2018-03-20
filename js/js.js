var slides = document.getElementsByClassName("pic"),
    current = 0;

function nextSlide() {
    slideShows(current += 1);
}

function prevSlide() {
    slideShows(current -= 1);
}

function slideShows(n) {
    var i;
    n = current;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[current].style.display = "block";
}



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
