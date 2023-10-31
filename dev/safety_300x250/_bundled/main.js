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
exports.bannerSize = bannerSize;

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

    var tl = new TimelineMax({ onStart: function onStart() {
            TweenLite.set(".olg-static", { opacity: 0 });
        } });

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _commonJs = require('./common.js');

var _ypy_fxJs = require('./ypy_fx.js');

var READ = {
	t1: 2.3,
	t2: 2.6
};

function rain() {
	var tl = new TimelineMax();
	tl.from(".ypy-text-1", { duration: 1.5, y: '-=' + _commonJs.bannerSize.h, skewX: 70, skewY: 70, rotate: "+=160" }, .1);
	tl.from(".ypy-text-2", { duration: 1.5, y: '-=' + _commonJs.bannerSize.h, skewX: 70, skewY: 70, rotate: "+=160" }, .3);
	tl.from(".ypy-text-3", { duration: 1.5, y: '-=' + _commonJs.bannerSize.h, skewX: 70, skewY: 70, rotate: "+=160" }, 0);

	for (var i = 1; i < 9; i++) {
		var percent = i / 9;
		var rotate = 120 + 30 * percent;
		var delay = percent;
		console.log(percent);
		var skew = 40 + 30 * percent;
		tl.from('.coin-' + i, { duration: 1.7, y: -_commonJs.bannerSize.h, skewX: skew, skewY: skew, rotate: '+=' + rotate }, percent);
	}
	return tl;
}

function start() {
	var tl = (0, _commonJs.init)();
	(0, _ypy_fxJs.initYPY)();

	rain();

	tl.add("start", 3);
	tl.from(".bg", { y: 300, duration: 1 }, "start");

	tl.from(".t1", { opacity: 0, duration: .3 });
	tl.to(".t1", { opacity: 0, duration: .3 }, '+=' + READ.t1);
	tl.from(".t2", { opacity: 0, duration: .3 });

	tl.add("bye", '+=' + READ.t2);
	tl.to([".t2", ".ypy-text"], { opacity: 0, duration: .3 }, "bye");

	tl.add("f2");
	tl.to(".bg", { y: 0, duration: .4 }, 'f2');
	tl.from(".devices", { opacity: 0, duration: .3 });

	tl.from([".url", ".buttons"], { opacity: 0, duration: .3 });

	tl.add((0, _ypy_fxJs.ypyScroll)());
	tl.from(".cta", { opacity: 0, duration: 1 });
	tl.add((0, _commonJs.olg)(), "olg");
}

exports.start = start;

},{"./common.js":1,"./ypy_fx.js":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function initYPY() {
	var tl = new TimelineMax();
	for (var i = 1; i < 11; i++) {
		tl.set(".ypy-all .ypy_all_" + i + " img", { y: -220 });
	}
}
function ypyScroll() {
	var tl = new TimelineMax();
	tl.add("spin");
	for (var i = 1; i < 11; i++) {
		var y = i * 20;
		var duration = i / 11 * 1.6;

		tl.to(".ypy-all .ypy_all_" + i + " img", { ease: "back.inOut", y: (i - 1) * -20 - 2, duration: duration }, "spin");
	}
	return tl;
}

exports.initYPY = initYPY;
exports.ypyScroll = ypyScroll;

},{}],6:[function(require,module,exports){
'use strict';

var _commonJsSafetyJs = require('../../_common/js/safety.js');

(0, _commonJsSafetyJs.start)();

},{"../../_common/js/safety.js":4}]},{},[6])


//# sourceMappingURL=main.js.map
