// ======================
// GLOBALS
// ======================

window.DEBUG = true;

// ======================
// IMPORTS
// ======================

// GSAP
import initGsap from "./modules/gsap/initGsap";

// UTILS
import FPSMeter from "./modules/fpsMeter.js";

// ======================
// EVENT LISTENERS
// ======================

// DOC Ready
function documentReady() {
	new FPSMeter();
	initGsap();
}
document.addEventListener(`DOMContentLoaded`, documentReady, false);

// WINDOW Load
// function windowLoad() {}
// window.addEventListener(`load`, windowLoad, false);
