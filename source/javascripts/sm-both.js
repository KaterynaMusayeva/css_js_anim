	ready(function () { // wait for document ready

		// init controller
		var controller = new ScrollMagic.Controller();

		// build tween
		var tween = TweenMax.to("#target-bar-both",1 , {width: "100%", ease:Linear.easeNone});

		//build scene
		var scene = new ScrollMagic.Scene({duration: $('.all-sections-both').innerHeight()-window.innerHeight})
						.setTween(tween)
						.addTo(controller);
		});
