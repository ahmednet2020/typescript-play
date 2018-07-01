window.onload = function () {
    let countdown:any;
	const timecontent:any = document.querySelector(".timeleft");
	const backcontent:any = document.querySelector(".timeback");
    const btntime:any = document.querySelectorAll("[data-time]");
    const formtime:any = document.timerinput;
    function timer(scond:any) {
    	clearInterval(countdown);
        var datenow:number = new Date().getTime(); //Date.now() not support ie8;
        var dateleft:number = (scond * 1000 ) + datenow;
        timeleft(scond);
        timeend(dateleft);
         countdown = setInterval(function () {
        	datenow = new Date().getTime();
        	let then = Math.round((dateleft - datenow) / 1000);
        	if(then < 0) {
        		clearInterval(countdown);
                timeleft('time is end');
        		return;
        	}
        	timeleft(then);
        },1000);
    }
    function timeleft(sconds:any) {
        if(typeof sconds !== 'number') {
            timecontent.innerText = sconds;
            return;
        }
    	let mintleft:number = Math.floor(sconds / 60);
    	let scondsleft:number = sconds % 60;
    	let display:string = 	`${mintleft}:${scondsleft < 10 ? '0':''}${scondsleft}`;
    	timecontent.innerText = display;
    	document.title = display;
    }
    function timeend(sconds:any) {
    	let backtime:any = new Date(sconds);
    	let backhours:any = backtime.getHours();
        let status:any = backhours > 12 ? 'PM':'AM';
    	let display:string =`${backhours > 12 ? backhours - 12:backhours}:${backtime.getMinutes() < 10 ? '0':''}${backtime.getMinutes()}${status}`;
    		backcontent.innerText = display;
    }
    function clickedbtn() {
        let time:any = this.dataset.time;
            timer(Number(time));
        }
    btntime.forEach((e:any) =>{
        e.onclick = clickedbtn;
    });
    formtime.onsubmit = function (e:any) {
            e.preventDefault();
            let number:any = Number(this.number.value);
            if(!number == !NaN) return;
                timer(number * 60);
           
        };
};