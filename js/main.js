// Selectors

let logInBtn = document.querySelector("#login-btn");
let logForm = document.querySelector(".login-form");
let closeForm = document.querySelector("#close-login-form");

let header = document.querySelector(".header");
let navBar = document.querySelector(".header .nav");
let menuBtn = document.querySelector("#menu-btn");

// Open And Close Log Form

logInBtn.onclick = function () {
    logForm.classList.add("active");
}

closeForm.onclick = function () {
    logForm.classList.remove("active");
}

// Open And Close Menu Btn
menuBtn.onclick = function () {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle("active");
}

// Window On Scroll

window.onscroll = function () {
    logForm.classList.remove("active");
    menuBtn.classList.remove('fa-times');
    navBar.classList.remove("active");

    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

}

