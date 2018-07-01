const input:any = document.querySelectorAll("input");
function print():void{
	const size:any = this.dataset.size || '';
	document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${size}`);
	

}
input.forEach((e:any) => {
	e.addEventListener("change",print)
});

function rest() {
	input.forEach((e:any) => {
		const size:any = e.dataset.size || '';
		document.documentElement.style.setProperty(`--${e.name}`,`${e.dataset.defult}${size}`);
	});
}