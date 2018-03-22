var slides = document.getElementsByClassName("pic"),
    current = 0;

function nextSlide() {
    slideShows(current += 1);
}

function prevSlide() {
    slideShows(current -= 1);
}

function slideShows(current) {
    var i;
    if (current > slides.length - 1) {
        current = 0;
    }
    if (current < 0) {
        current = 0;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[current].style.display = "block";
}

function down() {
    window.scroll({
        top: 1000,
        left: 0,
        behavior: 'smooth'
    });
}

function changeNav() {
    var nav = document.getElementById("nav");
    window.onscroll = function () {
        if (window.scrollY > 300) {
            nav.setAttribute("style", "background:#ffceaf;");
        } else {
            nav.setAttribute("style", "background:transparent;");
        }
    };
};

function validate() {
    var name = document.getElementById("name").value,
        respond = document.getElementById("invalide");
    if (isNaN(name)) {
        respond.innerHTML = "Name not valid";
    }
}
