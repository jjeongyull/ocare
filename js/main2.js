

$(function() {

	'use strict';

	$(".loader").delay(1500).fadeOut("slow");
  	$("#untree_co--overlayer").delay(1500).css({"top":"-100%"});	
//	$("#untree_co--overlayer").delay(1500).fadeOut("slow");	


	var jarallaxPlugin = function() {
		objectFitImages();
		jarallax(document.querySelectorAll('.jarallax'));
		jarallax(document.querySelectorAll('.jarallax-keep-img'), {
			keepImg: true,
		});
	};
	// jarallaxPlugin();



	var searchToggle = function() {
		$('.js-search-toggle').on('click', function(e) {
			e.preventDefault();
			if ( $('.search-wrap').hasClass('active') ) {
				$('.search-wrap').removeClass('active')
			} else {
				$('.search-wrap').addClass('active')
				setTimeout(function() {
					$('#s').focus();
				}, 50);
			}

			

		});
	};
	searchToggle();


	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-inner');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.untree_co--site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas') ) {
					$('body').removeClass('offcanvas');
				}
			}
		})
	}; 
	siteMenuClone();


	
	

	var MobileToggleClick = function() {
		$('.js-menu-toggle').click(function(e) {

			// alert();
			e.preventDefault();
	  	// var $this = $(this);

	  	if ( $('body').hasClass('offcanvas') ) {
	  		$('body').removeClass('offcanvas');
	  		$('.js-menu-toggle').removeClass('active');
	  	} else {
	  		$('body').addClass('offcanvas');	
	  		$('.js-menu-toggle').addClass('active');
	  	}


	  });

	  // click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".untree_co--site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas') ) {
					$('body').removeClass('offcanvas');
					$('body').find('.js-menu-toggle').removeClass('active');
				}
	    }
		}); 
	};
	MobileToggleClick();

	
	var roomAnimateAsymmetry = function() {

		$(".suite-title").lettering('words');

		var controller = new ScrollMagic.Controller();

		$('.suite-wrap').each(function(){

			var pic1 = $(this).find('.pic1'),
				pic2 = $(this).find('.pic2'),
				excerpt = $(this).find('.suite-excerpt'),
				overlay = $(this).find('.overlay'),
				words = $(this).find('.suite-title > span > span');


		var tl = new TimelineMax();

		tl
			.fromTo(overlay, 2, { skewX: 7 }, { skewX:0, xPercent: 100, transformOrigin: "0% 100%", ease:Expo.easeInOut }, '-=2')
			.fromTo([pic1, pic2], 2, { scale: 1.5 }, { scale: 1.0, ease:Expo.easeInOut }, '-=2')
			.staggerTo(words, 2, { y: 0, ease:Expo.easeInOut }, 0.1, '-=2' )
			.fromTo(excerpt, 2, { opacity: 0, y: 50, autoAlpha: 0 }, { opacity: 1, autoAlpha: 1, y: 0, ease:Expo.easeOut }, '-=1')
			

		

		// Scene 1

		var scene1 = new ScrollMagic.Scene({
			triggerElement: this,
			// duration: "100%",
			duration: "0%",
			reverse: false,
			offset: "-200%",
			// triggerHook: 0,
		})

		.setTween(tl)
		// .addIndicators({
		// 	name: 'reveal',
		// 	colorTrigger: 'black',
		// 	indent: 0,
		// 	colorStart: 'green',

		// })
		.addTo(controller);


		})
	};
	roomAnimateAsymmetry();

	

	var stickyPlugin = function() {
		$(".js-sticky-nav").sticky({topSpacing:0});
	};
	stickyPlugin();

	var heroInnerPage = function() {
		$('.inner-page .hero-heading').lettering('words');
		setTimeout(function() {
			$('.inner-page .hero-heading > span > span').lettering('letters');
		}, 50)



	}
	heroInnerPage();

});
