//= ../../node_modules/jquery/dist/jquery.js
//= ../../node_modules/bootstrap/dist/js/bootstrap.js
//= ../../node_modules/slick-carousel/slick/slick.min.js

(function ($) {
    $(document).ready(function () {
        if ($(window).width() > 1200) {
            $('.menu-item-has-children').hover(
                function () {
                    $('.dropdown-list').toggleClass('active');
                }
            );
        }

        //mobile menu

        $('.menu-button').on('click', function() {

            $(this).toggleClass('active');
            $('.top_nav').toggleClass('active');
            $('body').toggleClass('menu-active');


        });
        //form contact

        $('.contact_form_open').on('click', function() {
            $('.contact_form_wrap').toggleClass('active');
        });

        //form search
        $('.header_btn.icon-search').on('click', function() {
            $('.header_form').toggleClass('active');
            return false;
        });

        if ($(window).width() < 992) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 10) {
                    $('.header_form').removeClass('active');
                }

            });
        }

        //language
        $('.language-select').click(function(){
            $(this).toggleClass('open');
        })

        $('.language-select li').click(function(){
            $('ul li').removeClass('active');
            $(this).toggleClass('active');
        })

        $(document).mouseup(function (e) {
            var container = $(".language-select");
            if (container.has(e.target).length === 0){
                container.removeClass('open');
            }
        });


        //slider

        $('.view_slider .view_content').slick({
            arrows: true,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true
        });


        //counter
        $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $('.counter').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({ countNum: $this.text()}).animate({
                        countNum: countTo
                    },

                    {

                        duration: 4000,
                        easing:'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
                });

            });
        });

})(jQuery);