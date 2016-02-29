$(document).ready(function(){

	//Main Logo Animation
	var $mainLogo = $('#main-logo');
	var $numLogos = $('#main-logo img').filter(function(){
		return this.id.match(/pd-logo-\d/)
	});
	var $numLogos2up = $('#main-logo img').filter(function(){
		return this.id.match(/pd-logo-[234]/)
	});
	var $numLogos3up = $('#main-logo img').filter(function(){
		return this.id.match(/pd-logo-[34]/)
	});
	var $numLogos4up = $('#main-logo img').filter(function(){
		return this.id.match(/pd-logo-4/)
	});
	var $backflip = $('#backflip');

	var logoAnimate = TweenMax.to($mainLogo, 1, {
		left: 0,
		ease: Power1.easeInOut,
		delay: 2
	});

	var dateAnimate1 = TweenMax.to($numLogos, .3, {
		top: '+=15vh',
		ease: Power0.easeNone,
		delay: 3
	});

	var dateAnimate2 = TweenMax.to($numLogos2up, .3, {
		top: '+=15vh',
		ease: Power0.easeNone,
		delay: 3.3
	});

	var dateAnimate3 = TweenMax.to($numLogos3up, .3, {
		top: '+=15vh',
		ease: Power0.easeNone,
		delay: 3.6
	});

	var dateAnimate4 = TweenMax.to($numLogos4up, .3, {
		top: '+=15vh',
		ease: Power0.easeNone,
		delay: 3.9
	});

	var backFlipAnim = TweenMax.to($backflip, .3, {
		opacity: 1,
		ease: Power1.ease,
		delay: 4.3
	})

	//Scroll to fixed nav

	//position of navbar
	// var $navbar 	= $('.navbar-default');
	// var navOffset 	= $navbar.offset().top;

	// $navbar.wrap('<div class="nav-placeholder"></div>')
	// $('.nav-placeholder').height($navbar.outerHeight()).css({'margin-bottom':'40px'});

	// //calculate scroll position on page
	// $(window).scroll(function(){
	// 	var scrollPos = $(window).scrollTop();

	// 	if(scrollPos >= navOffset){
	// 		$navbar.addClass('fixed');
	// 	} else {
	// 		$navbar.removeClass('fixed');
	// 	}
	// });
});