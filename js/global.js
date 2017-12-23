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
            controls: false
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
    }

    function closeMenu() {
        $('#menuContainer').css('right', '-400px');
    }
    //Function End
})($);