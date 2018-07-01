"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var video = document.querySelector(".video");
    var btnplay = document.querySelector(".btn-play");
    var btnfor = document.querySelector(".for");
    var btnback = document.querySelector(".back");
    var btnicon = btnplay.querySelector(".fa");
    var pross = document.querySelector(".pross-bar");
    var bar = pross.querySelector(".bar");
    var valubar = document.querySelector(".bar-volum");
    var barno = valubar.querySelector(".bar-now");
    var muto = document.querySelector(".muto");
    var now = document.querySelector(".now");
    var all = document.querySelector(".all");
    var barwidth = (video.offsetWidth) / 5;
    var mousedown = false;
    console.dir(video);
    valubar.style.width = barwidth + "px";
    function barfun(e) {
        var width = (e.offsetX / pross.offsetWidth) * 100;
        var time = (e.offsetX / pross.offsetWidth) * video.duration;
        bar.style.width = width + "%";
        video.currentTime = time;
    }
    function barupted() {
        var time = (video.currentTime / video.duration) * 100;
        bar.style.width = time + "%";
        now.textContent = (video.currentTime / 60).toFixed(2).replace(".", ":");
        all.textContent = (video.duration / 60).toFixed(2).replace(".", ":");
    }
    function toggelstat() {
        if (video.paused) {
            video.play();
            btnicon.classList.add("fa-pause");
            btnicon.classList.remove("fa-play");
        }
        else {
            video.pause();
            btnicon.classList.remove("fa-pause");
            btnicon.classList.add("fa-play");
        }
    }
    function forward() {
        if (video.playbackRate >= 4)
            return;
        video.playbackRate += parseFloat(this.value);
    }
    function backward() {
        if (video.playbackRate <= 0)
            return;
        video.playbackRate -= parseFloat(this.value);
    }
    function valumbar(e) {
        var value = (this.value / 100) * 1;
        video.volume = value;
        console.log(video.volume);
    }
    function mutofun() {
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
//# sourceMappingURL=ts.js.map