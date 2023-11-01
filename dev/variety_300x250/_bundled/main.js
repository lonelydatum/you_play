(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _proline = require("./proline");

var _helpersHelpersJs = require("./helpers/helpers.js");

var _ypy_fxJs = require('./ypy_fx.js');

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

function olg_ypy() {
	var tl = new TimelineMax();

	tl.add("done");
	tl.add((0, _proline.olg)(), "done");
	tl.add((0, _ypy_fxJs.ypyScroll)(), "done");
	tl.from([".cta", ".legal"], { opacity: 0, duration: .3 }, "done+=.7");
	return tl;
}

exports.init = init;
exports.olg = _proline.olg;
exports.bannerSize = bannerSize;
exports.olg_ypy = olg_ypy;

},{"./helpers/helpers.js":2,"./proline":3,"./ypy_fx.js":5}],2:[function(require,module,exports){
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
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _commonJs = require('./common.js');

document.getElementById("legalContent").innerHTML = "\n© 2023 IGT.<br/>\n© 2023 Evolution. All Rights Reserved.<br/>\n<br/>\nMust be 19 years of age or older and a resident of Ontario, located in the province to play\nonline casino games. Games and screens may not appear as shown. Odds vary by game.\n<br/>\nTerms and conditions apply.";
var READ = {
	t1: 2.3,
	t2: 2.6
};

function start() {
	var tl = (0, _commonJs.init)();

	var TRANSFORMORIGIN = { x: 158, y: 154 };
	var rings = [{ id: ".ring1", offsetY: -22, offsetX: 0 }, { id: ".ring2", offsetY: -22, offsetX: 0 }, { id: ".ring3", offsetY: -22, offsetX: 0 }, { id: ".ring4", offsetY: -22, offsetX: 0 }, { id: ".ring5", offsetY: -22, offsetX: 0 }, { id: ".ypy-1", offsetY: -22, offsetX: 0 }, { id: ".ypy-2", offsetY: -22, offsetX: 0 }, { id: ".ypy-3", offsetY: -22, offsetX: 0 }];

	function transformOrigin(obj) {
		var _ref = obj.to || TRANSFORMORIGIN;

		var x = _ref.x;
		var y = _ref.y;

		var offsetX = obj.offsetX || 0;
		var offsetY = obj.offsetY || 0;
		tl.set(obj.id, { transformOrigin: x * 2 + "px " + y * 2 + "px", x: -x + offsetX, y: -y + offsetY, scale: .5, rotate: 0 });
	}

	rings.map(function (a) {
		return transformOrigin(a);
	});

	var rotate = 180;
	tl.add("arcs-in");
	tl.from(".ring1", { rotate: rotate, duration: 1.3 }, "arcs-in+=0");
	tl.from(".ring2", { rotate: -rotate, duration: 1.3 }, "arcs-in+=0");
	tl.from(".ring3", { rotate: rotate, duration: 1.3 }, "arcs-in+=0");
	tl.from(".ring4", { rotate: -rotate, duration: 1.3 }, "arcs-in+=0");
	tl.from(".ring5", { rotate: rotate, duration: 1.3 }, "arcs-in+=0");

	tl.from(".ypy-1", { opacity: 0, rotate: 120, duration: 1.5 }, "arcs-in+=0");
	tl.from(".ypy-2", { opacity: 0, rotate: -120, duration: 1.5 }, "arcs-in+=0");
	tl.from(".ypy-3", { opacity: 0, rotate: 120, duration: 1.5 }, "arcs-in+=0");

	// tl.to(".devices", {x:12, y:-7, scale:.46, duration:.5}, "tl")
	tl.from(".t1", { opacity: 0, duration: .5 }, "arcs-in+=1");

	tl.to(".t1", { opacity: 0, duration: .3 }, "+=" + READ.t1);
	tl.from(".t2", { opacity: 0, duration: .3 });

	tl.to(".t2", { opacity: 0, duration: .3 }, "+=" + READ.t2);

	tl.add("end");
	tl.to(".devices", { y: -21, scale: .46, duration: .3 }, "end");
	tl.from(".url", { opacity: 0, duration: .3 }, "end");
	tl.to([".ypy-1", ".ypy-2", ".ypy-3"], { opacity: 0, duration: .3 }, "end");

	tl.add((0, _commonJs.olg_ypy)(), "+=.3");
}

exports.start = start;

},{"./common.js":1}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function initYPY() {
	var tl = new TimelineMax();
	// tl.set(".ypy-all", {opacity:0})
	for (var i = 1; i < 11; i++) {
		tl.set(".ypy-all .ypy_all_" + i + " img", { y: -220 });
	}
}
function ypyScroll() {
	var tl = new TimelineMax();
	// tl.set(".ypy-all", {opacity:0})
	tl.add("spin");
	for (var i = 1; i < 11; i++) {
		var y = i * 20;
		var duration = i / 11 * 1.6;

		tl.to(".ypy-all .ypy_all_" + i + " img", { ease: "back.inOut", y: (i - 1) * -20 - 2, duration: duration }, "spin");
	}
	return tl;
}

initYPY();

exports.initYPY = initYPY;
exports.ypyScroll = ypyScroll;

},{}],6:[function(require,module,exports){
'use strict';

var _commonJsVarietyJs = require('../../_common/js/variety.js');

(0, _commonJsVarietyJs.start)();

},{"../../_common/js/variety.js":4}]},{},[6])


//# sourceMappingURL=main.js.map
