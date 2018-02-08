(function ($) {
    //Variables Start
    //Variables End

    //Page Start
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
    //Event End

    //Function Start
    function closeMenu() {
        $('#menuContainer').css('right', '-300px');
    }
    //Function End
})($);