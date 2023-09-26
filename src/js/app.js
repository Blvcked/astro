// ======================
// GLOBALS
// ======================

window.DEBUG = true;

// ======================
// IMPORTS
// ======================

// BARBA
// import barba from "@barba/core";
import initBarba from "./modules/barba/initBarba";

// GSAP
import initGsap from "./modules/gsap/initGsap";

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
