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
    if (current > slides.length) {
        current = 0;
    }
    if(current < 0){
        current = slides.length;
    }
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
   
    nav.addEventListener("scroll", function change (){
         if (screen.height > 100) {
        nav.setAttribute("style", "background:#ffceaf");
    } else {
        nav.setAttribute("style", "background:transparent");
    }
    });
}
