$(document).ready(function(){
	var $mainLogo = $('#main-logo');
	var $numLogos = $('#main-logo img').filter(function(){
		return this.id.match(/pd-logo-\d/)
	});
	var $numLogos2up = $('#main-logo img').filter(function(){
		return this.id.match(/pd-logo-[2-4]/)
	});
	var $numLogos3up = $('#main-logo img').filter(function(){
		return this.id.match(/pd-logo-[34]/)
	});
	var $numLogos4up = $('#main-logo img').filter(function(){
		return this.id.match(/pd-logo-4/)
	});

	var logoAnimate = TweenMax.from($mainLogo, 1, {
		left: '105%',
		ease: Back.easeInOut,
		delay: 2
	});

	var dateAnimate1 = TweenMax.to($numLogos, .5, {
		top: '+=200px',
		ease: Power0.easeNone,
		delay: 3
	});

	var dateAnimate2 = TweenMax.to($numLogos2up, .5, {
		top: '+=200px',
		ease: Power0.easeNone,
		delay: 3.5
	});

	var dateAnimate3 = TweenMax.to($numLogos3up, .5, {
		top: '+=200px',
		ease: Power0.easeNone,
		delay: 4
	});

	var dateAnimate4 = TweenMax.to($numLogos4up, .5, {
		top: '+=200px',
		ease: Power0.easeNone,
		delay: 4.5
	});
})