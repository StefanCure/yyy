// Sticky Plugin v1.0.2 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 16/04/2015
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            var newWidth;
            if ( s.getWidthFrom ) {
                newWidth = $(s.getWidthFrom).width() || null;
            }
            else if(s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if ( newWidth == null ) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i];
        var newWidth = null;
        if ( s.getWidthFrom ) {
            if ( s.responsiveWidth === true ) {
                newWidth = $(s.getWidthFrom).width();
            }
        }
        else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if ( newWidth != null ) {
            s.stickyElement.css('width', newWidth);
        }
      }
    },
    methods = {
      init: function(options) {
        var o = $.extend({}, defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var stickyHeight = stickyElement.outerHeight();
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(wrapper);

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          stickyWrapper.css('height', stickyHeight);

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);
        });
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while ( i-- > 0 )
          {
            if (sticked[i].stickyElement.get(0) === that)
            {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx != -1)
          {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': ''
              })
            ;
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }

  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);


/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {
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

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
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
} )();


/*
 * Settings of the sticky menu
 */

jQuery(document).ready(function(){
   var wpAdminBar = jQuery('#wpadminbar');
   if (wpAdminBar.length) {
      jQuery("#site-navigation").sticky({topSpacing:wpAdminBar.height()});
   } else {
      jQuery("#site-navigation").sticky({topSpacing:0});
   }
});


/*
    JQuery Advanced News Ticker 1.0.11 (20/02/14)
    created by risq
    website (docs & demos) : https://risq.github.io/jquery-advanced-news-ticker/
*/
(function(b,k,l,m){function g(a,f){this.element=a;this.$el=b(a);this.options=b.extend({},c,f);this._defaults=c;this._name=d;this.moveInterval;this.moving=this.paused=this.state=0;(this.$el.is("ul")||this.$el.is("ol"))&&this.init()}var d="newsTicker",c={row_height:20,max_rows:3,speed:400,duration:2500,direction:"up",autostart:1,pauseOnHover:1,nextButton:null,prevButton:null,startButton:null,stopButton:null,hasMoved:function(){},movingUp:function(){},movingDown:function(){},start:function(){},stop:function(){},
pause:function(){},unpause:function(){}};g.prototype={init:function(){this.$el.height(this.options.row_height*this.options.max_rows).css({overflow:"hidden"});this.checkSpeed();this.options.nextButton&&"undefined"!==typeof this.options.nextButton[0]&&this.options.nextButton.click(function(a){this.moveNext();this.resetInterval()}.bind(this));this.options.prevButton&&"undefined"!==typeof this.options.prevButton[0]&&this.options.prevButton.click(function(a){this.movePrev();this.resetInterval()}.bind(this));
this.options.stopButton&&"undefined"!==typeof this.options.stopButton[0]&&this.options.stopButton.click(function(a){this.stop()}.bind(this));this.options.startButton&&"undefined"!==typeof this.options.startButton[0]&&this.options.startButton.click(function(a){this.start()}.bind(this));this.options.pauseOnHover&&this.$el.hover(function(){this.state&&this.pause()}.bind(this),function(){this.state&&this.unpause()}.bind(this));this.options.autostart&&this.start()},start:function(){this.state||(this.state=
1,this.resetInterval(),this.options.start())},stop:function(){this.state&&(clearInterval(this.moveInterval),this.state=0,this.options.stop())},resetInterval:function(){this.state&&(clearInterval(this.moveInterval),this.moveInterval=setInterval(function(){this.move()}.bind(this),this.options.duration))},move:function(){this.paused||this.moveNext()},moveNext:function(){"down"===this.options.direction?this.moveDown():"up"===this.options.direction&&this.moveUp()},movePrev:function(){"down"===this.options.direction?
this.moveUp():"up"===this.options.direction&&this.moveDown()},pause:function(){this.paused||(this.paused=1);this.options.pause()},unpause:function(){this.paused&&(this.paused=0);this.options.unpause()},moveDown:function(){this.moving||(this.moving=1,this.options.movingDown(),this.$el.children("li:last").detach().prependTo(this.$el).css("marginTop","-"+this.options.row_height+"px").animate({marginTop:"0px"},this.options.speed,function(){this.moving=0;this.options.hasMoved()}.bind(this)))},moveUp:function(){if(!this.moving){this.moving=
1;this.options.movingUp();var a=this.$el.children("li:first");a.animate({marginTop:"-"+this.options.row_height+"px"},this.options.speed,function(){a.detach().css("marginTop","0").appendTo(this.$el);this.moving=0;this.options.hasMoved()}.bind(this))}},updateOption:function(a,b){"undefined"!==typeof this.options[a]&&(this.options[a]=b,"duration"==a||"speed"==a)&&(this.checkSpeed(),this.resetInterval())},add:function(a){this.$el.append(b("<li>").html(a))},getState:function(){return paused?2:this.state},
checkSpeed:function(){this.options.duration<this.options.speed+25&&(this.options.speed=this.options.duration-25)},destroy:function(){this._destroy()}};b.fn[d]=function(a){var f=arguments;return this.each(function(){var c=b(this),e=b.data(this,"plugin_"+d),h="object"===typeof a&&a;e||c.data("plugin_"+d,e=new g(this,h));"string"===typeof a&&e[a].apply(e,Array.prototype.slice.call(f,1))})}})(jQuery,window,document);

/*
 * Settings of the ticker
 */
jQuery(document).ready(function(){
   jQuery('.newsticker').newsTicker({
      row_height: 20,
      max_rows: 1,
      speed: 1000,
      direction: 'down',
      duration: 4000,
      autostart: 1,
      pauseOnHover: 1
   });
});

