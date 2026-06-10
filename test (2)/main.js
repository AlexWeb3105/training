
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

// loop: true — слайды зациклены, т. е. после последнего идет первый.
// autoplay — активирует автоматическую смену слайдов.
// navigation — подключает кнопки навигации.
// pagination — включает точки (пагинацию), которые можно кликать.
// effect: "fade" — делает плавную смену слайдов без резкого перехода.
