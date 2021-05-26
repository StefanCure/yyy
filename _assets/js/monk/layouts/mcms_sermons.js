jQuery(function($){
	
	//home link
	var sermonHome = $('body').data('sermon-home');
	
	//sorter	
	$('body').on('change', '.filters .sorter', function(event) {
		event.preventDefault();
		$('#module-search-term').val('');
		var data = $('#sermon-filter').serialize();
		window.location.hash = '#' + data;
		filterSermons(data);
    });
	
	//pagination
	$('body').on('click', '#pagination a', function(event) {
		event.preventDefault();
		if($(this).attr('href') == undefined){
			return false;
		}else {
			var thisurl = $(this).attr('href');
			var page = getUrlParameter('page', thisurl);
			if(page != undefined){
				var data = $('#sermon-filter').serialize();
				data += '&page=' + page;
				filterSermons(data);//empty filter returns series view
			}else{
				return false;
			}
		}
	});
	
	//search
	$('body').on('submit', '#module-search', function(event) {
		event.preventDefault();
		$('.sorter').each(function(){
			$(this).prop('selectedIndex',0);//reset type filter
			$(this).selectmenu('refresh');
		});		
		var data = $("#module-search").serialize();
		window.location.hash = '# ';
		filterSermons(data);//empty filter returns series view
	});
	
	//on page load series list
	if($('#series-list').length){
		var data = $('#sermon-filter').serialize();
		filterSermons(data);//empty filter returns series view
	}
	
	//carousel
	if($('.sermon-slider').length){
		$('.sermon-slider').slick({
			vertical: false,
			initialSlide: 0,
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: false,
			speed: 500,
			arrows: true,
			dots: false,
			responsive: [
			{
			//match css break
			breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
	}
	
	//detail page notes link
	$('.btn.takenotes').click( function(event) {
		event.preventDefault();
		var thisURL = $(this).attr('href');
		if($(window).width() < 650){
			var specWidth = 300;
			var specHeight = 400;
		}else{
			var specWidth = 600;
			var specHeight = 800;
		}
		var 	specLeft = ($(window).width() - specWidth) / 2,
  			specTop = 50;
		window.open(thisURL, '', "width="+specWidth+",height="+specHeight+",left="+specLeft+",top="+specTop+",menubar=no,toolbar=no,status=yes,scrollbars=yes");
	});
	
	//detail page icons
	$('.media-icons .video a').html("").append('<i class="icon icon-display"></i>');
	$('.media-icons .audio a').html("").append('<i class="icon icon-headphones"></i');
	$('.media-icons .download a').html("").append('<i class="icon icon-download5"></i>');
	$('.media-icons .notes a').html("").append('<i class="icon icon-clipboard4"></i>');
 
});

//filter ajax
function filterSermons(data) {
	$('.items').addClass('loading');
	$.ajax({
		url : '/_components/ajax/ajax-sermons.php',
		type: 'GET',
		data: data,
		success:function(results) {
			$('.items').html(results).removeClass('loading');
		},
		error: function(results, textStatus, jqXHR) {
			//add error messages as needed console.log(jqXHR.responseText);
		}
	});
}

function getUrlParameter(param, url){
	//var sPageURL = url;//window.location.search.substring(1);
	var sPageURL = url.split('?')[1];
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++)
	{
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == param)
		{
			return sParameterName[1];
		}
	}
}
