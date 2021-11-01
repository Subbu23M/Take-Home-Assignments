// For Pre-loader
window.addEventListener("load", function () {

    document.querySelector(".pre-loader").classList.add("hidePreLoader");

});

// Call the plugin
$(".owl-carousel").owlCarousel({
    
    loop: true,
    margin: 5,
    dots: false,
    nav:true,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,

    responsive: {
        0: {
        items: 1.2,
        nav: true,
        },

        1000: {
        items: 1,
        nav: true,
        loop: true,
        },
    },
});