document.addEventListener("DOMContentLoaded",function () {
		const nav:any = document.querySelector("nav"); 
		const bg:any = document.querySelector(".background");
		const navlink:any = nav.querySelectorAll(".item-link");
		function open() {
			if(!this.querySelector(".drobmanu")) return false;
				this.classList.add("active");
				bg.classList.add("open");
				setTimeout(() => {
					if(this.classList.contains("active"))
					this.classList.add("open");
				},0);
				let drob:any = this.querySelector(".drobmanu");
				let drobinfo = drob.getBoundingClientRect();
				let navsiz:any = nav.getBoundingClientRect();
				let drobsize:any = {
					width:drobinfo.width,
					height:drobinfo.height,
					top:drobinfo.top,
					left:drobinfo.left
				};
				bg.style.width = `${drobsize.width}px`;
				bg.style.height = `${drobsize.height}px`;
				bg.style.top = `${drobsize.top - navsiz.top}px`;
				bg.style.left = `${drobsize.left - navsiz.left}px`;
		}
		function close(e) {
			console.log(e.target);
			this.classList.remove("open","active");
			bg.classList.remove("open");
		}

		navlink.forEach((e:any) => e.addEventListener("mouseenter",open));
		navlink.forEach((e:any) => e.addEventListener("mouseleave",close));
});