(function($){
    $(document).ready(function() {
       $("#grid").masonry({
           itemSelector: '.grid-item',
           columnWidth: '.grid-sizer',
           gutter: '.gutter-sizer',
           percentPosition: true,
           fitWidth: true,
           originLeft: true,
           originTop: true
       });
    });
})(jQuery);
