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