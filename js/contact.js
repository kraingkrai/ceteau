(function ($) {
    //Variables Start
    var locationSlider = '';
    var countryMap = '';
    //Variables End

    //Page Start
    initMap();
    initContactSlider();
    initSelectedOffice();

    $('#btnOfficeNetherland').click(function () {
        var slideIdx = $('.imgNetherland').attr('slide-index');
        changeSelectedBranch($(this), slideIdx);
    });

    $('#btnOfficeThailand').click(function () {
        var slideIdx = $('.imgThailand').attr('slide-index');
        changeSelectedBranch($(this), slideIdx);
    });

    $('.mapLocation').tooltip();

    $('.mapLocation').click(function () {
        $('#modalMapDetail').modal({
            backdrop: true,
            keyboard: false
        });

        setTimeout(function () {
            initCountryMap();
        }, 1000);

    });

    $('#btnShowContactForm').click(function () {
        $('#modalContactForm').modal({
            backdrop: true,
            keyboard: false
        });
    });
    //Page Load

    //Event Start    
    //Event End

    //Function Start    
    function changeSelectedBranch(elem, slideIdx) {
        locationSlider.goToSlide(parseInt(slideIdx));

        $('section.branch button').removeClass('selected');
        elem.addClass('selected');
    }

    function initMap() {
        var netherlandLocation = { lat: 53.051368, lng: 5.413554 };
        var map = new google.maps.Map(document.getElementById('ceteauMap'), {
            zoom: 15,
            center: netherlandLocation,
            scrollwheel: false,
            disableDoubleClickZoom: true
        });
        var marker = new google.maps.Marker({
            position: netherlandLocation,
            map: map
        });
    }

    function initCountryMap() {
        var location = { lat: 53.051368, lng: 5.413554 };
        countryMap = new google.maps.Map(document.getElementById('countryMap'), {
            zoom: 15,
            center: location,
            scrollwheel: false,
            disableDoubleClickZoom: true
        });
        var marker = new google.maps.Marker({
            position: location,
            map: countryMap
        });
    }

    function initContactSlider() {
        locationSlider = $('#locationSlider').lightSlider({
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

    function initSelectedOffice() {
        var office = Global_GetUrlVars()['office'];
        var slideIdx = '';
        var btn = '';
        switch (office) {
            case 'thailand':
                slideIdx = $('.imgThailand').attr('slide-index');
                btn = $('#btnOfficeThailand');
                break;
            case 'malaysia':
                break;
            case 'mexico':
                break;
            case 'united-kingdom':
                break;
        }

        if (slideIdx) {
            changeSelectedBranch(btn, slideIdx);
        }
    }
    //Function End
})($);