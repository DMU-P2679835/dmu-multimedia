/* Code idea from channel Mr.Web Designer on YouTube 
url(https://www.youtube.com/watch?v=-dBzfndKwZo&list=PLJj3q3QElARCQsNKN8Zrwv0aOPOq1zKgC&index=3&t=4106s)*/

/* give navbar & menubtn a proper name in document.querySelector feature */
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

/* When click/toggle menu button the menu button will rotate(180deg) and changes shape(fa-time:cross symbol) then navigation bar will drop down(active) */
menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


/* This algorithm was from Swiper website I just add the grabCursor, to grab the picture and move, also the image will move in loop */
var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    /* centeredSlides use with the text animation in image slider */
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
