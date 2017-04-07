	ready(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

    // get the current scroll Position
    // var scrollPos = controller.scrollPos();

    // set a new scroll position calculation method
    // controller.scrollPos(function () {
        // return this.info("vertical") ? -circle.y : -circle.x
        // });

		// build tween
		var tween = TweenMax.to("#target", 1, {rotation: 360, ease: Linear.easeNone});

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500})
						.setTween(tween)
						.addTo(controller);

	});
