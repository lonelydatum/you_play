import {init, olg, olg_ypy} from './common.js'


document.getElementById("legalContent").innerHTML = `
© 2023 IGT.<br/>
© 2023 Evolution. All Rights Reserved.<br/>
<br/>
Must be 19 years of age or older and a resident of Ontario, located in the province to play
online casino games. Games and screens may not appear as shown. Odds vary by game.
<br/>
Terms and conditions apply.`
const READ = {
	t1: 2.3,
	t2: 2.6
}

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
		
		const {x, y } = obj.to || TRANSFORMORIGIN
		const offsetX = obj.offsetX || 0 
		const offsetY = obj.offsetY || 0 
		tl.set(obj.id, {transformOrigin:`${x*2}px ${y*2}px`, x:-x+offsetX, y:-y+offsetY, scale:.5, rotate:0})
	}

	rings.map(a=>transformOrigin(a))


	const rotate = 180
	tl.add("arcs-in")
	tl.from(".ring1", {rotate:rotate, duration:1.3}, "arcs-in+=0")
	tl.from(".ring2", {rotate:-rotate, duration:1.3}, "arcs-in+=0")
	tl.from(".ring3", {rotate:rotate, duration:1.3}, "arcs-in+=0")
	tl.from(".ring4", {rotate:-rotate, duration:1.3}, "arcs-in+=0")
	tl.from(".ring5", {rotate:rotate, duration:1.3}, "arcs-in+=0")

	tl.from(".ypy-1", {opacity:0, rotate:120, duration:1.5}, "arcs-in+=0")
	tl.from(".ypy-2", {opacity:0, rotate:-120, duration:1.5}, "arcs-in+=0")
	tl.from(".ypy-3", {opacity:0, rotate:120, duration:1.5}, "arcs-in+=0")


	
	// tl.to(".devices", {x:12, y:-7, scale:.46, duration:.5}, "tl")
	tl.from(".t1", {opacity:0, duration:.5}, "arcs-in+=1")

	
	tl.to(".t1", {opacity:0, duration:.3}, `+=${READ.t1}`)
	tl.from(".t2", {opacity:0, duration:.3})

	tl.to(".t2", {opacity:0, duration:.3}, `+=${READ.t2}`)

	tl.add("end")
	tl.to(".devices", {y:-21, scale:.46, duration:.3}, "end")
	tl.from(".url", {opacity:0, duration:.3}, "end")
	tl.to([".ypy-1", ".ypy-2", ".ypy-3"], {opacity:0, duration:.3}, "end")
	


	tl.add(olg_ypy(), "+=.3")


}



export { start }