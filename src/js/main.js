jQuery.fn.exists = function() {
    return $(this).length;
};


var app = app || {};
app.main = {
    init: function() {
        this.tabs();
        this.carouselInit();
        this.catalogAccordion();
        this.requestCallback();
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
    },
    catalogAccordion: function () {
        var $accordion = $('.catalog-accordion');
        if ($accordion.exists()) {
            var $accToggle = $accordion.find('.accordion-toggle'),
                $accInner = $accordion.find('.accordion-inner');
            $accToggle.on('click', function (e) {
                e.preventDefault();
                var $this = $(this),
                    $thisInner = $this.next('.accordion-inner');
                if (!$this.hasClass('active')) {
                    $accToggle.removeClass('active');
                    $accInner.slideUp(function () {
                        $(this).removeClass('active');
                    });
                    $this.addClass('active');
                    $thisInner.slideDown().addClass('active');
                }
            })

        }
    },
    requestCallback: function () {
        $('.jsRequestCallbackBtn').on('click', function () {

        });
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