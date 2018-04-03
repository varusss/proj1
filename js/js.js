var slides = document.getElementsByClassName("pic"),
    current = 1;

function nextSlide() {
    slideShows(current += 1);
    if (current > 2) current = 0;
}

function prevSlide() {
    slideShows(current -= 1);
    if (current <= 0) current = slides.length;
}
slideShows(current);

function slideShows(current) {

    switch (current) {
        case 0:
        case 3:
            slides[0].style.display = "block";
            slides[1].style.display = "none";
            slides[2].style.display = "none";
            break;
        case 1:
            slides[0].style.display = "none";
            slides[1].style.display = "block";
            slides[2].style.display = "none";
            break;
        case 2:
            slides[0].style.display = "none";
            slides[1].style.display = "none";
            slides[2].style.display = "block";
            break;
    }
}

/*Scroll to the end, smooth scroll */
function down() {
    window.scroll({
        top: 700,
        left: 0,
        behavior: 'smooth'
    });
}


function changeNav() {
    var nav = document.getElementById("nav");
    var w = window.innerWidth;
    var h = window.innerHeight;
    window.onscroll = function () {
        if (w > 700) {
            if (window.scrollY > h) {
                nav.setAttribute("style", "background:linear-gradient(-90deg, #ffffff, #ffceaf, #ffffff); box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);");
            } else {
                nav.setAttribute("style", "background: transparent");
            }
        } 

    };
};

function validate() {
    var name = document.getElementById("name").value,
        email = document.getElementById("email").value,
        respond = document.getElementById("invalide"),
        /*Regular Expression*/
        reg = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", "g"),
        CheckEmail = email.match(reg);

    /*Check email format */
    reg = reg.test(CheckEmail);

    /*Form validation*/
    if (isNaN(name) === false) {
        respond.innerHTML = "<p>*Name not valid</p>";
    }
    if (isNaN(name) === false) {
        respond.innerHTML = "<p> *Name is not valid </p>"
    }
    if (reg === false) {
        respond.innerHTML = "<p> *Invalid Email</p>"
    } else {
        console.log("Reset");
    }
}

function iconMenu() {
    var click = document.getElementById("nav").classList.toggle("change");
    if (click === true) {
        document.getElementById("content").style.display = "block";
    } else {
        document.getElementById("content").style.display = "none";
    }

}
