/*============================================
 * Mobile Detect
 *=============================================
*/

function mobileDetect() {

	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	return check; 
}

/*============================================
 * Touch Detect
 *=============================================
*/
function touchDetect() { 
  return (('ontouchstart' in window)
	|| (navigator.MaxTouchPoints > 0)
	|| (navigator.msMaxTouchPoints > 0));
}

/*
 * Detect and return the current active responsive breakpoint in Bootstrap 4
 *
 * @returns {string} - matches $grid-breakpoints variables
 * xs: Extra small (< 576px)
 * sm: Small (576px ≥ X < 768px)
 * md: Medium (768px ≥ X < 992px)
 * lg: Large (992px ≥ X < 1200px)
 * xl: Extra large (≥ 1200 px)
 */
function getBreakpoint() {
    var envs = ["sm", "md", "lg", "xl"];
    var env = "";

    var $el = $("<div>");
    $el.appendTo($("body"));
    $el.addClass("d-block");
    for (var i = envs.length - 1; i >= 0; i--) {
        env = envs[i];
        $el.addClass("d-" + env + "-none");
        if ($el.is(":hidden")) {
            $el.remove();
            return env;
        }
    }
    $el.remove();
    return "xs";    //extra small
}

/*============================================
 * Selectmenu
 *=============================================
*/
function selectors(){
	
	var changeSelectMenu = function(event, item) {
		$(this).trigger('change', item);
	};
	selectmenu();
	enquire.register("screen and (max-width: 992px)", {
		setup : function() {
			selectmenu();
		},
		match : function() {
			$('.filters select.sorter, .event-right .sorter, .monkForm select, #select-nav-dropdown').selectmenu('destroy');
		},
		unmatch : function() {
			selectmenu();
		}  
	});
	function selectmenu(){
		$('.filters select.sorter, .event-right .sorter, .monkForm select, #select-nav-dropdown').selectmenu({
			width: false,
			style:'dropdown',
			change: changeSelectMenu
		});
		$('.ui-selectmenu-button').append("<span class='icon'></span>");
	}
	
	if($('#event-campus-filter').length){
		var $filCont = $('#event-campus-filter');
		$.ajax({
			url : '/_components/ajax/ajax-section-filter-events.php',
			type: 'GET',
			//data: ({}),
			success:function(results) {
				$filCont.append(results);
				$('#event-campus-filter').selectmenu({
					width: false,
					style:'dropdown',
					//appendTo: '.section-filter',
					change: changeSelectMenu
				});
				$('.section-filter .ui-selectmenu-button').append("<span class='icon'></span>");
				$filCont.change(function (event) {
					if (this.value == '') {
						window.location = '/events/list';
					} else {
						window.location = '/events/' + this.value + '/list/';
					}
				});
			},
			error: function(results, textStatus, jqXHR) {
				//add error messages as needed console.log(jqXHR.responseText);
			}
		});	
	}
	
	
}


