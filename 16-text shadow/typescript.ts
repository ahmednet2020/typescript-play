document.addEventListener("DOMContentLoaded",function () {
	const text:any = document.querySelector(".text");
	const h:any = document.querySelector("h1");
	const walk =100;
	function  textshadow(e:any) {
		let {offsetX:x, offsetY:y}=e;
		let {offsetWidth:width, offsetHeight:height}=text;
		let xwlak:number = Math.round((x / width * walk) - (walk/2));
		let ywlak:number = Math.round((y / height * walk) - (walk/2));
		h.style.textShadow =`
		${xwlak}px ${ywlak}px 0 rgba(255,0,255,0.7),
		${xwlak * -1}px ${ywlak * -1}px 0 rgba(255,255,0,0.7),
		${ywlak}px ${xwlak}px 0 rgba(0,255,255,0.7),
		${ywlak * - 1}px ${xwlak * -1}px 0 rgba(0,0,255,0.7)

		`;

		console.log(xwlak)
		console.log(e.target.offsetTop);
	}
	text.addEventListener("mousemove", textshadow);
});