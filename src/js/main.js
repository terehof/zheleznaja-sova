jQuery.fn.exists = function() {
    return $(this).length;
}


var app = app || {};
app.main = {
    init: function() {
        this.tabs();
        this.carouselInit();
    },
    tabs: function () {
        var $tabsBlock = $('.tabs-block');
        if ($tabsBlock.length > 0) {
            $('.jsTabLink').on('click', function (e) {
                e.preventDefault();
                var $this = $(this),
                    tab = $this.attr('href'),
                    $tab = $(tab);
                if (!$this.hasClass('active')) {
                    $('.jsTabLink').removeClass('active');
                    $this.addClass('active');
                    $('.tabs__content').hide().removeClass('active');
                    $tab.fadeIn(250).addClass('active');
                }

            })
        }
    },
    carouselInit: function () {
        var $carousel = $('.owl-carousel');
        if ($carousel.exists()) {
            $carousel.owlCarousel({
                items: 3,
                navigation: true,
                navigationText: false,
                pagination: false
            });
        }
    }
};
var App = (function($, app){
    function init () {
        app.main.init();
    }
    return {
        init: init
    };
})(jQuery, app);
$(function () {
    App.init();
});