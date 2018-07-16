//= ../../node_modules/jquery/dist/jquery.js
//= ../../node_modules/bootstrap/dist/js/bootstrap.js
//= ../../node_modules/slick-carousel/slick/slick.min.js

(function ($) {
    $(document).ready(function () {

        $('.menu-item-has-children').hover(
            function () {
                $('.dropdown-list').toggleClass('active');
            }
        );
        $('.view_slider .view_content').slick({
            arrows: true,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true
        });
    });
})(jQuery);