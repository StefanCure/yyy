jQuery(function($){

	//reset for home
	billboardReset();

	//window resize
	var resizeTimer = null;
	$(window).on('resize', function() {
		if (resizeTimer) clearTimeout(resizeTimer);
		resizeTimer = setTimeout(billboardReset, 150);
	});
});

function billboardReset() {
	if($('#billboard.hasvideo').length){
		$('#billboard.hasvideo').css({'min-height': '0px'});
		var windowH = $(window).height(),
			headerH = $('#header').outerHeight(),
			alertH = $('#alert-header').outerHeight();
			if(!alertH){
				alertH = 0;
			}
		var bHeight = windowH-alertH;
		$('#billboard').css('height',bHeight+'px');
	}
}
