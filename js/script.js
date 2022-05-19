let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
        if (window.scrollY > 0) {
            document.querySelector('.header').classList.add('active')
        } else {
            document.querySelector('.header').classList.remove('active')

        }

    }
    //counter
let counter = document.querySelectorAll('.container-box .num');
let section = document.querySelector('.counter');


function startCoun(el) {
    let gole = el.dataset.gole;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == gole) {
            clearInterval(count);
        }
    }, 2000 / gole)

}
counter.forEach((num) => startCoun(num))