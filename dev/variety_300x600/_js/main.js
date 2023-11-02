import {READ, rotateSetRetina, rotateDo} from '../../_common/js/variety.js'
import {init, olg_ypy} from '../../_common/js/common.js'

start()


function start(){
	const tl = init()


	const TRANSFORMORIGIN = {x:265, y:310}
	const rings = [
		{id:".ring1", offsetY:0, offsetX:125, scale:1},
		{id:".ring2", offsetY:0, offsetX:125, scale:1},
		{id:".ring3", offsetY:0, offsetX:125, scale:1},
		{id:".ring4", offsetY:0, offsetX:125, scale:1},
		{id:".ring5", offsetY:0, offsetX:125, scale:1},		
	]

	function transformOrigin(obj){
		// const scale = 2
		const {x, y } = obj.to || TRANSFORMORIGIN
		const offsetX = obj.offsetX || 0 
		const offsetY = obj.offsetY || 0 
		console.log(offsetX - x);
		tl.set(obj.id, {transformOrigin:`${x}px ${y}px`, x:-x+offsetX, y:0, scale:1, rotate:0})
	}

	rings.map(a=>transformOrigin(a))

	// const {x, y } = {x:30, y:265}
	// const offsetX =  0 
	// const offsetY = 0 
	// tl.set(".ypy-1", {transformOrigin:`${x*2}px ${y*2}px`, x:-x+offsetX, y:-y+offsetY, scale:.5, rotate:0})
	// tl.set(".ypy-2", {transformOrigin:`${x*2}px ${y*2}px`, x:-x+offsetX, y:-y+offsetY, scale:.5, rotate:0})
	// tl.set(".ypy-3", {transformOrigin:`${x*2}px ${y*2}px`, x:-x+offsetX, y:-y+offsetY, scale:.5, rotate:0})


	const data = {
		list: [".ypy-1", ".ypy-2", ".ypy-3"],
		offsetY:0, offsetX:0, to:{x:150, y:300}
	}

	rotateSetRetina(data)
	
	
	// return
	tl.add(rotateDo(180, 30 ))


	


	


}
