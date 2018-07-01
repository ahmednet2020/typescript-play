document.addEventListener("DOMContentLoaded", function() {
	let input:any = document.querySelectorAll("input[type='checkbox']"),
		lastinput:any;
	function checked(e:any):void {
		console.log(this);
		console.log(e);
		let stat:boolean = false;
		if(e.shiftKey && this.checked) {
			input.forEach((e:any) => {
				if(e === this || e === lastinput) {
					stat = !stat;
				}
				if (stat) {
					e.checked = true;
				}
			})
		}
		lastinput = this;
	}
	input.forEach((e:any) => {
		e.addEventListener("click", checked);
		})
	});