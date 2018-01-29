(function ($) {
    //Variables Start
    //Variables End

    //Page Start
    $('#toggleMainOffice').click(function () {
        $('.regionalOffice').hide();
        $('.headOffice').show();
    });

    $('#toggleRegionalOffice').click(function () {
        $('.headOffice').hide();
        $('.regionalOffice').show();
    });

    $('#btnOfficeNetherland').click(function () {
        $('#officeImg').attr('src', 'img/contact/office-netherland.jpg');
    });

    $('#btnOfficeThailand').click(function () {
        $('#officeImg').attr('src', 'img/contact/office-thailand.jpg');
    });
    //Page Load

    //Event Start    
    //Event End

    //Function Start    
    //Function End
})($);

function initMap() {
    var netherlandLocation = { lat: 53.051368, lng: 5.413554 };
    var map = new google.maps.Map(document.getElementById('ceteauMap'), {
        zoom: 15,
        center: netherlandLocation
    });
    var marker = new google.maps.Marker({
        position: netherlandLocation,
        map: map
    });
}