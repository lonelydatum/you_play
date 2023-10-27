import {init} from '../../_common/js/common.js'



const tl = init()
console.log(tl);

const TRANSFORMORIGIN = {x:150, y:195}
const rings = [
	{id:".ring1"},
	{id:".ring2"},
	{id:".ring3"},
	{id:".ring4", offsetX:-5},
	{id:".ring5"},
	{id:".ypy-1"},
		{id:".ypy-2"},
		{id:".ypy-3"},
	]

function transformOrigin(obj){
	console.log(obj);
	const {x, y } = obj.to || TRANSFORMORIGIN
	const offsetX = obj.offsetX || 0 
	const offsetY = obj.offsetY || 0 
	tl.set(obj.id, {transformOrigin:`${x*2}px ${y*2}px`, x:-x+offsetX, y:-y+offsetY, scale:.5})



}

rings.map(a=>transformOrigin(a))


const rotate = 180
tl.add("arcs")
tl.from(".ring1", {rotate:rotate, duration:1}, "arcs+=0")
tl.from(".ring2", {rotate:-rotate, duration:1}, "arcs+=0.3")
tl.from(".ring3", {rotate:rotate, duration:1.3}, "arcs+=0")
tl.from(".ring4", {rotate:-rotate, duration:1}, "arcs+=0")
tl.from(".ring5", {rotate:rotate, duration:1.1}, "arcs+=0.2")
tl.from(".ypy-1", {opacity:0, rotate:-rotate, duration:.5}, "arcs+=0.8")
tl.from(".ypy-2", {opacity:0, rotate:rotate, duration:.5}, "arcs+=1.4")
tl.from(".ypy-3", {opacity:0, rotate:-rotate, duration:.5}, "arcs+=1.8")