/*============================================
 * Global
 *=============================================
*/
 function global(campusCookie){  
	
	// Copyright 2014-2017 The Bootstrap Authors
	// Copyright 2014-2017 Twitter, Inc.
	// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	  var msViewportStyle = document.createElement('style')
	  msViewportStyle.appendChild(
		document.createTextNode(
		  '@-ms-viewport{width:auto!important}'
		)
	  )
	  document.head.appendChild(msViewportStyle)
	}


	//responsive third party vids
	$('#content, .content-section').fitVids({
		ignore: '#video-player, .div-embed, .vimeoWrapper, .embed-responsive',
		customSelector: "iframe[src*='/Clients/player/videoembed.php']"
	});	
	
	//set no links
	$('a[href*="#"]').addClass('nolink');
	$('a[href=""]').addClass('nolink');
		
	//colorbox defaults
	$('.thickbox').colorbox({ iframe: true, opacity: 0.85, width: 860,height: 650,maxWidth: "75%",maxHeight: "75%" }); 
	$('.slideshow').colorbox({slideshow: true,photo: true,preloading: true,slideshowSpeed: 5000,slideshowAuto: false});
	if($('#alert-lightbox').length) {
		$.colorbox({inline:true, href:"#alert-lightbox", width:600, maxWidth: "75%", maxHeight: "75%", opacity: 0.75,
		onComplete:function(){
			var aBg = $('#alert-lightbox').data('background');
			if(aBg){
				$('.cboxIframe').css({'background':aBg});
				$('#cboxLoadedContent').css({'background':aBg});
			}
		}
		});
	}
	
	//scrolls
	$('#scrolltop').click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow');
	});
	if($('#billboardDown').length){
		var hHeight = $('#header').outerHeight();
		if($('#content').length){
			var firstSec = 'content';
		}else{
			var firstSec = $('.content-section').first().attr('id');
		}
		$('#billboardDown').click(function(event){
			event.preventDefault();
			$('html, body').animate({scrollTop: $('#'+firstSec).offset().top - hHeight }, 550 );
		});
	}
	
	//window resize
	var resizeTimer = null;
	$(window).on('resize', function() {
		if (resizeTimer) clearTimeout(resizeTimer);
		resizeTimer = setTimeout(siteReset, 150);
	});
	function siteReset() {
		$('#cboxClose').click();
	}

	//alert...because of the client request to separate positions for header/alert when overlay and sticky used
	//sticky to clone/move alert
	$('body').on('click', '.alert-header .alert-toggle', function(event){
		$('.alert-header').slideUp(250);
		setTimeout(function() {
		  $('.alert-header').remove();
		}, 250);
		event.preventDefault();
	});
	
	//Sticky 
  	var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
		var stickyHeight = sticky.outerHeight();
		if(sticky.attr('id')==='header'){
			var stickyTop = stickyWrapper.offset().top+1;
		}else{
			var stickyTop = stickyWrapper.offset().top;
		}
		//if ( (scrollElement.scrollTop() >= stickyTop) && (getBreakpoint() === 'lg' || getBreakpoint() === 'xl') ){
		if ( scrollElement.scrollTop() >= stickyTop ){
		  stickyWrapper.height(stickyHeight);
		  sticky.addClass("is-sticky");
		  if(sticky.attr('id')==='header'){
			  if($('#alert-header').length && !$('#header .alert-header').length){
		  		$('.alert-header').clone().prependTo('#header');
				$('#header .alert-header').slideDown();
			  }else if($('#header .alert-header').is(':hidden')){
				$('#header .alert-header').slideDown();
			  }
			  
			  if($('#alert-header').is(':visible')){
			  	$('#alert-header').slideUp();
			  }
		  }
		}
		else{
		  sticky.removeClass("is-sticky");
		  stickyWrapper.height('auto');
		  if(sticky.attr('id')==='header'){
			if($('#header .alert-header').is(':visible')){
		  		$('#header .alert-header').hide();
			}
			if($('#alert-header').is(':hidden')){
				$('#alert-header').slideDown();
			}
		  }
		}
  	};
  	$('[data-toggle="sticky-onscroll"]').each(function() {
		var sticky = $(this);
		var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
		sticky.before(stickyWrapper);
		sticky.addClass('sticky');
		
		// Scroll & resize events
		$(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
		  stickyToggle(sticky, stickyWrapper, $(this));
		});
		
		// On page load
		stickyToggle(sticky, stickyWrapper, $(window));
  	});
	
	//countdown
   if($('#countdown').length>0){
	  window.$countdown = '#countdown';
	  $.getScript('/_assets/js/monk/helpers/countdown.js')
	  .done(function( script, textStatus ) {
		
	  })
	  .fail(function( jqxhr, settings, exception ) {
		  //console.log('error');
	  });
  	}
	
	//parallax plugin init. for full width sections. uses default settings
	$('.jarallax').jarallax({
		//disableParallax: /iPad|iPhone|iPod|Android/,
		automaticResize: true
        //speed: 0.5,
        //imgWidth: 1366,
        //imgHeight: 768
     });
	 
	//sitemap
	$('#footer .sitemap li.level-').each(function(){
		var smSize = $(this).nextUntil('.level-').length;
		if(smSize > 0){
			var liID = $(this).attr('id');
			$(this).nextUntil('.level-').wrapAll('<ul id="ul-'+liID+'" class="list-unstyled m-0 p-0"></ul');
			$('#ul-'+liID).appendTo('li#'+liID);
			$(this).addClass('dropdown');
			var $thisAnchor = $(this).find('a').first();
			$thisAnchor.prepend('<span><i></i></span>');
			var liHref = $thisAnchor.attr('href');
			if(liHref==''||liHref=='#'){
				$thisAnchor.addClass('open');
				$thisAnchor.attr('href', '#');
			}else{
				$thisAnchor.find('span').addClass('open');
			}
		}
	});
	$('#footer .sitemap li .nolink').on('click', function(event){
		event.preventDefault();
	});
	$('#footer .sitemap li.level-.dropdown .open').on('click', function(event){
		var current = $(this).closest('li').first();
		current.toggleClass('active');
		event.preventDefault();
	});
 }
	
