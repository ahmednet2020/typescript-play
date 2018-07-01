document.addEventListener("DOMContentLoaded", function () {
    const imgs:any = document.querySelectorAll("img");
    const scortime:any = document.querySelector(".scortime");
    const gamebtn:any = document.querySelectorAll("[data-value]");
    let lastnumber:any;
    let scor:number = 0;
    let time:number = 1000;
    let clicked:boolean = true;
    let start:any;
    let end:any;
    let countdown:any;
    function rendomtime(max:number, min:number){
        let time:number = Math.floor(Math.random() * (max - min) + min);
        return time;
    }
    function rendomimg(imgs:any):void {
        let lastimg:any = Math.floor(Math.random() * imgs.length);
        let img:any = imgs[lastimg];
        if(lastimg === lastnumber) return rendomimg(imgs);      
        lastnumber = lastimg;
        return img;
    }
    function popup(scond:number) {
        let timeback:number = rendomtime(scond, scond/3);
        let img:any = rendomimg(imgs);
        img.classList.remove("die");
        img.classList.add("active");
        clicked = false;
        start = setTimeout(() => {
            img.classList.remove("active");
            popup(time);
        },timeback);
    }
    function imgclicked(e:any) {
        if(clicked) return;
        scor  = scor + 1;
        scortime.textContent = scor;
        this.classList.add("die");
        clicked = true;
    }
    function gamestart():void {
        let value:string = this.dataset.value;
        clearTimeout(start);
        time = Number(value);
        scor  = 0;
        scortime.textContent = scor;
        imgs.forEach((e:any) => e.classList.remove("active"));
        popup(time);
        timer(50000 / 1000);
        gameend();
    }
    function gameend() {
        clearTimeout(end); 
        end = setTimeout(() => {
           clearTimeout(start);
           window.alert(`you scor is ${scor}`);
        },50000);
    }
      function timer(scond:any) {
        clearInterval(countdown);
        var datenow:number = new Date().getTime(); //Date.now() not support ie8;
        var dateleft:number = (scond * 1000 ) + datenow;
        timeleft(scond);
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
            document.title = sconds;
            return;
        }
        let mintleft:number = Math.floor(sconds / 60);
        let scondsleft:number = Math.round(sconds % 60);
        let display:string =     `${mintleft}:${scondsleft < 10 ? '0':''}${scondsleft}`;
        document.title = display;
    }
    imgs.forEach((e:any) => {
        e.addEventListener("click", imgclicked);
    });
    gamebtn.forEach((e:any) => {
        e.addEventListener("click", gamestart);
    });
});