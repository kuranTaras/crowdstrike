$('.label input').each(function () {
    $(this).on('keyup', () => {
        if ($(this).val().length > 0) {
            $(this).parents('.label').addClass('active')
        } else {
            $(this).parents('.label').removeClass('active')
        }
    })
})

$('.mob__tab-top').on('click', () => {
    $('.mob__tab').toggleClass('active')
    if ($('.mob__tab').hasClass('active')) {
        $('.mob__tab-links').slideDown()
    } else {
        $('.mob__tab-links').slideUp()
    }
})
$('.header__burger').on('click', () => {
    $('body').toggleClass('scroll')
    $('.header, .mob').toggleClass('active')
})

$('.header .btn-white, .mob .btn-white').on('click', () => {
    $('body').addClass('scroll')
    $('.pop').addClass('active')
})

$('.pop-bg, .pop-close').on('click', () => {
    !$('.mob').hasClass('active') && $('body').removeClass('scroll')
    $('.pop').removeClass('active')
})


const swiperImp = new Swiper('.imp__slider', {
    slidesPerView: 1,
    spaceBetween: 8,
    navigation: {
        nextEl: '.imp .next',
        prevEl: '.imp .prev',
    },
    breakpoints: {
        1000: {
            spaceBetween: 40,
        },
        760: {
            spaceBetween: 20
        }
    }
});

$('.imp__slide-btn').each(function (index) {
    $(this).on('click', () => {
        $(this).toggleClass('active')
        if ($(this).hasClass('active')) {
            $(this).text($(this).attr('data-less'))
            $('.imp__slide-text').eq(index).addClass('active')
        } else {
            $(this).text($(this).attr('data-more'))
            $('.imp__slide-text').eq(index).removeClass('active')
        }

    })
})
