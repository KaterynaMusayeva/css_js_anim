	ready(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// build tween
		var tween = TweenMax.to("#target-rotate", 1, {rotation: 360, ease: Linear.easeNone});

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger-rotate", duration: 600})
						.setTween(tween)
						.addTo(controller);

	});
