(function ($) {
    //Variables Start
    //Variables End

    //Page Start
    setTimeout(function() {
        $('.load-cover').animate({opacity: 1}, 1000);
    }, 600);
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

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("active");
        } else {
            $("header").removeClass("active");
        }
    });

    $('#callbackLink').click(function () {
        $('#modalCallbackForm').modal({
            backdrop: true,
            keyboard: false
        });
    });
    //Event End

    //Function Start
    function closeMenu() {
        $('#menuContainer').css('right', '-300px');
    }
    //Function End
})($);

function Global_GetUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}