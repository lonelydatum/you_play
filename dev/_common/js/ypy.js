import {init, olg} from './common.js'


function initYPY(){
	const tl = new TimelineMax()
	for(let i=1;i<11;i++){
		tl.set(`.ypy-all .ypy_all_${i} img`, {y:-220})	
	}
}
function ypyScroll(){
	const tl = new TimelineMax()
	tl.add("spin")
	for(let i=1;i<11;i++){
		const y = i*20
		const duration = i/11 * 1.6
		
		tl.to(`.ypy-all .ypy_all_${i} img`, {ease:"back.inOut", y:((i-1)*-20)-2, duration}, "spin")	
	}

	return tl
	


	
}

function start(){	
	const tl = init()	
	initYPY()
	
	tl.add("bars")
	tl.from(".frame1 .top.b2", {y:-250, duration:.5}, "bars+=.3")
	tl.from(".frame1 .top.b4", {y:-250, duration:.5}, "bars+=.6")
	tl.from(".frame1 .top.b5", {y:-250, duration:.5}, "bars+=.9")
	tl.from(".frame1 .top.b6", {y:-250, duration:.5}, "bars+=.2")
	tl.from(".frame1 .top.b7", {y:-250, duration:.5}, "bars+=.8")
	tl.from(".frame1 .top.b8", {y:-250, duration:.5}, "bars+=.5")
	tl.from(".frame1 .bottom.b1", {y:250, duration:.5}, "bars+=1")
	tl.from(".frame1 .bottom.b3", {y:250, duration:.5}, "bars+=.5")

	tl.from(".ypy-you1", {y:-100, duration:.4}, "bars+=.5")
	tl.from(".ypy-play", {y:-100, duration:.4}, "bars+=.8")
	tl.from(".ypy-you2", {y:-100, duration:.4}, "bars+=1")

	tl.add("scale", "+=.3")
	tl.to(".frame1 .top.b5", {opacity:.3, y:"-=30", duration:.5}, "scale")
	tl.to(".hero-all", {ease:"power1.out", x:0, scale:.4, y:-45, duration:.3}, "scale")
	tl.from([".footer-bg", ".t1"], {ease:"power1.out",  y:200, duration:.3}, "scale")

	tl.add("end", "+=2")
	tl.set(".frame2", {opacity:1}, "end")
	tl.to(".frame1", { y:-250, duration:.5}, "end")
	tl.set(".olg", { opacity:0}, "end")
	tl.to(".frame2", { y:0, duration:.5}, "end")
	
	tl.add("end-bars")

	
	tl.from(".frame2 .bottom.c1", {y:250, duration:.5}, "end-bars+=.1")
	tl.from(".frame2 .top.c2", {y:-250, duration:.5}, "end-bars+=.3")
	tl.from(".frame2 .bottom.c3", {y:250, duration:.5}, "end-bars+=.3")
	tl.from(".frame2 .top.c4", {y:-250, duration:.5}, "end-bars+=.3")
	tl.from(".frame2 .top.c5", {y:-250, duration:.5}, "end-bars+=.2")
	tl.from(".frame2 .top.c6", {y:-250, duration:.5}, "end-bars+=.2")
	tl.from(".frame2 .bottom.c7", {y:250, duration:.5}, "end-bars+=.3")
	tl.from(".frame2 .top.c8", {y:-250, duration:.5}, "end-bars+=0")
	tl.from(".frame2 .bottom.c9", {y:250, duration:.5}, "end-bars+=.1")


	tl.add("scroller", "-=.5")
	tl.from(".url", {opacity:0, duration:.3}, "scroller")
	tl.add(ypyScroll(), "scroller")
	
	tl.from(".cta", {opacity:0, duration:.3}, "+=.3")


	// tl.play("end-bars")
	
	tl.add(olg(), "-=.3")



	return tl
}

export { start }