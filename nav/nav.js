
"use strict";
/* $(".sub-menu ul").hide();
$(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("200");
    $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");
}); */

function megaMenu(){
	$('.megamenu .dropdown').click('show.bs.dropdown', function (e) {
		var $dropdown = $(this).find('.dropdown-menu');
		var orig_margin_top = parseInt($dropdown.css('margin-top'));
		$dropdown.css({
			'margin-top': (orig_margin_top + 65) + 'px',
			opacity: 0
		}).animate({
			'margin-top': orig_margin_top + 'px',
			opacity: 1
		}, 420, function () {
			$(this).css({
				'margin-top': ''
			});
		});
	});
}

$(function(){
	// Navigation
	megaMenu();
	
	$(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	});
	 
	
});

(function ($) {
    "use strict";
	 var header = $("#header");
    $(window).scroll(function () {
			
	if ($(this).scrollTop() > 50) {
		header.addClass("sticky");
            $(".navbar").addClass("fixed");
	}
			else {
				 header.removeClass("sticky");
            $(".navbar").removeClass("fixed");
			}
    });
	

})(jQuery);

/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
 /* ( function() {
	var container, button, menu;

	container = document.getElementById( 'site-navigation' );
	if ( ! container )
		return;

	button = container.getElementsByTagName( 'h4' )[0];
	if ( 'undefined' === typeof button )
		return;

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	if ( -1 === menu.className.indexOf( 'nav-menu' ) )
		menu.className += 'nav-menu';

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'main-small-navigation' ) )
			container.className = container.className.replace( 'main-small-navigation', 'main-navigation' );
		else
			container.className = container.className.replace( 'main-navigation', 'main-small-navigation' );
	};
} )();

( function() {
	var container, button, menu;

	container = document.getElementById( 'top-site-navigation' );
	if ( ! container )
		return;

	button = container.getElementsByTagName( 'h3' )[0];
	if ( 'undefined' === typeof button )
		return;

	menu = container.getElementsByTagName( 'ul' )[0]; */

	// Hide menu toggle button if menu is empty and return early.
	/* if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	if ( -1 === menu.className.indexOf( 'nav-menu' ) )
		menu.className += 'nav-menu';

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'mobile-small-menu' ) )
			container.className = container.className.replace( 'mobile-small-menu', 'small-menu' );
		else
			container.className = container.className.replace( 'small-menu', 'mobile-small-menu' );
	};
} )(); */


/*
 * Settings of the sticky menu
 */

/* jQuery(document).ready(function(){
   var wpAdminBar = jQuery('#wpadminbar');
   if (wpAdminBar.length) {
      jQuery("#site-navigation").sticky({topSpacing:wpAdminBar.height()});
   } else {
      jQuery("#site-navigation").sticky({topSpacing:0});
   }
}); */