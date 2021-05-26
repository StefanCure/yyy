jQuery(function($){
	 
	//sticky nav
	$('.scrollto').click( function() {
		var sepLoc = $(this).attr('href'),
			//sepWidth = Math.max( $(window).width(), window.innerWidth),
			sepNavHeight = $('#stickysub').height();
			
		$('html, body').animate( { scrollTop: $(sepLoc).offset().top - (sepNavHeight-5) }, 550 );
		return false;
	});
	if($('body').hasClass('substicky')){
		var csect = $('.stickysub-section'),
			    cnav = $('#stickysub-nav'),
			    nav_height = cnav.outerHeight();
		
		$(window).on('scroll', function () {
		  var cur_pos = $(this).scrollTop();
		 
		  csect.each(function() {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();
		 
			if (cur_pos >= top && cur_pos <= bottom) {
			  cnav.find('a').removeClass('active');
			  csect.removeClass('active');
		 
			  $(this).addClass('active');
			  cnav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
			}else{
				$(this).removeClass('active');
			  	cnav.find('a[href="#'+$(this).attr('id')+'"]').removeClass('active');
			}
		  });
		});	
	}
	
	$("select.nav-dropdown").change(function(e) {
        e.preventDefault();
        e.stopPropagation();
        // location.href = this.value;
        // scroll to the selected section
        var obj = cumulativeOffset(document.getElementById(this.value.replace("#", "")));
        setTimeout(function() {
            // console.log("THIS.value", obj.top);
            // window.scrollTo(0, obj.top);

            $('html,body').animate({
                scrollTop: obj.top
            }, 500);

        }, 100)
    });
	
	//media icons
	$('li.ministry-download-icon a').addClass('btn btn-primary').prepend('<span class="icon icon-download5"></span>');
	$('li.ministry-listen-icon a').addClass('btn btn-primary').prepend('<span class="icon icon-headphones"></span>');
	
	//pagination icons
	//$('#pagination a#previous').html('<span class="icon icon-arrow-left4"></span>');
	//$('#pagination a#next').html('<span class="icon icon-arrow-right4"></span>');
	
	//pagination for monklets
	$('body').on('click', '.m1-monklet #pagination a', function(event) {
		event.preventDefault();
		var $m1Monklet = $(this).parents('.m1-monklet');
		var data = $(this).parents('.m1-monklet').data();
		if($(this).attr('href') == undefined || $(this).attr('href') == '#'){
			return false;
		}else {
			var thisurl = $(this).attr('href');
			var page = getmUrlParameter('page', thisurl);
			if(page != undefined){
				data.page = page;
			}
			var $m1MonkletCont = $(this).parents('.content-section');
			$('html, body').animate( { scrollTop: $m1MonkletCont.offset().top }, 550 );
			$m1Monklet.html('').addClass('loading transparent');
			$.ajax({
				url : '/_components/ajax/ajax-ministry-1.php',
				type: 'GET',
				data: data,
				success:function(results) {
					$m1Monklet.html(results).removeClass('loading');
					//$('#pagination a#previous').html('<span class="icon icon-arrow-left4"></span>');
					//$('#pagination a#next').html('<span class="icon icon-arrow-right4"></span>');
				},
				error: function(results, textStatus, jqXHR) {
					//add error messages as needed console.log(jqXHR.responseText);
				}
			});
		}
	});
	
});


var cumulativeOffset = function(element) {
    var top = 0,
        left = 0;
    do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while (element);

    return {
        top: top,
        left: left
    };
};

function getmUrlParameter(param, url){
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