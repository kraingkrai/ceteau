(function ($) {
    //Variables Start
    //Variables End

    //Page Start
    initHomeSlider();
    //Page Load

    //Event Start
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
    }
    //Function End
})($);