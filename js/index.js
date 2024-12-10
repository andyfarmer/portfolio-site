document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

	gsap.to('#panel-1', {
		xPercent: -15,
		ease: 'none',
		scrollTrigger: {
			trigger: '#panel-1',
			scrub: 0.1
		}
	});

	gsap.to('#panel-2', {
		xPercent: 15,
		ease: 'none',
		scrollTrigger: {
			trigger: '#panel-2',
			scrub: 0.1
		}
	});

	gsap.from('.b-skillchart__bar', {
		opacity: 0,
		height: 0,
		duration: 1.3,
		stagger: 0.05,
		scrollTrigger: '.b-skillchart__label--2'
	});

});
