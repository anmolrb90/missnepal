(function($){
    $(document).ready(function() {
        //Set body height to be the same height as window
        $('#region-content').css('height',$(window).height());
        
       $(".view-featured-images .item-list ul").masonry({
			itemSelector: ".view-featured-images .item-list ul li",
			columnWidth: 220,
		 	gutter: 10,
		 	percentPosition: true
       });
    });
})(jQuery);

