import {init, olg, olg_ypy} from './common.js'

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

function start(){

	const tl = init()
	

	const TRANSFORMORIGIN = {x:150, y:195}
	const rings = [
		{id:".ring1_1"},
		{id:".ring1_2"},
		{id:".ring1_3"},
		{id:".ring1_4", offsetX:-5},
		{id:".ring1_5"},
		
		{id:".ypy1-1"},
		{id:".ypy1-2"},
		{id:".ypy1-3"},
		// {id:".o-1", to:{x:150, y:133}, offsetY:0},
		// {id:".o-2", to:{x:150, y:133}, offsetY:0},
		// {id:".o-3", to:{x:150, y:150}, offsetY:-20},		
	]

	function transformOrigin(obj){		
		const {x, y } = obj.to || TRANSFORMORIGIN
		const offsetX = obj.offsetX || 0 
		const offsetY = obj.offsetY || 0 
		tl.set(obj.id, {transformOrigin:`${x*2}px ${y*2}px`, x:-x+offsetX, y:-y+offsetY, scale:.5, rotate:0})
	}

	rings.map(a=>transformOrigin(a))

	const rotate = 180
	tl.add("arcs-in")
	tl.from(".ring1_1", {rotate:rotate, duration:1}, "arcs-in+=0")
	tl.from(".ring1_2", {rotate:-rotate, duration:1}, "arcs-in+=0.3")
	tl.from(".ring1_3", {rotate:rotate, duration:1.3}, "arcs-in+=0")
	tl.from(".ring1_4", {rotate:-rotate, duration:1}, "arcs-in+=0")
	tl.from(".ring1_5", {rotate:rotate, duration:1.1}, "arcs-in+=0.2")
	tl.from(".ypy1-1", {opacity:0, rotate:-rotate, duration:.5}, "arcs-in+=0.6")
	tl.from(".ypy1-2", {opacity:0, rotate:rotate, duration:.5}, "arcs-in+=.8")
	tl.from(".ypy1-3", {opacity:0, rotate:-rotate, duration:.5}, "arcs-in+=1")

	tl.add("shrink", "+=.6")
	tl.to(".hero", {y:-50, scale:.70, duration:.5}, "shrink")
	tl.from(".footer-bar", {y:250, duration:.5}, "shrink")
	tl.from(".t1", {y:250, duration:.5}, "shrink")
	
	tl.to([".ring"], {scale:.4, y:"-=30", duration:.5}, "shrink")
	tl.to(".ypy1-1", {scale:.4, y:"-=28", rotate:6, duration:.5}, "shrink")
	tl.to(".ypy1-2", {scale:.4, x:"+=43", y:"-=30", rotate:-40, duration:.5}, "shrink")
	tl.to(".ypy1-3", {scale:.4, x:"+=20", y:"-=50", rotate:0, duration:.5}, "shrink")

	tl.to(".t1", {opacity:0, duration:.3}, `+=${READ.t1}`)
	tl.from([".t2", ".brand-logo"], {opacity:0, duration:.3})

	tl.add("end", `+=${READ.t2}`)
	tl.to(".frame1", {y:"-=250", duration:.5}, "end")
	tl.set(".frame2", {opacity:1}, "end")
	tl.from(".frame2", {y:"+=250", duration:.5}, "end")

	tl.from(".url", {opacity:0, duration:.3})
	// tl.add("end-spin")
	// tl.from(".o-1", {opacity:0, rotate:-270, duration:1.7}, "end-spin")
	// tl.from(".o-2", {opacity:0, rotate:270, duration:1.3}, "end-spin")
	// tl.from(".o-3", {opacity:0, rotate:-270, duration:1.1}, "end-spin")
	
	
	
	tl.add(olg_ypy(), "-=.3")
	
}




export {start}