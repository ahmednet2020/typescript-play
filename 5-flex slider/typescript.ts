document.addEventListener("DOMContentLoaded", function() {
	let panles:any = document.querySelectorAll(".panles");
	function flexClass() {
		//console.log(!document.querySelector(".open"));
		if(!document.querySelector(".open")) return this.classList.add("open");
			return this.classList.remove("open");
	}
	function textclass(e:any) {
		//console.log(e.propertyName === "font-size" && e.target.nodeName === "DIV");
		if(e.propertyName === "font-size" && e.target.nodeName === "DIV") return this.classList.toggle("openactive");
		
	}
	panles.forEach((ele:any) => ele.addEventListener("click", flexClass));
	panles.forEach((ele:any) => ele.addEventListener("transitionend", textclass));
});