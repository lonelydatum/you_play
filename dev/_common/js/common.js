import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
import {initYPY, ypyScroll} from './ypy_fx.js'
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



function olg_ypy(){
	const tl = new TimelineMax()

	tl.add("done")
	tl.add(olg(), "done")
	tl.add(ypyScroll(), "done")
	tl.from([".cta", ".legal"], {opacity:0, duration:.3}, "done+=.7")
	return tl
}

export { init, olg, bannerSize, olg_ypy }