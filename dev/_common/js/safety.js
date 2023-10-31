import {init, olg, bannerSize} from './common.js'


import {initYPY, ypyScroll} from './ypy_fx.js'

const READ = {
	t1: 2.3,
	t2: 2.6
}

function rain(){
	const tl = new TimelineMax()
	tl.from(".ypy-text-1", {duration:1.5, y:`-=${bannerSize.h}`, skewX:70, skewY:70, rotate:"+=160"}, .1)
	tl.from(".ypy-text-2", {duration:1.5, y:`-=${bannerSize.h}`, skewX:70, skewY:70, rotate:"+=160"}, .3)
	tl.from(".ypy-text-3", {duration:1.5, y:`-=${bannerSize.h}`, skewX:70, skewY:70, rotate:"+=160"}, 0)

	for(let i=1;i<9;i++){
		const percent = i/9
		const rotate = 120+(30 * percent)
		const delay = percent
		console.log(percent);
		const skew = 40 + (30*percent)
		tl.from(`.coin-${i}`, {duration:1.7, y:-bannerSize.h, skewX:skew, skewY:skew, rotate:`+=${rotate}`}, percent)	
	}
	return tl
}

function start(){
	const tl = init()
	initYPY()

	rain()

	tl.add("start", 3)
	tl.from(".bg", {y:300, duration:1}, "start")

	tl.from(".t1", {opacity:0, duration:.3})
	tl.to(".t1", {opacity:0, duration:.3}, `+=${READ.t1}`)
	tl.from(".t2", {opacity:0, duration:.3})

	tl.add("bye", `+=${READ.t2}`)
	tl.to([".t2", ".ypy-text"], {opacity:0, duration:.3}, "bye")

	tl.add("f2")
	tl.to(".bg", {y:0, duration:.4}, `f2`)
	tl.from(".devices", {opacity:0, duration:.3})

	tl.from([".url", ".buttons"], {opacity:0, duration:.3})

	tl.add(ypyScroll())
	tl.from(".cta", {opacity:0, duration:1})
	tl.add(olg(), "olg")


}



export { start }