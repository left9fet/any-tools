$(function() {

    $('.menu__item--dropdown .menu__link').on('click', function(e) {
        e.preventDefault();

        $('.menu__item--dropdown').toggleClass('menu__item--active')
        $('.menu__dropdown-list').slideToggle(250)
    })

    $('.team__inner').slick({
        dots: true,
        prevArrow: '<button class="slick-arrow slick-prev"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 26L2 14L14 2" stroke="white" stroke-opacity="0.28" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 26L14 14L2 2" stroke="white" stroke-opacity="0.28" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [
            {
                breakpoint: 998,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.spoilers__title').on('click', function() {
        $(this).toggleClass('spoilers__title--active').next().slideToggle(300);
    })

});