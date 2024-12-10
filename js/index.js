document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

	gsap.to('#panel-1', {
		xPercent: -20,
		ease: 'none',
		scrollTrigger: {
			trigger: '#panel-1',
			scrub: 0.1
		}
	});

	gsap.to('#panel-2', {
		xPercent: 20,
		ease: 'none',
		scrollTrigger: {
			trigger: '#panel-2',
			scrub: 0.1
		}
	});
});
