(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

        // slider
        $(".slider").owlCarousel({
            items:1,
            loop:true,
            nav:false,
            dots:false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            autoplay: true,
        });


        //counter
        $("#jackpot").animateNumbers(500000000, true, 10000);

        $("#jackpott").animateNumbers(500000000, true, 10000);
        
        $("#jackpottt").animateNumbers(500000000, true, 10000);

        //--====Off-canvas-menu

        $(".menu-trigger").on("click", function () {
            $(".off-canvas-menu").addClass("active");
            return false;
        });

        $(".menu-close").on("click", function () {
            $(".off-canvas-menu").removeClass("active");

        });
        //--====Off-canvas-menu

        $(".mb_live_chat").on("click", function () {
            $(".mb-live-chat-op").addClass("active");
            return false;
        });

        $(".menu-close-2").on("click", function () {
            $(".mb-live-chat-op").removeClass("active");

        });




        


        


        


        


    });


    jQuery(window).load(function () {});
}(jQuery));