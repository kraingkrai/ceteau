(function ($) {
    //Variables Start
    //Variables End

    //Page Start
    $('#projectSlider').lightSlider({
        gallery: true,
        thumbItem: 10,
        item: 1,
        slideMargin: 0,
        speed: 1000,
        auto: true,
        loop: true,
        pause: 5000,
        enableDrag: false,
        mode: 'fade',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#projectSlider .lslide'
            });
        }
    });

    //Page Load

    //Event Start
    //Event End

    //Function Start
    //Function End
})($);