import {init, olg} from './common.js'
import {initYPY, ypyScroll} from './ypy_fx.js'

function start(){

	const tl = init()
	initYPY()

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
		{id:".o-1", to:{x:150, y:133}, offsetY:0},
		{id:".o-2", to:{x:150, y:133}, offsetY:0},
		{id:".o-3", to:{x:150, y:150}, offsetY:-20},
		
		]

	function transformOrigin(obj){
		console.log(obj);
		const {x, y } = obj.to || TRANSFORMORIGIN
		const offsetX = obj.offsetX || 0 
		const offsetY = obj.offsetY || 0 
		tl.set(obj.id, {transformOrigin:`${x*2}px ${y*2}px`, x:-x+offsetX, y:-y+offsetY, scale:.5, rotate:0})
	}

	rings.map(a=>transformOrigin(a))

	// return

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

	tl.to(".t1", {opacity:0, duration:.3}, "+=2.2")
	tl.from(".t2", {opacity:0, duration:.3})

	tl.add("end", "+=2")
	tl.to(".frame1", {y:"-=250", duration:.5}, "end")
	tl.set(".frame2", {opacity:1}, "end")
	tl.from(".frame2", {y:"+=250", duration:.5}, "end")

	tl.add("end-spin")
	tl.from(".o-1", {opacity:0, rotate:-270, duration:1.7}, "end-spin")
	tl.from(".o-2", {opacity:0, rotate:270, duration:1.3}, "end-spin")
	tl.from(".o-3", {opacity:0, rotate:-270, duration:1.1}, "end-spin")

	tl.from(".hash", {opacity:0, duration:.3}, "end-spin+=.3")
	tl.add(ypyScroll(), "scroller")
	tl.from(".cta", {opacity:0, duration:.3}, "end-spin+=.3")

	tl.add(olg(), "-=.3")
	// tl.play("end-spin")



}




export {start}