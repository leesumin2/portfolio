'use strict';

// 스크롤에 따른 navbar 색 변경
const navbar = document.querySelector('#navbar');
// 브라우저에서 보여지는 width, height 받아와야하기 때문에
// getBoundingClientRect() 사용.
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--change-color');
    } else {
        navbar.classList.remove('navbar--change-color');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: "smooth" });
    // window.scrollBy(0, -50);
});