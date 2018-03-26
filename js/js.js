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
        if (window.scrollY > 400) {
            nav.setAttribute("style", "background:linear-gradient(-90deg, #ffffff, #ffceaf, #ffffff);");
        } else {
            nav.setAttribute("style", "background: linear-gradient(-90deg, #ffffff, #86bcdd, #ffffff);");
        }
    };
};

function validate() {
    var name = document.getElementById("name").value,
        email = document.getElementById("email").value,
        //msm = document.getElementById("msm").value,
        respond = document.getElementById("invalide"),
        /*Regular Expression*/
        reg = new RegExp("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/", "g"),
        CheckEmail = email.match(reg);
    
    /*Check if @ is there */
    reg = reg.test(CheckEmail);
    //console.log(typeof msm);
    
    /*Form validation*/
    if (isNaN(name) === false && reg === false) {
        respond.innerHTML = "<p>*Name not valid and email not valid</p>";
    }
    if(isNaN(name)===false){
        respond.innerHTML = "<p> *Name is not valid </p>"
    }
    if(reg === false){
        respond.innerHTML ="<p> *Invalid Email</p>"
    }
    if(isNaN(name) === true && reg === true){
        document.getElementById("form").submit();
    }
//    if(msm === null){
//        respond.innerHTML ="<p>Blank Message</p>"
//    }
    else{
        console.log("Reset");
    }
}
