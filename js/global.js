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

        $('#newsSlider').lightSlider({
            item: 1,
            slideMargin: 0,
            speed: 1000,
            auto: true,
            loop: true,
            pause: 5000,
            mode: 'fade',
            pager: false
        });
    }
    //Function End
})($);