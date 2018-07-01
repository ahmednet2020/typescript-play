const handscond:any = document.querySelector(".hand-scond"),
		handmint:any = document.querySelector(".hand-mint"),
		handhours:any = document.querySelector(".hand-hours");
function data():void {
	const data:Date = new Date(),
			scound:number = data.getSeconds(),
			scounddeg:number = ((scound / 60) * 360) + 90,
			mint:number = data.getMinutes(),
			mintdeg:number = ((mint / 60) * 360) + 90,
			hours:number = data.getHours(),
			hourdeg:number = ((hours / 12) * 360) +90;
			// console.log(scound);
			if(scounddeg == 90){
				handscond.style.transitionDuration = "0s";
			} else {
				handscond.style.transitionDuration = "0.5s";
			}
			if(mintdeg == 90){
				handmint.style.transitionDuration = "0s";
			} else {
				handmint.style.transitionDuration = "0.5s";
			}
			if(hourdeg == 90){
				handhours.style.transitionDuration = "0s";
			} else {
				handhours.style.transitionDuration = "0.5s";
			}
			handscond.style.transform =`rotate(${scounddeg}deg)`;
			handmint.style.transform =`rotate(${mintdeg}deg)`;
			handhours.style.transform =`rotate(${hourdeg}deg)`;
			console.log(scounddeg);
}
setInterval(data, 1000);