/*============================================
 * Header
 *=============================================
*/
 function header(campusCookie){
	
	//if no billboard
	if(!$('#billboard').length){
		$('#wrap').addClass('no-billboard');
	}
	
	//main nav
	$('.navigation-toggle').on('click', function(event) {
		event.preventDefault();
		$('body').toggleClass('show-nav');
		$('body').removeClass('show-login');
	});
	

	$('#nav li a').each(function(){
		if($(this).parent().children("ul").length){
			$(this).parent().addClass('dropdown');
			var mnhref = $(this).attr('href');
			if(mnhref==''||mnhref=='#'){
				$(this).addClass('open');
			}else{
				$(this).addClass('hasicon');
				$(this).prepend('<span class="open"><i></i></span>');
			}
		}
	});
	
	$('#nav li.dropdown .open').on('click', function(event){
		var current = $(this).closest('li').first();
		current.toggleClass('active');
		current.find('ul').first().slideToggle();
		event.preventDefault();
	});
	
	//login
	$('body').on('click', '.login-toggle', function (event) {
		event.preventDefault();
		if ( !$(event.target).is('.inactive') ) {
			$('body').toggleClass('show-login');
		}
		if ($('body').hasClass('show-login')) {
			$('nav.main .login-toggle').addClass('inactive');
		}else{
			$('nav.main .login-toggle').removeClass('inactive');
		}
	});
	if($('#login-fail').length>0){
		$.colorbox({inline:true, href:"#login-fail", maxWidth: "75%", maxHeight: "75%"});
	}
	
	//close nav/login on doc click/esc	
	$(document).on( 'click', function (event) {
		if ($(event.target).closest('nav.main, #f1-login, .navigation-toggle').length === 0) {
			if ($('body').hasClass('show-nav')) {
				$('body').removeClass('show-nav');
				$('body').removeClass('show-login');
			}
		}
	});
	$( document ).on( 'keydown', function ( e ) {
		if ( e.keyCode === 27 ) {
			if ($('body').hasClass('show-nav')) {
				$('body').removeClass('show-nav');
				$('body').removeClass('show-login');
			}
		}
	});
	
 }
 
/*============================================
 * Billboard
 *=============================================
*/
 function billboard(campusCookie){
	
	//rotator
	$('.rotator .cycle-ss').each(function(){
		var $slideshow = $(this);
		var slidecount = $slideshow.find('.slide').length;
		if(slidecount<2){
			$('.rotator .cycle-pager').remove();
			$('.rotator .pager').remove();
		}
		$slideshow.on({
			'cycle-initialized': function(event, optionHash){
				$('body').delay(1500).queue(function(next) {
					$('body').addClass('js-rotator');
				  	next();
				});
			},
			'cycle-post-initialize': function(event, optionHash){
			},
			'cycle-before': function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
				$('.rotator').removeClass('playing');
			},
			'cycle-after': function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
				//$slideshow.cycle('resume');
				if ($(outgoingSlideEl).hasClass('playing') ) {
					$(outgoingSlideEl).find('.video').remove();
					$(outgoingSlideEl).removeClass('playing');
					//$slideshow.cycle('resume');
				}
			}
		});
		$slideshow.cycle();// Auto initialization
	});
	
	// Video Slide 
	$('.video-slide').click(function(event){
		event.preventDefault();
		var $this = $(this),
			mediaTitle = $this.data('title'),
			mediaType = $this.data('type'),
			mediaSRC = $this.data('src'),
			mediaImg = encodeURIComponent($this.data('image')),
			mediaExt = '';
			if(mediaType == 'file'){
				var mediaExt = mediaSRC.substr((mediaSRC.lastIndexOf('.')+1)).toLowerCase();
			}
			$this.parents('.cycle-ss').cycle('pause');
			$.ajax({
				url : '/_components/ajax/ajax-rotator-media.php',
				type: 'GET',
				data: ({title: mediaTitle, type: mediaType, src: mediaSRC, image: mediaImg, ext: mediaExt}),
				success:function(results) {
					$this.parent('.slide').addClass('playing').prepend(results);
				},
				error: function(results, textStatus, jqXHR) {
					//add error messages as needed console.log(jqXHR.responseText);
				}
			});	
	});
	
 }	
 
