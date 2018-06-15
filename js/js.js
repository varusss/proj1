var slides = document.getElementsByClassName("pic"),
    current = 0,
    w = window.innerWidth,
    h = window.innerHeight;

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
    window.onscroll = function () {
        var navHeight = nav.clientHeight;
        if (w > 1024) {
            if (window.scrollY > navHeight) {
                nav.classList.add("changeNavColor");
            } else {
                nav.classList.remove("changeNavColor");
            }
        } else {
            if (window.scrollY > h - 100) {
                nav.setAttribute("style", "background: linear-gradient(45deg, rgb(41, 67, 83) 70%,  rgb(163, 124, 98) 33%); box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);");
            } else {
                nav.setAttribute("style", "background: #437695;");
            }
        }

    }

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
    }
}

function iconMenu() {
    var click = document.getElementById("nav").classList.toggle("change"),
        content = document.getElementById("content"),
        li1 = document.getElementById("content").getElementsByTagName("LI")[0];
    console.log(click);
    if (click === true) {
        content.style.display = "block";
    }
    if (click === false) {
//        li1.innerHeight = "me";
//        setTimeout(function () {
//            content.style.display = "none";
//        }, 1300)
        content.style.display = "none";
    }

}

function displayLetter(){
    var displayLetter2 = document.getElementById('letter2'),
        displayLetter1 = document.getElementById('letter1'),
        letter2 = document.getElementsByClassName('letter2')[0],
        letter1 = document.getElementsByClassName('letter1')[0],
        dash1 = document.getElementById('dash1'),
        dash2 = document.getElementById('dash2'),
        card = document.getElementsByClassName('card')[0];

        displayLetter1.onclick = function () {
            letter1.style.display = "block";
            letter2.style.display = "none";
            dash1.style.display = "block";
            dash2.style.display = "none";
            card.classList.toggle('is-flipped');
        }

        displayLetter2.onclick = function () {
            letter1.style.display = "none";
            letter2.style.display = "block";
            dash1.style.display = "none";
            dash2.style.display = "block";
            card.classList.toggle('is-flipped');
        }
}
