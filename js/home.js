$(function () {

    $('#homeSlideShow').unslider({
        arrows: false,
        autoplay: true,
        infinite: true
    });

    $('.projectItem').hover(function () {
        $(this).find('.desc').show();
    }, function () {
        $(this).find('.desc').hide();
    });

});