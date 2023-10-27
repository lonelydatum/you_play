import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});


const {w, h} = bannerSize



function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})

	return tl
}





function standard(){	
	const tl = init()	
	
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
	tl.to(".hero-all", {ease:"power1.out", x:0, scale:.4, y:-45, duration:.3}, "scale")
	tl.from([".footer-bg", ".t1"], {ease:"power1.out",  y:200, duration:.3}, "scale")

	tl.add("end", "+=2")
	tl.set(".frame2", {opacity:1}, "end")
	tl.to(".frame1", { y:-250, duration:.5}, "end")
	tl.to(".frame2", { y:0, duration:.5}, "end")
	
	tl.add("end-bars")

	
	tl.from(".frame2 .bottom.c1", {y:250, duration:.5}, "end-bars+=.3")
	tl.from(".frame2 .top.c2", {y:-250, duration:.5}, "end-bars+=.3")
	tl.from(".frame2 .bottom.c3", {y:250, duration:.5}, "end-bars+=.3")
	tl.from(".frame2 .top.c4", {y:-250, duration:.5}, "end-bars+=.6")
	tl.from(".frame2 .top.c5", {y:-250, duration:.5}, "end-bars+=.9")
	tl.from(".frame2 .top.c6", {y:-250, duration:.5}, "end-bars+=.2")
	tl.from(".frame2 .bottom.c7", {y:250, duration:.5}, "end-bars+=.8")
	tl.from(".frame2 .top.c8", {y:-250, duration:.5}, "end-bars+=.5")
	tl.from(".frame2 .bottom.c9", {y:250, duration:.5}, "end-bars+=.8")



	tl.from(".cta", {opacity:0, duration:.5}, "end-bars+=.3")


	// tl.play("end")
	tl.add(olg(), "-=.3")



	return tl
}

function b_970x250(){
	standard()
}

function b_160x600(){
	standard()
}

function b_300x250(){		
	standard()
}

function b_300x600(){		
	standard()
}


function b_320x50(){
	


}

function b_728x90(text1){
	
}

export { init, b_300x250 }