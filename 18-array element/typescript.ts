document.addEventListener("DOMContentLoaded",function () {
	const elep:any = "<p data-time='5:31'>ahmed</p>"
	const ele:any = document.body.innerHTML += `${elep.repeat(50)}`;
	const eleadd:any = Array.from(document.querySelectorAll("[data-time]"));
	const sconds:any = 
	eleadd.map((e:any) => e.dataset.time)
	.map((e:any) => {
		let [min,sco] = e.split(":").map(parseFloat);
		return (min * 60) + sco;
	})
	.reduce((total:any,next:any) => total += next);
	const scond:number = sconds % 60; 
	const mint:number = parseInt((sconds / 60) % 60); 
	const hours:number = parseInt(((sconds / 60) / 60)); 
	console.log(hours, mint, scond);

});