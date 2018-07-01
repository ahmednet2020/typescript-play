"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var imgs = document.querySelectorAll("img");
    var scortime = document.querySelector(".scortime");
    var gamebtn = document.querySelectorAll("[data-value]");
    var lastnumber;
    var scor = 0;
    var time = 1000;
    var clicked = true;
    var start;
    var end;
    var countdown;
    function rendomtime(max, min) {
        var time = Math.floor(Math.random() * (max - min) + min);
        return time;
    }
    function rendomimg(imgs) {
        var lastimg = Math.floor(Math.random() * imgs.length);
        var img = imgs[lastimg];
        if (lastimg === lastnumber)
            return rendomimg(imgs);
        lastnumber = lastimg;
        return img;
    }
    function popup(scond) {
        var timeback = rendomtime(scond, scond / 3);
        var img = rendomimg(imgs);
        img.classList.remove("die");
        img.classList.add("active");
        clicked = false;
        start = setTimeout(function () {
            img.classList.remove("active");
            popup(time);
        }, timeback);
    }
    function imgclicked(e) {
        if (clicked)
            return;
        scor = scor + 1;
        scortime.textContent = scor;
        this.classList.add("die");
        clicked = true;
    }
    function gamestart() {
        var value = this.dataset.value;
        clearTimeout(start);
        time = Number(value);
        scor = 0;
        scortime.textContent = scor;
        imgs.forEach(function (e) { return e.classList.remove("active"); });
        popup(time);
        timer(50000 / 1000);
        gameend();
    }
    function gameend() {
        clearTimeout(end);
        end = setTimeout(function () {
            clearTimeout(start);
            window.alert("you scor is " + scor);
        }, 50000);
    }
    function timer(scond) {
        clearInterval(countdown);
        var datenow = new Date().getTime();
        var dateleft = (scond * 1000) + datenow;
        timeleft(scond);
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
            document.title = sconds;
            return;
        }
        var mintleft = Math.floor(sconds / 60);
        var scondsleft = Math.round(sconds % 60);
        var display = mintleft + ":" + (scondsleft < 10 ? '0' : '') + scondsleft;
        document.title = display;
    }
    imgs.forEach(function (e) {
        e.addEventListener("click", imgclicked);
    });
    gamebtn.forEach(function (e) {
        e.addEventListener("click", gamestart);
    });
});
//# sourceMappingURL=ts.js.map