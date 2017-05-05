function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {

  var controller = new ScrollMagic.Controller();

  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger-element-slide-out"})
  // var scene = new ScrollMagic.Scene({offset: 100})
          // trigger animation by adding a css class
          .setClassToggle("#animate1, #animate2", "transformation")
          .addTo(controller);

});
