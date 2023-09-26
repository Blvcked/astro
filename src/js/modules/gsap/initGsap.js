import { gsap, ScrollTrigger, ScrollSmoother } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function initGsap() {
	ScrollTrigger.normalizeScroll(true);
	ScrollSmoother.create({
		effects: true,
	});
}
