import { gsap, ScrollTrigger, ScrollSmoother } from "gsap/all";

export function killTriggers() {
	const triggers = ScrollTrigger.getAll();
	triggers.forEach((trigger) => trigger.kill());

	if (window.DEBUG) {
		console.log(`${triggers.length} ScrollTriggers have been killed.`);
	}
}

export function updateTriggers() {
	ScrollTrigger.update();
	if (window.DEBUG) {
		console.log(`Triggers have been updated.`);
	}
}

export function updateEffects() {
	const smoother = ScrollSmoother.get();
	smoother.effects(`[data-speed], [data-lag]`);
}

export function scrollTo(
	target,
	smooth = true,
	position = `top ${gsap.getProperty(":root", "--siteNavbar-height")}`
) {
	const smoother = ScrollSmoother.get();

	if (typeof target === "number") {
		// If target is a number, treat it as a pixel position
		smoother.scrollTo(target, smooth);
	} else if (target instanceof Element) {
		// If target is a DOM element, scroll to it
		smoother.scrollTo(target, smooth, position);
	} else {
		console.warn("Invalid target for scrollTo: ", target);
	}
}