/*============================================
 * Widgets
 *=============================================
*/
 function widgets(campusCookie){
	
	//articles with outside url
	$('article.outsideurl').each(function(){
		var outsideURL = $(this).data('url');
		$(this).find('a').attr('href', outsideURL);
		$(this).find('a').attr('target', '_blank');
	});
	$(document).ajaxComplete(function() {
		$('article.outsideurl').each(function(){
			var outsideURL = $(this).data('url');
			$(this).find('a').attr('href', outsideURL);
			$(this).find('a').attr('target', '_blank');
		});
	});
	
	//tooltip
	$('.tooltip').tooltip({position: { my: "left top+9", at: "left bottom", collision: "flipfit" }});
	$(document).ajaxComplete(function() {
		if($('.tooltip').length){
			$('.tooltip').tooltip({position: { my: "left top+9", at: "left bottom", collision: "flipfit" }});
		}
	});
	
	//jqueryui
	$('.tabs').tabs({
		beforeActivate: function (event, ui) {
			if( $(ui.newTab).find('a').attr('href').indexOf('#') != 0 ){
				window.open($(ui.newTab).find('a').attr('href'), '_self');
			}
			else{
				window.location.hash = ui.newPanel.attr('id');
			}
		}
	});
	$('.tabs-linklist').each(function(){
		var tabsC = $(this).attr('id');
		var tabsID = tabsC.split('-')[1];
		$.ajax({
			url : '/_components/ajax/ajax-tabs.php',
			type: 'GET',
			data: ({id: tabsID}),
			success:function(results) {
				$('#'+tabsC).html(results);
				$('#'+tabsC).tabs({
					beforeActivate: function (event, ui) {
						//console.log(ui);
						if( $(ui.newTab).find('a').attr('href').indexOf('#') != 0 ){
							window.open($(ui.newTab).find('a').attr('href'), '_self');
						}
						else{
							window.location.hash = ui.newPanel.attr('id');
						}
					}
				});
			},
			error: function(results, textStatus, jqXHR) {
				//add error messages as needed console.log(jqXHR.responseText);
			}
		});
	});
	$('.accordion').accordion(
		{
        	header: "> h5",
			heightStyle: "content", 
			active: false,
  			collapsible: true
      	}
	);
	
	//gallery monklet 
	$('.insert-gallery').each(function(){
		var galleryID = $(this).attr('id');
		$('#'+galleryID).lightGallery({
			thumbnail:false,
			animateThumb: true
		});
	});
	
	//play sermon video
	$('.widget .play-sermon-video').on('click', function(event) {
		event.preventDefault();
		var data = $(this).data();
		var $vidCont = $(this).parents('.div-embed');
		$vidCont.addClass('dark loading playing');
		$.ajax({
			url : '/_components/ajax/ajax-sermon-video.php',
			type: 'GET',
			data: data,
			success:function(results) {
				$vidCont.html(results).removeClass('loading');
			},
			error: function(results, textStatus, jqXHR) {
			//add error messages as needed console.log(jqXHR.responseText);
			}
		});
	});	
	
	//play src video
	$('.play-video-src').click(function(event){
		event.preventDefault();
		var $vCont = $(this).parent('.div-embed'),
			vSrc = $(this).data('src');
		$vCont.addClass('dark loading playing');
		$.ajax({
			url : '/_components/ajax/ajax-video-src.php',
			type: 'GET',
			data: ({video: vSrc}),
			success:function(results) {
				$vCont.addClass('playing').html(results).removeClass('loading transparent');
			},
			error: function(results, textStatus, jqXHR) {
				//add error messages as needed console.log(jqXHR.responseText);
			}
		});
	});
	
	//featured columns and monklets needing no y padding
	$('.content-section .container-fluid .no-sec-padding').each(function(){
		$(this).parents('.content-section-inner').removeClass('py-8 py-md-11');
		$(this).parents('.container-fluid').addClass('p-0');
	});
	
	//share linklist
	$('.share-linklist').each(function(){
		var data = $(this).data();
		var $shareCont = $(this);
		$shareCont.addClass('loading');
		$.ajax({
			url : '/_components/ajax/ajax-share-linklist.php',
			type: 'GET',
			data: data,
			success:function(results) {
				$shareCont.html(results).removeClass('loading');
			},
			error: function(results, textStatus, jqXHR) {
			//add error messages as needed console.log(jqXHR.responseText);
			}
		});
	});	
	
	//events carousel for mobile/also check for geo coding/campus options
	$('.geo-events').each(function(){
		var $geoCont = $(this);
		$geoCont.addClass('loading');
		$.ajax({
			url : '/_components/ajax/ajax-section-events-geo.php',
			type: 'GET',
			data: ({'group': campusCookie}),
			success:function(results) {
				$geoCont.html(results).removeClass('loading');
				var $flcCont = $geoCont.find('.widget');
				var flcCount = $flcCont.find('article').length;
				if(flcCount > 1 && mobileDetect()){
					makeFeatCarousel($flcCont, 1);
				}
			},
			error: function(results, textStatus, jqXHR) {
				//add error messages as needed console.log(jqXHR.responseText);
			}
		});
		//var geoCount = $flcCont.find('article').length;
		//if(geoCount > 1 && mobileDetect()){
			//makeFeatCarousel($geoCount, 1);
		//}
	});
	$('.widget.events.carousel').each(function(){
		var $flcCont = $(this);
		var flcCount = $flcCont.find('article').length;
		if(flcCount > 1 && mobileDetect()){
			makeFeatCarousel($flcCont, 1);
		}
	});
	function makeFeatCarousel($flcCont, count){
		var $flcID = $flcCont.attr('id');
		var $carID = $flcID +'-cycle2';
		$flcCont.removeClass('row').addClass('has-carousel');
		$flcCont.find('article').removeClass('col-12 col-md-4 mb-4 mb-md-0').wrapAll('<div id="'+$carID+'" class="section-carousel">');
		$flcCont.append('<div id="cycle-pager-'+$carID+'" class="cycle-pager"></div>');
		$('#'+$carID).cycle({
			fx:'carousel',
			slides: '> article',
			speed: 350,
			swipe: true,
			log: false,
			timeout: 0,
			carouselVisible: count,
			autoHeight: "calc",
			carouselFluid: true,
			cycleLoader: "wait",
			pager:'#cycle-pager-'+$carID+'',
			after: function() {
			}
		});
	}
	
	
 }


