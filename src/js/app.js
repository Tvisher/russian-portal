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
    spaceBetween: 47,
    speed: 1200,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const companySlider = new Swiper('.company__slider', {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 16,
    speed: 1200,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

