// ======================
// GLOBALS
// ======================

window.DEBUG = true;

// ======================
// IMPORTS
// ======================

// BARBA
import barba from "@barba/core";
import initBarba from "./modules/barba/initBarba";

// GSAP
import initGsap from "./modules/gsap/initGsap";
import {
	killTriggers,
	updateTriggers,
	updateEffects,
	scrollTo,
} from "./modules/gsap/gsapUtils";

// UTILS
import FPSMeter from "./modules/fpsMeter.js";

// ======================
// EVENT LISTENERS
// ======================

// DOC Ready
function documentReady() {
	// new FPSMeter();
	initBarba();
	initGsap();
}
document.addEventListener(`DOMContentLoaded`, documentReady, false);

// WINDOW Load
// function windowLoad() {}
// window.addEventListener(`load`, windowLoad, false);

// ======================
// BARBA HOOKS
// ======================

barba.hooks.afterLeave(() => {
	killTriggers();
});

barba.hooks.after(() => {
	updateEffects();
	updateTriggers();
	scrollTo(0, false);
});
