document.addEventListener("DOMContentLoaded", function () {
	const video:any = document.querySelector(".video");
	const btnplay:any = document.querySelector(".btn-play");
	const btnfor:any = document.querySelector(".for");
	const btnback:any = document.querySelector(".back");
	const btnicon:any = btnplay.querySelector(".fa");
	const pross:any = document.querySelector(".pross-bar");
	const bar:any = pross.querySelector(".bar");
	const valubar:any = document.querySelector(".bar-volum");
	const barno:any = valubar.querySelector(".bar-now");
	const muto:any = document.querySelector(".muto");
	const now:any = document.querySelector(".now");
	const all:any = document.querySelector(".all");
	const barwidth:any = (video.offsetWidth) / 5;
	let	  mousedown = false;
	console.dir(video);
	valubar.style.width = `${barwidth}px`;
	function barfun(e:any):void{
		let width:number = (e.offsetX / pross.offsetWidth) * 100;
		let time:number = (e.offsetX / pross.offsetWidth) * video.duration;
		bar.style.width = `${width}%`;
		video.currentTime = time;
	}
	function barupted():void{
		let time:number = (video.currentTime / video.duration) * 100;
		bar.style.width = `${time}%`;
		now.textContent = (video.currentTime / 60).toFixed(2).replace(".",":");
		all.textContent = (video.duration / 60).toFixed(2).replace(".",":");
	}
	function toggelstat():void{
		if (video.paused){
			video.play();
			btnicon.classList.add("fa-pause");
			btnicon.classList.remove("fa-play");
		} else {
			video.pause();
			btnicon.classList.remove("fa-pause");
			btnicon.classList.add("fa-play");
		}
	}
	function forward():void{
		if(video.playbackRate >= 4) return;
		video.playbackRate += parseFloat(this.value);
	}
	function backward():void{
		if(video.playbackRate <= 0) return;
		video.playbackRate -= parseFloat(this.value);
	}
	function valumbar(e:any):void {
		let value:number = (this.value / 100) * 1;
		video.volume = value;
		console.log(video.volume);

	}
	function mutofun():void{
		video.muted = !video.muted;
		valubar.style.background = "red";
	}
	btnplay.addEventListener("click", toggelstat);
	btnfor.addEventListener("click", forward);
	btnback.addEventListener("click", backward);
	pross.addEventListener("click", barfun);
	barno.addEventListener("click", valumbar);
	video.addEventListener("timeupdate", barupted);
	video.addEventListener("loadeddata", barupted);
	muto.addEventListener("click", mutofun);
	video.addEventListener("click", toggelstat);
});