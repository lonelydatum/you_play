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
	tl.from(".cta", { opacity: 0, duration: .3 }, "done+=.7");
	return tl;
}

exports.init = init;
exports.olg = _proline.olg;
exports.bannerSize = bannerSize;
exports.olg_ypy = olg_ypy;

},{"./helpers/helpers.js":2,"./proline":4,"./ypy_fx.js":5}],2:[function(require,module,exports){
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

var _commonJs = require('./common.js');

document.getElementById("legalContent").innerHTML = "\n© 2023 IGT.<br/>\n© 2023 Evolution. All Rights Reserved.<br/>\n© 2023 Light &amp; Wonder, Inc. All Rights Reserved.<br/>\n<br/>\nMust be 19 years of age or older and a resident of Ontario, located in the province to play\nonline casino games. Games and screens may not appear as shown. Odds vary by game. Terms and conditions apply.\n<br/>\n*Voted most trusted Online Casino by Ontario shoppers based on the 2023 Brandspark® Canadian Trust Study.";

var READ = {
	t1: 2.2,
	t2: 2
};

function start() {

	var tl = (0, _commonJs.init)();

	var TRANSFORMORIGIN = { x: 150, y: 195 };
	var rings = [{ id: ".ring1_1" }, { id: ".ring1_2" }, { id: ".ring1_3" }, { id: ".ring1_4", offsetX: -5 }, { id: ".ring1_5" }, { id: ".ypy1-1" }, { id: ".ypy1-2" }, { id: ".ypy1-3" }];

	// {id:".o-1", to:{x:150, y:133}, offsetY:0},
	// {id:".o-2", to:{x:150, y:133}, offsetY:0},
	// {id:".o-3", to:{x:150, y:150}, offsetY:-20},		
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
	tl.from(".ring1_1", { rotate: rotate, duration: 1 }, "arcs-in+=0");
	tl.from(".ring1_2", { rotate: -rotate, duration: 1 }, "arcs-in+=0.3");
	tl.from(".ring1_3", { rotate: rotate, duration: 1.3 }, "arcs-in+=0");
	tl.from(".ring1_4", { rotate: -rotate, duration: 1 }, "arcs-in+=0");
	tl.from(".ring1_5", { rotate: rotate, duration: 1.1 }, "arcs-in+=0.2");
	tl.from(".ypy1-1", { opacity: 0, rotate: -rotate, duration: .5 }, "arcs-in+=0.6");
	tl.from(".ypy1-2", { opacity: 0, rotate: rotate, duration: .5 }, "arcs-in+=.8");
	tl.from(".ypy1-3", { opacity: 0, rotate: -rotate, duration: .5 }, "arcs-in+=1");

	tl.add("shrink", "+=.6");
	tl.to(".hero", { y: -50, scale: .70, duration: .5 }, "shrink");
	tl.from(".footer-bar", { y: 250, duration: .5 }, "shrink");
	tl.from(".t1", { y: 250, duration: .5 }, "shrink");

	tl.to([".ring"], { scale: .4, y: "-=30", duration: .5 }, "shrink");
	tl.to(".ypy1-1", { scale: .4, y: "-=28", rotate: 6, duration: .5 }, "shrink");
	tl.to(".ypy1-2", { scale: .4, x: "+=43", y: "-=30", rotate: -40, duration: .5 }, "shrink");
	tl.to(".ypy1-3", { scale: .4, x: "+=20", y: "-=50", rotate: 0, duration: .5 }, "shrink");

	tl.to(".t1", { opacity: 0, duration: .3 }, "+=" + READ.t1);
	tl.from([".t2", ".brand-logo"], { opacity: 0, duration: .3 });

	tl.add("end", "+=" + READ.t2);
	tl.to(".frame1", { y: "-=250", duration: .5 }, "end");
	tl.set(".frame2", { opacity: 1 }, "end");
	tl.from(".frame2", { y: "+=250", duration: .5 }, "end");

	tl.from(".url", { opacity: 0, duration: .3 });
	// tl.add("end-spin")
	// tl.from(".o-1", {opacity:0, rotate:-270, duration:1.7}, "end-spin")
	// tl.from(".o-2", {opacity:0, rotate:270, duration:1.3}, "end-spin")
	// tl.from(".o-3", {opacity:0, rotate:-270, duration:1.1}, "end-spin")

	tl.add((0, _commonJs.olg_ypy)(), "-=.3");
}

exports.start = start;

},{"./common.js":1}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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
		console.log(y);
		tl.to(".ypy-all .ypy_all_" + i + " img", { ease: "back.inOut", y: (i - 1) * -20 - 2, duration: duration }, "spin");
	}
	return tl;
}

initYPY();

exports.initYPY = initYPY;
exports.ypyScroll = ypyScroll;

},{}],6:[function(require,module,exports){
'use strict';

var _commonJsPlayer_supportJs = require('../../_common/js/player_support.js');

(0, _commonJsPlayer_supportJs.start)();

},{"../../_common/js/player_support.js":3}]},{},[6])


//# sourceMappingURL=main.js.map
