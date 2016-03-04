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

	//Instagram feed
	var feed = new Instafeed({
		get: 'user',
		userId: '905810418',
		clientId: '2f8c1f8533c74a7b9b5b90ada82d9d54',
		filter: function(image){
		  if (image.type == 'image'){
		    image.template = '<img src="{{image}}" alt="{{caption}}" class="img-responsive">';
		  } else {
		    image.template = '<video width="100%" controls loop><source src="' + image.videos.standard_resolution.url + '" type="video/mp4"/></video>';
		  }
		  return true;
		},
		template: '<figure>{{model.template}}</figure>',
		resolution: 'low_resolution',
		after: function(){
			var instafeed = $('#instafeed').imagesLoaded(function(){
				instafeed.masonry({
					itemSelector: 'figure',
					// columnWidth: 400
				})
			});
		}
	});

	feed.run();
});