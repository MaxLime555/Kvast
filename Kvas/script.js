//работа слайдера
const slider = document.querySelector(".slider__reviews");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentIndex = 0;

function showSlide(index) {
    const slideWidth = document.querySelector(".review").offsetWidth;
    const newPosition = -index * slideWidth;
    slider.style.transform = `translateX(${newPosition}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    showSlide(currentIndex);
}

function autoSlide() {
    nextSlide();
}

nextBtn.addEventListener("click", function () {
    clearInterval(autoSlideInterval);
    nextSlide();
});

prevBtn.addEventListener("click", function () {
    clearInterval(autoSlideInterval);
    prevSlide();
});

let autoSlideInterval = setInterval(autoSlide, 3000);


//бургер-меню
let menu = document.querySelector('.menu');
let menuList = document.querySelector('.menu__list');
let burgerIcon = document.querySelector('.burger__icon');
let mobileMenu = document.querySelector('.mobile-menu');
let closeMenu = document.querySelector('.mobile-menu__close');
let buttonBottom = document.querySelector('.details__menu')

burgerIcon.addEventListener("click", function () {
    mobileMenu.style.display = 'block';
    burgerIcon.style.display = 'none';
});

buttonBottom.addEventListener("click", function () {
    menuList.style.display = 'none';
    menu.style.display = 'block';
    mobileMenu.style.display = 'block';

});

closeMenu.addEventListener("click", function () {
    mobileMenu.style.display = 'none';
    burgerIcon.style.display = 'block';
});


//работа шапки сайта и подвального окошка
window.addEventListener('scroll', function () {
    let header = document.querySelector('.header');
    let menu = document.querySelector('.menu');
    let footerPromo = document.querySelector('.more__details');

    let headerHeight = header.offsetHeight;
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > headerHeight) {
        menu.style.position = 'fixed';
        menu.style.width = '100%';
        menu.style.zIndex = '50';
        menu.style.top = '0';
    } else {
        menu.style.position = 'relative';
    }

    if (scrollPosition > 100) {
        footerPromo.style.opacity = '1';
    } else {
        footerPromo.style.opacity = '0';
    }
});