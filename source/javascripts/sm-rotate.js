	ready(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// build tween
		var tween = TweenMax.to("#target", 1, {rotation: 360, ease: Linear.easeNone});

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 400})
						.setTween(tween)
						.addTo(controller);

	});
