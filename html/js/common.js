$(function() {

    //Поиск на мобильных
    $('.header__box-mobile-search').click(function() {
        var w = $(window).width();
        if (w < 768) {
            $('.header__form').slideToggle();
            return false;
        }
    });
    $(document).on('click', function(e) {
        var w = $(window).width();
        if (w < 769 || w == 769) {
            if (!$(e.target).closest(".header__form").length) {
                $('.header__form').slideUp();
            }
            e.stopPropagation();
        }
    });

    $(window).resize(function() {
        var w = $(window).width();
        if (w < 769 && $(".header__form").is(':hidden')) {
            $('.header__form').removeAttr('style');
        }
    });

    //Личный кабинет
    $('.header__box-private-img').click(function() {
        $('.header__box-private ul').slideToggle(300);
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".header__box-private ul").length) {
            $('.header__box-private ul').slideUp(300);
        }
        e.stopPropagation();
    });

    //Главное Меню на мобильных
    $('.header__nav-mobile-button').click(function() {
        $('.header__nav-wrapper').toggleClass('show');
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".header__nav-wrapper").length) {
            $('.header__nav-wrapper').removeClass('show');
        }
        e.stopPropagation();
    });


    //Подпункты главного Меню
    $('.header__nav-wrapper').on('click', '.with-submenu', function() {
        $(this).toggleClass('open').siblings().removeClass('open')
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".with-submenu").length) {
            $('.with-submenu').removeClass('open');
        }
        e.stopPropagation();
    });

    // function menu() {
    //     var w = $(window).width();
    //     if (w < 992) {
    //
    //         $('.header__nav-wrapper').on('click', '.with-submenu', function() {
    //             $(this).toggleClass('open').siblings().removeClass('open')
    //         });
    //         $(document).on('click', function(e) {
    //             if (!$(e.target).closest(".with-submenu").length) {
    //                 $('.with-submenu').removeClass('open');
    //             }
    //             e.stopPropagation();
    //         });
    //     }
    // }
    //
    // $(document).ready(function() {
    //     var w = $(window).width();
    //     if (w < 992) {
    //         menu();
    //     }
    // });
    // $(window).resize(function() {
    //     var w = $(window).width();
    //     if (w < 992) {
    //         menu();
    //     } else {
    //         $('.with-submenu').removeClass('open');
    //     }
    // });

    //main-slider
    $("#main-slider").owlCarousel({
        lazyLoad: true,
        items: 1,
        nav: true,
        navText: ''
    });



    //main-new-slider
    $("#main-new-slider").owlCarousel({
        lazyLoad: true,
        nav: true,
        navText: '',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            420: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        }
    });

    //main-top-slider
    $("#main-top-slider").owlCarousel({
        lazyLoad: true,
        nav: true,
        navText: '',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            420: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        }
    });

    //main-gift-slider
    $("#main-gift-slider").owlCarousel({
        lazyLoad: true,
        nav: true,
        navText: '',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            420: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        }
    });

    //Product slider
    $("#product-slider").owlCarousel({
        lazyLoad: true,
        items: 1,
    });


    $(".product__slider-pagination-item:nth-child(1)").on("click", function() {
        $("#product-slider .owl-dot:nth-child(1)").trigger("click");
    });
    $(".product__slider-pagination-item:nth-child(2)").on("click", function() {
        $("#product-slider .owl-dot:nth-child(2)").trigger("click");
    });
    $(".product__slider-pagination-item:nth-child(3)").on("click", function() {
        $("#product-slider .owl-dot:nth-child(3)").trigger("click");
    });
    $(".product__slider-pagination-item:nth-child(4)").on("click", function() {
        $("#product-slider .owl-dot:nth-child(4)").trigger("click");
    });

    //product-similar-slider
    $("#product-similar-slider").owlCarousel({
        lazyLoad: true,
        nav: true,
        navText: '',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            420: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        }
    });

    //Стилизация селекта
    $('select').styler();

    //таймер
    $('#countdown').timeTo({
        timeTo: new Date(new Date('Mon Aug 25 2016 09:00:00 GMT+0300 (Финляндия (лето))')),
        theme: "white"
    });

    //Выравнивание блоков по высоте
    $(document).ready(function() {
        $(".main-new__slider-item-title").equalHeights();
        $(".main-new__slider-item-price-old").equalHeights();
        $(".main-new__slider-item").equalHeights();
        $(".main-top__slider-item-title").equalHeights();
        $(".main-top__slider-item-price-old").equalHeights();
        $(".main-top__slider-item").equalHeights();
        $(".main-gift__slider-item-title").equalHeights();
        $(".product-similar__slider-item-title").equalHeights();
        $(".product-similar__slider-item-price-old").equalHeights();
        $(".product-similar__slider-item").equalHeights();
        $(".catalog-box__item-title").equalHeights();
        $(".catalog-box__item-price-old").equalHeights();
        $(".catalog-box__item").equalHeights();
    });

    //footer меню

    function menuFooter() {
        var w = $(window).width();
        if (w < 768) {
            $('.footer__nav').on('click', '.footer__nav-item', function() {
                $(this).addClass('show').siblings().removeClass('show')
            });

            $(document).on('click', function(e) {
                if (!$(e.target).closest(".footer__nav-item").length) {
                    $('.footer__nav-item').removeClass('show');
                }
                e.stopPropagation();
            });
        }
    }

    $(document).ready(function() {
        var w = $(window).width();
        if (w < 768) {
            menuFooter();
        }
    });
    $(window).resize(function() {
        var w = $(window).width();
        if (w < 768) {
            menuFooter();
        }
    });

    //Скролл к шапке сайта

    $("a[href='#header']").click(function(e) {
        e.preventDefault();
        var thisSect = $($(this).attr('href')).offset().top;
        $('html, body').animate({
            scrollTop: thisSect
        }, $(window).scrollTop() * 0.8);
    });;

    //Клонируем список так как по желанию заказчика элементы должны сменить место в потоке.
    $(document).ready(function() {
        $(".product__stok").after('<div id="product__love-clone">');
        $(".product__love").clone().appendTo('#product__love-clone');
        $(".product__top-line").after('<div id="product__code-clone">');
        $(".product__code").clone().appendTo('#product__code-clone');
    });


    //Выпадающий список на странице каталога
    $('.catalog-parts__title').click(function() {
        var w = $(window).width();
        if (w < 768) {
            $('.catalog-parts').toggleClass('show');
            //$('.catalog-parts__list').slideDown(300);
            return false;
        }

    });
    $(document).on('click', function(e) {
        var w = $(window).width();
        if (w < 768) {
            if (!$(e.target).closest(".catalog-parts__title").length) {
                $('.catalog-parts').removeClass('show');
            }
            e.stopPropagation();
        }
    });
    // $(window).resize(function(){
    // 	var w = $(window).width();
    // 	if(w > 769 && $(".catalog-parts__list").is(':hidden')) {
    // 		$('.catalog-parts__list').removeAttr('style');
    // 	}
    // });

    //Выпадающая сортировка по цене на странице каталога
    $('.catalog-filters__price-value').click(function() {
        $('.catalog-filters__price-list').toggleClass('show');
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".catalog-filters__price-value").length) {
            $('.catalog-filters__price-list').removeClass('show');
        }
        e.stopPropagation();
    });

    //Выпадающая сортировка по категориям на странице каталога
    $('.catalog-filters__sort-value').click(function() {
        $('.catalog-filters__sort-list').toggleClass('show');
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".catalog-filters__sort-value").length) {
            $('.catalog-filters__sort-list').removeClass('show');
        }
        e.stopPropagation();
    });


    //Табы в корзине
    $(function() {

        $('.basket__tabs').on('click', '.basket__tab-item:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.basket__container').find('.basket__items-box').removeClass('active').eq($(this).index()).addClass('active');
        });

    });

    //Свернутые табы на разрешении меньше 767рх
    $(".basket__title").click(function() {
        $('.basket__title').toggleClass('active');
        $('.basket__tabs').toggleClass('active');
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".basket__tabs").length) {
            $('.basket__title').removeClass('active');
            $('.basket__tabs').removeClass('active');
        }
        e.stopPropagation();
    });

    //Табы вариантов заказа в корзине

    $('.order-type__tabs').on('click', '.order-type__tab-item:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.order-type').find('.order-type__form-item').removeClass('active').eq($(this).index()).addClass('active');
    });


    //Смена текстового описания при выборе типа доставки

    var typedelivChecked = function() {
        if ($('.order__step-type-deliv-item input').is(':checked')) {
            $(this).closest('.order__step-type-deliv').find('.order__step-text').removeClass('show').eq($(this).index()).addClass('show');
        }
    };
    $(".order__step-type-deliv-item").on("click", typedelivChecked);

    //Cмена текстового описания при выборе типа оплаты

    var typepayChecked = function() {
        if ($('.order__step-type-pay-item input').is(':checked')) {
            $(this).closest('.order__step-type-pay').find('.order__step-text').removeClass('show').eq($(this).index()).addClass('show');
        }
    };

    $(".order__step-type-pay-item").on("click", typepayChecked);

    //button to top
    $(window).scroll(function() {
        var w = $(window).width();
        if (w > 1023) {
            if ($(window).scrollTop() >= 600) {
                 $('.footer__subscription-button').addClass('footer__subscription-button-stick');
            } else $('.footer__subscription-button').removeClass('footer__subscription-button-stick');
        } else $('.footer__subscription-button').removeClass('footer__subscription-button-stick');
    });

    //Переключение полей ввода в личном кабинете для авторизации
 
    $('#autorizationField').hide();
    $('#autorizationFieldHide').addClass('active');
    $('#autorizationFieldShow').on('click', function() {
        $('#autorizationFieldHide').removeClass('active');
        $(this).addClass('active');
        $('#autorizationField').fadeIn();
    });

    $('#autorizationFieldHide').on('click', function() {
        $('#autorizationFieldShow').removeClass('active');
        $(this).addClass('active');
        $('#autorizationField').fadeOut();
    });

    //Переключение видимости пароля в поле ввода
    $('#autorizPassShow').on('click', function() {
        if($(this).hasClass('show')) {
            $(this).removeClass('show')
            .text('Показать');
            $('#autorizPass').removeAttr('type').attr('type', 'password')
        } else {
            $(this).addClass('show').text('Скрыть');
            $('#autorizPass').removeAttr('type').attr('type', 'text')
        }
    });

    //Выпадающий список на странице личного кабинета
    $('.account-parts__title').click(function() {
        var w = $(window).width();
        if (w < 768) {
            $('.account-parts').toggleClass('show');
            return false;
        }

    });
    $(document).on('click', function(e) {
        var w = $(window).width();
        if (w < 768) {
            if (!$(e.target).closest(".account-parts__title").length) {
                $('.account-parts').removeClass('show');
            }
            e.stopPropagation();
        }
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });

});
