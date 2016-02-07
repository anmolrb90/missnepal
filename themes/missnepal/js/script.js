(function($){
    $(document).ready(function() {
       $(".view-featured-images .item-list ul").masonry({
			itemSelector: ".view-featured-images .item-list ul li",
			columnWidth: 220,
		 	gutter: 10,
		 	percentPosition: true
       });
    });
})(jQuery);
