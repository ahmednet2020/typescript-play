"use strict";
window.onload = function () {
    var countdown;
    var timecontent = document.querySelector(".timeleft");
    var backcontent = document.querySelector(".timeback");
    var btntime = document.querySelectorAll("[data-time]");
    var formtime = document.timerinput;
    function timer(scond) {
        clearInterval(countdown);
        var datenow = new Date().getTime();
        var dateleft = (scond * 1000) + datenow;
        timeleft(scond);
        timeend(dateleft);
        countdown = setInterval(function () {
            datenow = new Date().getTime();
            var then = Math.round((dateleft - datenow) / 1000);
            if (then < 0) {
                clearInterval(countdown);
                timeleft('time is end');
                return;
            }
            timeleft(then);
        }, 1000);
    }
    function timeleft(sconds) {
        if (typeof sconds !== 'number') {
            timecontent.innerText = sconds;
            return;
        }
        var mintleft = Math.floor(sconds / 60);
        var scondsleft = sconds % 60;
        var display = mintleft + ":" + (scondsleft < 10 ? '0' : '') + scondsleft;
        timecontent.innerText = display;
        document.title = display;
    }
    function timeend(sconds) {
        var backtime = new Date(sconds);
        var backhours = backtime.getHours();
        var status = backhours > 12 ? 'PM' : 'AM';
        var display = (backhours > 12 ? backhours - 12 : backhours) + ":" + (backtime.getMinutes() < 10 ? '0' : '') + backtime.getMinutes() + status;
        backcontent.innerText = display;
    }
    function clickedbtn() {
        var time = this.dataset.time;
        timer(Number(time));
    }
    btntime.forEach(function (e) {
        e.onclick = clickedbtn;
    });
    formtime.onsubmit = function (e) {
        e.preventDefault();
        var number = Number(this.number.value);
        if (!number == !NaN)
            return;
        timer(number * 60);
    };
};
//# sourceMappingURL=ts.js.map