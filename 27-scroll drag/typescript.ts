document.addEventListener("DOMContentLoaded",function () {
	const box:any = document.querySelector(".box");
	let mousedown:boolean = false;
	let	startx:any;
	let scroll:any;
	function scrollmove(e:any):any {
		if(!mousedown) return;
		e.preventDefault();
		let movex:number = (e.pageX) - startx;
		box.scrollLeft = scroll - movex;
	}

	box.addEventListener("mousedown",(e:any) => {
		mousedown = true;
		startx = e.pageX;
		scroll = box.scrollLeft;
		box.classList.add("down");
	});
	box.addEventListener("mouseleave",() => {
		mousedown = false;
		box.classList.remove("down");
	});
	box.addEventListener("mouseup",() => {
		mousedown = false;
		box.classList.remove("down");
	});
	box.addEventListener("mousemove", scrollmove);
});