/*============================================
 * Responsive Tables
 *=============================================
*/
function tableInit(){
	function n(n){n.wrap("<div class='table-wrapper' />");var i=n.clone();i.find("td:not(:first-child), th:not(:first-child)").css("display","none"),i.removeClass("responsive-table"),n.closest(".table-wrapper").append(i),i.wrap("<div class='pinned' />"),n.wrap("<div class='scrollable' />"),e(n,i)}function i(n){n.closest(".table-wrapper").find(".pinned").remove(),n.unwrap(),n.unwrap()}function e(n,i){var e=n.find("tr"),t=i.find("tr"),a=[];e.each(function(n){var i=$(this),e=i.find("th, td");e.each(function(){var i=$(this).outerHeight(!0);a[n]=a[n]||0,i>a[n]&&(a[n]=i)})}),t.each(function(n){$(this).height(a[n])})}var t=!1,a=function(){return $(window).width()<767&&!t?(t=!0,$("table.responsive-table").each(function(i,e){n($(e))}),!0):void(t&&$(window).width()>767&&(t=!1,$("table.responsive-table").each(function(n,e){i($(e))})))};a(),$(window).on("redraw",function(){t=!1,a()}),$(window).on("resize",a)
}


/*============================================
 * Initialize
 *=============================================
*/
function initialize(){
	
	/*
		Campus cookie
		not used much at time of build but passed to global/widgets for future
	*/
	var campusCookie = false;
	if(Cookies.get('campus')){
		var campusCookie = Cookies.get('campus');
	}
	//if this code changes make sure to check ajax-campuses-map.php and all templates
	$('body').on('click', '.set-campus', function(event) {
		event.preventDefault();
		var campusSLUG = $(this).data('campus');
		var campusTitle = campusSLUG.replace(/-/g, ' ');
		if(campusSLUG){
			//corresponds with php cookie for $campus
			Cookies.set('campus', campusSLUG, { expires: 9999, path: '/' });
			var campusCookie = Cookies.get('campus');
			//header toggle
			$('#header .header .location-toggle .text').text(campusTitle);
			//mcms_campuses.php
			$('#campuses .list-view article.campus').removeClass('home');
			$(this).parents('article.campus').addClass('home');
			if($(this).parents('.list-view')){
				$('#campuses .list-view a.set-campus').text('Set As Home Campus');
				$(this).text('Your Home Campus');
			}
		}
	});
	
	$('body').on('click', '.remove-campus', function(event) {
		event.preventDefault();
		Cookies.remove('campus', { path: '/' });;
		if($(this).parents('.list-view')){
			$('#campuses .list-view article.campus').removeClass('home');
			$('#campuses .list-view a.set-campus').text('Set As Home Campus');
		}
	});
	
	
	//Site defaults
	global(campusCookie);
	
	//Header
	header(campusCookie);
	
	//Billboard (includes looping video and rotator)
	billboard(campusCookie);
	
	//Widgets/Monklets
	widgets(campusCookie);
	
	//Zurb tables
	tableInit();
}

var redeemerGlobal = {};

jQuery(function($){
	
	
	//Setup bulk
	initialize();
	
	//Enable selectmenu
	if ($('select.sorter, .event-right .sorter, .monkForm select, #event-campus-filter, #select-nav-dropdown').length > 0) {
		selectors();
	}
	
});
