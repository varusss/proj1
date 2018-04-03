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
        if (w > 1024) {
            if (window.scrollY > h - 50) {
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
        reg = new RegExp("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/", "g"),
        CheckEmail = email.match(reg);

    /*Check email format */
    reg = reg.test(CheckEmail);
    console.log(isNaN(name));
    console.log(reg);
    /*Form validation*/
    if (isNaN(name) === false) {
        respond.innerHTML = "<p>*Name not valid</p>";
    }
    if (reg === true) {
        respond.innerHTML = "<p> *Invalid Email</p>";
    }
    if (isNaN(name) === true && reg === false) {
        document.getElementById("form").submit();
        console.log("mayber?????");
    }
}

function iconMenu() {
    var click = document.getElementById("nav").classList.toggle("change"),
        content = document.getElementById("content");
    if (click === true) {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }

}
