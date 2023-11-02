import {init, olg, olg_ypy, bannerSize} from './common.js'

document.getElementById("legalContent").innerHTML = `
© 2023 IGT.<br/>
© 2023 Evolution. All Rights Reserved.<br/>
© 2023 Light &amp; Wonder, Inc. All Rights Reserved.<br/>
<br/>
Must be 19 years of age or older and a resident of Ontario, located in the province to play
online casino games. Games and screens may not appear as shown. Odds vary by game. Terms and conditions apply.
<br/>
*Voted most trusted Online Casino by Ontario shoppers based on the 2023 Brandspark® Canadian Trust Study.`

const READ = {
	t1: 2.2,
	t2: 2
}

function startBasic({shiftY}){
	const tl = init()
	
	const rotate = 180
	tl.add("arcs-in")
	tl.from(".ring1_1", {rotate:rotate, duration:1}, "arcs-in+=0")
	tl.from(".ring1_2", {rotate:-rotate, duration:1}, "arcs-in+=0.3")
	tl.from(".ring1_3", {rotate:rotate, duration:1.3}, "arcs-in+=0")
	
	tl.from(".ypy1-1", {opacity:0, rotate:-rotate, duration:.5}, "arcs-in+=0.6")
	tl.from(".ypy1-2", {opacity:0, rotate:rotate, duration:.5}, "arcs-in+=.8")
	tl.from(".ypy1-3", {opacity:0, rotate:-rotate, duration:.5}, "arcs-in+=1")
	
	tl.add("shrink", "+=.6")
	tl.to(".hero", {x:0, y:0, scale:.50, duration:.5}, "shrink")
	tl.from(".footer-bar", {y:bannerSize.h, duration:.5}, "shrink")
	tl.from(".t1", {y:250, duration:.5}, "shrink")


	
	tl.to(".ring", {y:`-=${shiftY}`, duration:.4}, "shrink")
	

	tl.to(".t1", {opacity:0, duration:.3}, `+=${READ.t1}`)
	tl.from([".t2", ".brand-logo"], {opacity:0, duration:.3})

	tl.add("end", `+=${READ.t2}`)
	tl.to(".frame1", {y:`-=${bannerSize.h}`, duration:.5}, "end")
	tl.set(".frame2", {opacity:1}, "end")
	tl.from(".frame2", {y:`+=${bannerSize.h}`, duration:.5}, "end")

	tl.from(".url", {opacity:0, duration:.3})
	
	
	
	
	tl.add(olg_ypy(), "-=.3")

	return tl
	
}




export {startBasic, READ}