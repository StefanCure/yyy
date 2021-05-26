jQuery(function($){
	
	var daylisting = $('body').data('daylisting');
	if(!daylisting){$('.list-controls').show();}
	
	//search
	var resetSearch = true;
	$('input#module-search-term').focus(function(){
		if(resetSearch){
		  $(this).val("");
		}
		resetSearch = false;
	});
		  
	//filters
	$('section.event-list #category_select').change(function(event){
		event.preventDefault();
		submitCategoryFilter($(this).val(),"list");
	});

	$('section.event-list #campus-filter').change(function(event){
		event.preventDefault();
		submitGroupFilter($(this).val(),"list");
	});
	$('section:not(.event-list) #category_select').change(function(event){
		event.preventDefault();
		submitCategoryFilter($(this).val(),"calendar");
	});

	$('section:not(.event-list) #campus-filter').change(function(event){
		event.preventDefault();
		submitGroupFilter($(this).val(),"calendar");
	});

	
});