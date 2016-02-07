var app = app || {};
app.main = {
    init: function() {
        this.events();
    },
    events: function () {
        console.log('test');
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