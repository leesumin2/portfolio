// Navbar
document.addEventListener('scroll', function () {
    let currentScrollValue = document.documentElement.scrollTop;
    let navbar = document.getElementById("navbar");
    if (currentScrollValue > 40) {
        navbar.style.backgroundColor = "#B2CCFF";
    } else {
        navbar.style.backgroundColor = "#bbddf8";
    }
});
