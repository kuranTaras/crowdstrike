// row items

$('.row__item-top .btn-red-s').each(function (index) {
    $(this).on('click', () => {
        if ($('.row__item').eq(index).hasClass('active')) {
            $('.row__item').removeClass('active')
            $('.row__item-bot').slideUp()
            $('.row__item-top .btn-red-s').text($(this).attr('data-more'))
        } else {
            $('.row__item').removeClass('active')
            $('.row__item-bot').slideUp()

            $('.row__item').eq(index).addClass('active')
            $('.row__item-bot').eq(index).slideDown()
            $('.row__item-top .btn-red-s').text($(this).attr('data-more'))
            $(this).text($(this).attr('data-less'))
        }

    })
})



// solutions toggles

$('.solutions__faq-top').each(function () {
    $(this).on('click', () => {
        if ($(this).parents('.solutions__faq').hasClass('active')) {
            return false
        } else {
            $(this).parents('.solutions__tab').find('.solutions__faq').removeClass('active')
            $(this).parents('.solutions__tab').find('.solutions__faq-bot').slideUp()
            $(this).parents('.solutions__faq').addClass('active')
            $(this).parents('.solutions__faq').find('.solutions__faq-bot').slideDown()
        }
    })
})
$('.solutions__tab').each(function () {
    $(this).find('.solutions__faq').eq(0).addClass('active')
    $(this).find('.solutions__faq-bot').eq(0).slideDown()
})


// solutions tabs

$('.solutions .tab-btn').each(function (index) {
    $(this).on('click', () => {
        $('.solutions .tab-btn').removeClass('active')
        $(this).addClass('active')
        $('.solutions__tab').removeClass('active')
        $('.solutions__tab').eq(index).addClass('active')
    })
})

// swiper cyber

// const swiperCyber = new Swiper('.cyber__slider', {
//     slidesPerView: 1,
//     spaceBetween: 8,
//     navigation: {
//         nextEl: '.cyber .next',
//         prevEl: '.cyber .prev',
//     },
//     breakpoints: {
//         1000: {
//             spaceBetween: 40,
//             slidesPerView: 'auto'
//         },
//         760: {
//             slidesPerView: 'auto',
//             spaceBetween: 20
//         }
//     }
// });

// faq toggles

$('.faq__item-top').each(function (index) {
    $(this).on('click', () => {
        if ($('.faq__item').eq(index).hasClass('active')) {
            $('.faq__item').removeClass('active')
            $('.faq__item-bot').slideUp()
        } else {
            $('.faq__item').removeClass('active')
            $('.faq__item-bot').slideUp()
            $('.faq__item').eq(index).addClass('active')
            $('.faq__item-bot').eq(index).slideDown()
        }
    })
})

//swiper list
const swiperList = new Swiper('.list__slider', {
    slidesPerView: 1,
    spaceBetween: 8,
    navigation: {
        nextEl: '.list .next',
        prevEl: '.list .prev',
    },
    breakpoints: {
        1900: {
            slidesPerView: 4,
            spaceBetween: 80,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
        760: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});


const slider = $(".cyber__wrapper");
slider.slick({
    variableWidth: true,
    speed: 500,
    infinite: false,
    responsive: [
        {
            breakpoint: 760,
            settings: {
                variableWidth: false
            }
        }
    ]
    });

$('.cyber .next').on('click', () => {
    slider.slick('slickNext')
})
$('.cyber .prev').on('click', () => {
    slider.slick('slickPrev')
})










function debounce(func, wait, immediate) {
	var timeout;
	return function () {
		var context = this,
			args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}


$('.cyber__wrapper').hover(() => {
	// $('body').addClass('scroll')
	$(window).on("wheel" ,  onScroll)
}, () => {
	// $('body').removeClass('scroll')
	$(window).unbind("wheel" ,  onScroll)
})

let heroCount = false
const heroFunction = (e) => {
    if (e.originalEvent.deltaY === 0) {
        if (heroCount === false) {
            // let delta = window.event.deltaY || window.event.deltaX
            if (e.originalEvent.deltaX > 0) {
                slider.slick('slickNext')
            } else {
                slider.slick('slickPrev')
            }
            heroCount = true
            setTimeout(function () {
                heroCount = false
            }, 500)
        }
    }
}


var onScroll = debounce(heroFunction, 50, true);


// slider.on('wheel', (function(e) {
//     if (e.originalEvent.deltaY === 0) {
//         if (e.originalEvent.deltaX > 0 && e.originalEvent.deltaY === 0) {
//             e.preventDefault();
//             slider.slick('slickNext')
//         } else {
//             e.preventDefault();
//             slider.slick('slickPrev')
//         }
//     }
//
//
//
//
//
// }));

