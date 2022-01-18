$(function() {

    $('.menu__item--dropdown .menu__link').on('click', function(e) {
        e.preventDefault();

        $('.menu__item--dropdown').toggleClass('menu__item--active')
        $('.menu__dropdown-list').slideToggle(250)
    })

});