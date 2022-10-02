(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		// CAROUSEL 1

		$("#owl-csel1").owlCarousel({
			items: 4,
			autoplay: true,
			autoplayTimeout: 5000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<i class="fa fa-angle-left" aria-hidden="true"></i>',
						'<i class="fa fa-angle-right" aria-hidden="true"></i>'
					],
			navContainer: '.main-content .custom-nav',
			responsive:{
				0: {
					items: 1,						
				},
				767: {
					items: 1,						
				},
				1200: {
					items: 1,						
				}
			}

		});

		// CAROUSEL 2

		$("#owl-csel2").owlCarousel({
			items: 4,
			autoplay: false,
			autoplayTimeout: 5000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<img src="images/left-arrow.png" alt="" class="img-fluid">',
						'<img src="images/right-arrow.png" alt="" class="img-fluid">'
					],
			navContainer: '.main-content2 .custom-nav',
			responsive:{
				0: {
					items: 2,						
				},
				767: {
					items: 2,						
				},
				1200: {
					items: 6,						
				}
			}

		});

		// CAROUSEL 3

		$("#owl-csel3").owlCarousel({
			items: 4,
			autoplay: true,
			autoplayTimeout: 5000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<img src="images/left-arrow.png" alt="" class="img-fluid">',
						'<img src="images/right-arrow.png" alt="" class="img-fluid">'
					],
			navContainer: '.main-content3 .custom-nav',
			responsive:{
				0: {
					items: 2,						
				},
				767: {
					items: 2,						
				},
				768: {
					items: 3,						
				},
				991: {
					items: 4,						
				},
				1200: {
					items: 6,						
				}
			}

		});

		// CAROUSEL 4

		$("#owl-csel4").owlCarousel({
			items: 4,
			autoplay: true,
			autoplayTimeout: 4000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<img src="images/left-arrow.png" alt="" class="img-fluid">',
						'<img src="images/right-arrow.png" alt="" class="img-fluid">'
					],
			navContainer: '.main-content4 .custom-nav',
			responsive:{
				0: {
					items: 2,						
				},
				767: {
					items: 2,						
				},
				768: {
					items: 3,						
				},
				991: {
					items: 4,						
				},
				1200: {
					items: 6,						
				}
			}

		});


		// CAROUSEL 5

		$("#owl-csel5").owlCarousel({
			items: 4,
			autoplay: false,
			autoplayTimeout: 5000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<img src="images/left-arrow.png" alt="" class="img-fluid">',
						'<img src="images/right-arrow.png" alt="" class="img-fluid">'
					],
			navContainer: '.main-content5 .custom-nav',
			responsive:{
				0: {
					items: 2,						
				},
				767: {
					items: 2,						
				},
				768: {
					items: 3,						
				},
				991: {
					items: 4,						
				},
				1200: {
					items: 6,						
				}
			}

		});

		// CAROUSEL 6

		$("#owl-csel6").owlCarousel({
			items: 4,
			autoplay: false,
			autoplayTimeout: 5000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<img src="images/left-arrow.png" alt="" class="img-fluid">',
						'<img src="images/right-arrow.png" alt="" class="img-fluid">'
					],
			navContainer: '.main-content6 .custom-nav',
			responsive:{
				0: {
					items: 2,						
				},
				767: {
					items: 2,						
				},
				768: {
					items: 3,						
				},
				991: {
					items: 4,						
				},
				1200: {
					items: 6,						
				}
			}

		});

		// CAROUSEL 7

		$("#owl-csel7").owlCarousel({
			items: 4,
			autoplay: false,
			autoplayTimeout: 5000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<img src="images/left-arrow.png" alt="" class="img-fluid">',
						'<img src="images/right-arrow.png" alt="" class="img-fluid">'
					],
			navContainer: '.main-content7 .custom-nav',
			responsive:{
				0: {
					items: 1,						
				},
				767: {
					items: 1,						
				},
				1200: {
					items: 1,						
				}
			}

		});

		// CAROUSEL 8

		$("#owl-csel8").owlCarousel({
			items: 4,
			autoplay: true,
			autoplayTimeout: 7000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<img src="images/left-arrow.png" alt="" class="img-fluid">',
						'<img src="images/right-arrow.png" alt="" class="img-fluid">'
					],
			navContainer: '.main-content8 .custom-nav',
			responsive:{
				0: {
					items: 1,						
				},
				767: {
					items: 2,						
				},
				768: {
					items: 2,						
				},
				1200: {
					items: 4,						
				}
			}

		});

		// CAROUSEL 9

		$('.main-carousel9').flickity({				
			// options
			cellAlign: 'left',
			contain: true,
			groupCells: true,
			freeScroll: true,
			wrapAround: true,
			groupCells: 1,
			// groupCells: '100%',
		   autoPlay: false,
		   // autoPlay: 1500,
		   pauseAutoPlayOnHover: false,
		   initialIndex: 1,
		   wrapAround: true,
		   prevNextButtons: true,
		   pageDots: true

		});

		// CAROUSEL 10

		$("#owl-csel10").owlCarousel({
			items: 4,
			autoplay: false,
			autoplayTimeout: 5000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<img src="images/left-arrow.png" alt="" class="img-fluid">',
						'<img src="images/right-arrow.png" alt="" class="img-fluid">'
					],
			navContainer: '.main-content10 .custom-nav',
			responsive:{
				0: {
					items: 1,						
				},
				767: {
					items: 1,						
				},
				767: {
					items: 1,						
				},
				768: {
					items: 3,						
				},
				768: {
					items: 4,						
				},
				1200: {
					items: 5,						
				}
			}

		});

	







		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);