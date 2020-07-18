const hamburger= document.querySelector('.hamburger');
const navbar= document.querySelector('.top-navbar');
const links= document.querySelectorAll('.top-navbar li');

hamburger.addEventListener('click', ()=> {
    navbar.classList.toggle('open');
});

