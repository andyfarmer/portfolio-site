document.addEventListener("DOMContentLoaded", (event) => {
	let mm = gsap.matchMedia();
	let mobileView = window.matchMedia('(max-width: 600px)');

	gsap.registerPlugin(ScrollTrigger);

	const speed = mobileView.matches ? 30 : 15;

	console.log(speed);

	gsap.to('#panel-1', {
		xPercent: (0 - speed),
		ease: 'none',
		scrollTrigger: {
			trigger: '#panel-1',
			scrub: true
		}
	});

	gsap.to('#panel-2', {
		xPercent: speed,
		ease: 'none',
		scrollTrigger: {
			trigger: '#panel-2',
			scrub: true
		}
	});

	mm.add('(min-width: 1025px)', () => {
		gsap.from('.b-skillchart__bar', {
			opacity: 0,
			height: 0,
			duration: 1.3,
			stagger: 0.05,
			scrollTrigger: '.b-skillchart__label--2'
		});
	});

	mm.add('(max-width: 1024px)', () => {
		gsap.from('.b-skillchart__bar', {
			opacity: 0,
			width: 0,
			duration: 1.3,
			stagger: 0.05,
			scrollTrigger: '#bar-mobile-trigger',
			clearProps: 'all'
		});
	});

});
