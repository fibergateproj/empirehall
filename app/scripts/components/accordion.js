jQuery(function(){
  initAccordion();
});


// accordion menu init
function initAccordion() {
	jQuery('.accordion').slideAccordion({
		activeClass: 'active',
		opener: '.opener',
		slider: '.slide'
	});
}

;(function($){
	$.fn.slideAccordion = function(opt){
		// default options
		var options = $.extend({
			addClassBeforeAnimation: false,
			activeClass:'active',
			opener:'.opener',
			slider:'.slide',
			animSpeed: 300,
			collapsible:true,
			event:'click'
		},opt);
		return this.each(function(){
			// options
			var accordion = $(this);
			var items = accordion.find(''+options.slider+'');
      
			items.each(function(){
				var item = $(this).parent();
        var opener = item.find(options.opener).eq(0);
				var slider = item.find(options.slider).eq(0);
				opener.bind(options.event, function(e){
					if(!slider.is(':animated')) {
						if(item.hasClass(options.activeClass)) {
							if(options.collapsible) {
								slider.slideUp(options.animSpeed, function(){
									// hideSlide(slider);
									item.removeClass(options.activeClass);
								});
							}
						} else {
							// show active
							var levelItems = item.siblings('.'+options.activeClass);
							var sliderElements = levelItems.find(options.slider);
							item.addClass(options.activeClass);
							slider.slideDown(options.animSpeed);

							// collapse others
							sliderElements.slideUp(options.animSpeed, function(){
								levelItems.removeClass(options.activeClass);
								hideSlide(sliderElements);
							});
						}
					}
					e.preventDefault();
				});
				if(item.hasClass(options.activeClass)) showSlide(slider); else hideSlide(slider);
			});
		});
	};

	// accordion slide visibility
	var showSlide = function(slide) {
		return slide.slideDown();
	};
	var hideSlide = function(slide) {
		return slide.slideUp();
	};
}(jQuery));
