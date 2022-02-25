$('.banner_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
});

// about video part js
new VenoBox({
    selector: '.video',
});

// gellery picture part js
new VenoBox({
    selector: '.gellery_js',
});

// testimonial part by js
$('.test_main').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true
});

// counter part by js
jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// our clases part by js
type = "text/javascript" >
    $(document).ready(function () {

        $("#colorful").colorfulTab();

        $("#colorful-elliptic").colorfulTab({
            theme: "elliptic"
        });

        $("#colorful-flatline").colorfulTab({
            theme: "flatline"
        });

        $("#colorful-background-image").colorfulTab({
            theme: "flatline",
            backgroundImage: "true",
            overlayColor: "#002F68",
            overlayOpacity: "0.8"
        });
    });

// slide part by js

$('#slide .slide_main').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    nextArrow: ".next",
    prevArrow: ".prev",
    centerMode: true,
    centerPadding: '0px'
});

//back to top start by js 

$(".back_to_top").click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 3000)
});

$(window).scroll(function () {
    var scrolling = $(window).scrollTop();

    if (scrolling > 10) {
        $(".back_to_top").fadeIn(500)
    } else {
        $(".back_to_top").fadeOut(500)
    }
});
// back to top end by js