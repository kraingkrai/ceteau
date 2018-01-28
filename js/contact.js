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
    //Page Load

    //Event Start
    
    //Event End

    //Function Start
    
    //Function End
})($);

// function initMap() {
//     var mapDiv = document.getElementById('ceteauMap');
//     var map = new google.maps.Map(mapDiv, {
//         center: { lat: -25.363, lng: 131.044 },
//         zoom: 15,
//         scrollwheel: false
//     });
//     console.log(map);
// }