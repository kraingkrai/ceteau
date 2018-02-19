(function ($) {
    //Variables Start
    var isCounterStart = false;
    //Variables End

    //Page Start
    initCompanySlider();
    //Page Load

    //Event Start
    $('.whyCeteauIcon').hover(function () {
        $(this).find('img.default').hide();
        $(this).find('img.hover').show();
    }, function () {
        $(this).find('img.hover').hide();
        $(this).find('img.default').show();
    });
    //Event End

    //Function Start    
    function initCompanySlider() {
        $('#teamSlider').lightSlider({
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

    function initMeter() {
        $('.odometer').each(function () {
            var data = $(this).attr('data-value');
            $(this).html(data);
        });
    }

    function getVisible() {
        if (isCounterStart) {
            return;
        }
        
        var $el = $('.number-counter'),
            scrollTop = $(this).scrollTop(),
            scrollBot = scrollTop + $(this).height(),
            elTop = $el.offset().top,
            elBottom = elTop + $el.outerHeight(),
            visibleTop = elTop < scrollTop ? scrollTop : elTop,
            visibleBottom = elBottom > scrollBot ? scrollBot : elBottom;
        
        if (visibleBottom > visibleTop) {
            isCounterStart = true;

            setTimeout(function () {
                initMeter();
            }, 1000);
        }
    }

    $(window).on('scroll resize', getVisible);
    //Function End
})($);