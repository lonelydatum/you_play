import {init, olg} from './common.js'


function start(){
	const tl = init()


	const TRANSFORMORIGIN = {x:158, y:154}
	const rings = [
		{id:".ring1", offsetY:-22, offsetX:0},
		{id:".ring2", offsetY:-22, offsetX:0},
		{id:".ring3", offsetY:-22, offsetX:0},
		{id:".ring4", offsetY:-22, offsetX:0},
		{id:".ring5", offsetY:-22, offsetX:0},
		{id:".ypy-1", offsetY:-22, offsetX:0},
		{id:".ypy-2", offsetY:-22, offsetX:0},
		{id:".ypy-3", offsetY:-22, offsetX:0},
	]

	function transformOrigin(obj){
		console.log(obj);
		const {x, y } = obj.to || TRANSFORMORIGIN
		const offsetX = obj.offsetX || 0 
		const offsetY = obj.offsetY || 0 
		tl.set(obj.id, {transformOrigin:`${x*2}px ${y*2}px`, x:-x+offsetX, y:-y+offsetY, scale:.5, rotate:0})
	}

	rings.map(a=>transformOrigin(a))


	const rotate = 180
	tl.add("arcs-in")
	tl.from(".ring1", {rotate:rotate, duration:2}, "arcs-in+=0")
	tl.from(".ring2", {rotate:-rotate, duration:2}, "arcs-in+=0")
	tl.from(".ring3", {rotate:rotate, duration:2}, "arcs-in+=0")
	tl.from(".ring4", {rotate:-rotate, duration:2}, "arcs-in+=0")
	tl.from(".ring5", {rotate:rotate, duration:2}, "arcs-in+=0")

	tl.from(".ypy-1", {opacity:0, rotate:120, duration:1.5}, "arcs-in+=0")
	tl.from(".ypy-2", {opacity:0, rotate:-120, duration:1.5}, "arcs-in+=0")
	tl.from(".ypy-3", {opacity:0, rotate:120, duration:1.5}, "arcs-in+=0")


	tl.add("t1", "+=1")
	tl.to(".devices", {x:12, y:-7, scale:.46, duration:.5}, "tl")
	tl.from(".t1", {opacity:0, duration:.5}, "tl+=.3")

	
	tl.to(".t1", {opacity:0, duration:.3}, "+=3")
	tl.from(".t2", {opacity:0, duration:.3})

	tl.to(".t2", {opacity:0, duration:.3}, "+=3")

	tl.from([".text_end", ".cta"], {opacity:0, duration:.3})





	tl.add(olg(), "-=.3")


}



export { start }