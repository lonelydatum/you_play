(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _proline = require("./proline");

var _helpersHelpersJs = require("./helpers/helpers.js");

var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var w = bannerSize.w;
var h = bannerSize.h;

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });
	tl.set(".frame1", { opacity: 1 });

	return tl;
}

function b_970x250() {
	standard();
}

function b_160x600() {
	standard();
}

function b_300x250() {
	standard();
}

function b_300x600() {
	standard();
}

function b_320x50() {}

function b_728x90(text1) {}

exports.init = init;
exports.olg = _proline.olg;

},{"./helpers/helpers.js":2,"./proline":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function origin(el, x, y) {
	TweenLite.set(el, { transformOrigin: x + "px " + y + "px", x: -x / 2 + "px", y: -y / 2 + "px", scale: .5 });
}

exports.origin = origin;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });
    var tl = new TimelineMax();

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _commonJs = require('./common.js');

function start() {
	var tl = (0, _commonJs.init)();

	tl.add("bars");
	tl.from(".frame1 .top.b2", { y: -250, duration: .5 }, "bars+=.3");
	tl.from(".frame1 .top.b4", { y: -250, duration: .5 }, "bars+=.6");
	tl.from(".frame1 .top.b5", { y: -250, duration: .5 }, "bars+=.9");
	tl.from(".frame1 .top.b6", { y: -250, duration: .5 }, "bars+=.2");
	tl.from(".frame1 .top.b7", { y: -250, duration: .5 }, "bars+=.8");
	tl.from(".frame1 .top.b8", { y: -250, duration: .5 }, "bars+=.5");
	tl.from(".frame1 .bottom.b1", { y: 250, duration: .5 }, "bars+=1");
	tl.from(".frame1 .bottom.b3", { y: 250, duration: .5 }, "bars+=.5");

	tl.from(".ypy-you1", { y: -100, duration: .4 }, "bars+=.5");
	tl.from(".ypy-play", { y: -100, duration: .4 }, "bars+=.8");
	tl.from(".ypy-you2", { y: -100, duration: .4 }, "bars+=1");

	tl.add("scale", "+=.3");
	tl.to(".frame1 .top.b5", { opacity: .3, y: "-=30", duration: .5 }, "scale");
	tl.to(".hero-all", { ease: "power1.out", x: 0, scale: .4, y: -45, duration: .3 }, "scale");
	tl.from([".footer-bg", ".t1"], { ease: "power1.out", y: 200, duration: .3 }, "scale");

	tl.add("end", "+=2");
	tl.set(".frame2", { opacity: 1 }, "end");
	tl.to(".frame1", { y: -250, duration: .5 }, "end");
	tl.set(".olg", { opacity: 0 }, "end");
	tl.to(".frame2", { y: 0, duration: .5 }, "end");

	tl.add("end-bars");

	tl.from(".frame2 .bottom.c1", { y: 250, duration: .5 }, "end-bars+=.3");
	tl.from(".frame2 .top.c2", { y: -250, duration: .5 }, "end-bars+=.3");
	tl.from(".frame2 .bottom.c3", { y: 250, duration: .5 }, "end-bars+=.3");
	tl.from(".frame2 .top.c4", { y: -250, duration: .5 }, "end-bars+=.6");
	tl.from(".frame2 .top.c5", { y: -250, duration: .5 }, "end-bars+=.9");
	tl.from(".frame2 .top.c6", { y: -250, duration: .5 }, "end-bars+=.2");
	tl.from(".frame2 .bottom.c7", { y: 250, duration: .5 }, "end-bars+=.8");
	tl.from(".frame2 .top.c8", { y: -250, duration: .5 }, "end-bars+=.5");
	tl.from(".frame2 .bottom.c9", { y: 250, duration: .5 }, "end-bars+=.8");

	tl.from(".cta", { opacity: 0, duration: .5 }, "end-bars+=.3");

	// tl.play("end")
	tl.add((0, _commonJs.olg)(), "-=.3");

	return tl;
}

exports.start = start;

},{"./common.js":1}],5:[function(require,module,exports){
'use strict';

var _commonJsYpyJs = require('../../_common/js/ypy.js');

(0, _commonJsYpyJs.start)();

},{"../../_common/js/ypy.js":4}]},{},[5])


//# sourceMappingURL=main.js.map
