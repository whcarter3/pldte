$(document).ready(function(){
	var $mainLogo = $('#main-logo');

	var logoAnimate = TweenMax.from($mainLogo, 1, {
		left: '102%',
		ease: Back.easeInOut,
		delay: 2
	});
})