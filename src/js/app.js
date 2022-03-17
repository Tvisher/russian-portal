'use strict';
import * as baseFunction from './modules/functions.js';
import './vendors/vendors.js';
import Swiper, {
    Navigation,
    Pagination,
    Thumbs,
    EffectFade,
    Mousewheel
} from 'swiper';

import AOS from 'aos';


// Проверка поддержки webP
baseFunction.testWebP();

//получаем ширину полоски скрола
const scrollLineWigth = baseFunction.scrollbarWidth();



const articlesSlider = new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
        768: {
            spaceBetween: 47
        }
    },
    speed: 1200,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const companySlider = new Swiper('.company__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 1200,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        }
    },
});


const usefulCompaniesSlider = new Swiper('.useful-companies__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 1200,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        }
    },
});


const AOSSettings = {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 20, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1300, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
}
window.addEventListener('load', (e) => {
    AOS.init(AOSSettings);
    const sidebar = document.querySelector('#sidebar-menu');
    if (sidebar) {
        sidebar.style.opacity = '1';
    }
});

const header = document.querySelector('header');
window.addEventListener('scroll', headerFix)
function headerFix() {
    const scroll = window.pageYOffset;
    if (scroll > 0) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}
headerFix();



const burgerMenu = document.querySelector('#open-menu');
const mobileMenu = document.querySelector('[data-mobile-menu]');
burgerMenu.addEventListener("click", (e) => {
    burgerMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.querySelector('body').classList.toggle('hidden');
});


// (function () {
//     const infoBaner = document.querySelector('.info-container');
//     if (infoBaner && infoBaner.previousElementSibling) {
//         infoBaner.previousElementSibling.style.border = 'none';
//     }
// }());


(function () {
    const sidebarBtn = document.querySelector('#sidebar-btn');
    const sidebarMenu = document.querySelector('#sidebar-menu');
    if (sidebarBtn && sidebarMenu) {
        sidebarBtn.onclick = (e) => {
            sidebarMenu.classList.toggle('open');
            sidebarBtn.classList.toggle('hide');
        }
        document.body.addEventListener('click', (e) => {
            const target = e.target;
            if (sidebarMenu.classList.contains('open')
                && !target.closest('#sidebar-menu')
                && !target.closest('#sidebar-btn')) {
                sidebarMenu.classList.remove('open');
                sidebarBtn.classList.remove('hide');
            }
        });
    }
}());
