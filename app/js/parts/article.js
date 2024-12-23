const swiperBlogs = new Swiper('.blogs__slider', {
    slidesPerView: 1,
    spaceBetween: 8,
    navigation: {
        nextEl: '.blogs .next',
        prevEl: '.blogs .prev',
    },
    breakpoints: {
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        760: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});