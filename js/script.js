$(document).ready(function () {
    window.addEventListener('scroll', function () {
        if (pageYOffset < 10) {
            header.classList.remove('header-dark')
        }
        if (pageYOffset > 10) {
            header.classList.add('header-dark')
        }
    });
    var postion = $('#feature').offset().top;
    var pos2 = $('#action').offset().top;
    $(document).on('scroll', function () {
        var scroll = $(document).scrollTop();
        if (scroll > (postion - 300)) {
            $('.feature__bar-item1').addClass('bar1');
            $('.feature__bar-item2').addClass('bar2');
            $('.feature__bar-item3').addClass('bar3');
        } 
        if (scroll < (pos2)) {
            $('.feature__bar-item1').removeClass('bar1');
            $('.feature__bar-item2').removeClass('bar2');
            $('.feature__bar-item3').removeClass('bar3');
        }
    })
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1200);
        return false;
    });
    $('.menu__link').click(function () {
        $('.menu').toggleClass('menu-act');
        $('.content').toggleClass('content-act');
        $('.menu__link').toggleClass('menu__link-act');
    });
    $('.menu__list a, .content, .header, .header-dark').click(function () {
        $('.menu').removeClass('menu-act');
        $('.content').removeClass('content-act');
        $('.menu__link').removeClass('menu__link-act');
    });
});