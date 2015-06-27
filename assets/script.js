(function(navigator, $){

    'use strict';

    if (!navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
        $('html').addClass('hover-ok');
    }

    $(function() {
        $("div.image img").unveil(1500, function() {
            var img = $(this);
            $(this).load(function() {
                img.prev().addClass('hide');
                img.addClass('loaded');
            });
        });
    });

})(navigator, jQuery);