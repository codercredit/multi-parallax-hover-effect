// Loop over all .parallax-wrap containers
document.querySelectorAll('.parallax-wrap').forEach(function (wrap) {
  wrap.addEventListener('mousemove', function (event) {
    const elements = wrap.querySelectorAll('.parallax-element');
    elements.forEach(function (element) {
      const move = parseFloat(element.dataset.move) || 20; // default to 20 if not set
      applyParallaxEffect(event, wrap, element, move);
    });
  });

  wrap.addEventListener('mouseleave', function () {
    const elements = wrap.querySelectorAll('.parallax-element');
    elements.forEach(function (element) {
      gsap.to(element, {
        duration: 0.3,
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });
});

/**
 * Applies parallax movement to a target element based on cursor position
 */
function applyParallaxEffect(event, container, target, intensity) {
  const rect = container.getBoundingClientRect();
  const relX = event.clientX - rect.left;
  const relY = event.clientY - rect.top;

  const moveX = ((relX - rect.width / 2) / rect.width) * intensity;
  const moveY = ((relY - rect.height / 2) / rect.height) * intensity;

  gsap.to(target, {
    duration: 0.3,
    x: moveX,
    y: moveY,
    ease: Power2.easeOut,
  });
}
