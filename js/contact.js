var countryMap = '';

(function ($) {
    //Variables Start
    //Variables End

    //Page Start
    initMap();

    $('#btnOfficeNetherland').click(function () {
        $('#officeImg').attr('src', 'img/contact/office-netherland.jpg');
        changeSelectedBranch($(this));
    });

    $('#btnOfficeThailand').click(function () {
        $('#officeImg').attr('src', 'img/contact/office-thailand.jpg');
        changeSelectedBranch($(this));
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
    function changeSelectedBranch(elem) {
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
        // var location = { lat: 19.435457, lng: -99.173743 };
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
    //Function End
})($);