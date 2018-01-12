(function ($) {
    //Variables Start
    //Variables End

    //Page Start
    initHomeSlider();
    //Page Load

    //Event Start
    $('html').click(function () {
        closeMenu();
    });
    
    $('#closeMenuBtn').click(function () {
        closeMenu();
    });
    
    $('#openMenuBtn').click(function (event) {
        $('#menuContainer').css('right', '0');
        event.stopPropagation();
    });

    $('#menuContainer').click(function (event) {
        event.stopPropagation();
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("active");
        } else {
            $("header").removeClass("active");
        }
    });
    //Event End

    //Function Start
    function initHomeSlider() {
        $('#servicesSlider').lightSlider({
            item: 1,
            slideMargin: 0,
            speed: 1000,
            auto: true,
            loop: true,
            pause: 5000,
            mode: 'fade',
            pager: false
        });

        $('#projectSlider').lightSlider({
            item: 1,
            slideMargin: 0,
            speed: 1000,
            auto: true,
            loop: true,
            pause: 5000,
            mode: 'fade',
            pager: false
        });

        var newsSlider = $('#newsSlider').lightSlider({
            controls: false,
            speed: 800,
            slideMargin: 50,
            pager: false
        });

        $('#newsSliderPrev').on('click', function () {
            newsSlider.goToPrevSlide();
        });

        $('#newsSliderNext').on('click', function () {
            newsSlider.goToNextSlide();
        });

        var clientSlider = $('#clientSlider').lightSlider({
            item: 5,
            controls: false,
            speed: 800,
            slideMargin: 50,
            pager: false
        });

        $('#clientSliderPrev').on('click', function () {
            clientSlider.goToPrevSlide();
        });

        $('#clientSliderNext').on('click', function () {
            clientSlider.goToNextSlide();
        });

        var productSlider = $('#productSlider').lightSlider({
            item: 2,
            vertical: true,
            verticalHeight: 650,
            controls: false,
            speed: 800,
            slideMargin: 50,
            pager: false
        });

        $('#productSliderPrev').on('click', function () {
            productSlider.goToPrevSlide();
        });

        $('#productSliderNext').on('click', function () {
            productSlider.goToNextSlide();
        });
    }

    function closeMenu() {
        $('#menuContainer').css('right', '-300px');
    }
    //Function End
})($);