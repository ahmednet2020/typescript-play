// (function () {
//     window.addEventListener("keydown", function (e) {
//     	const key = document.querySelector(`.key[data-code="${e.keyCode}"]`),
//     		  keys = document.querySelectorAll(`.key`);
//     		  keys.forEach(e => {
//     		  	e.classList.remove("play")
//     		  });	
//     			key.classList.add("play");
//     });
// }());
class sound {
	code(event:any):void {
			const key:any = document.querySelector(`.key[data-code="${event.keyCode}"]`),
				  audio:any = document.querySelector(`audio[data-code="${event.keyCode}"]`),
				  shap:any = document.querySelector(`.shap[data-code="${event.keyCode}"]`),
				  keys:any = document.querySelectorAll(`.key`),
				  shaps:any = document.querySelectorAll(`.shap`);
			if(!key) return;
			audio.currentTime=0;
			audio.play();
			shaps.forEach((e:any) => {
				e.classList.remove("play");
				e.addEventListener("transitionend", (e:any) => {
						e.target.classList.remove("play");;
				});
			});	
			keys.forEach((e:any) => {
				e.classList.remove("play");
				e.addEventListener("transitionend", (e:any) => {
					e.target.classList.remove("play");
				});
			});
			key.classList.add("play");
			shap.classList.add("play");	
	}
	run():void {
		window.addEventListener("keydown", this.code);
	}
}
let play:sound = new sound();
	play.run();