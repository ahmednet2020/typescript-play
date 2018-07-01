"use strict";
var sound = (function () {
    function sound() {
    }
    sound.prototype.code = function (event) {
        var key = document.querySelector(".key[data-code=\"" + event.keyCode + "\"]"), audio = document.querySelector("audio[data-code=\"" + event.keyCode + "\"]"), shap = document.querySelector(".shap[data-code=\"" + event.keyCode + "\"]"), keys = document.querySelectorAll(".key"), shaps = document.querySelectorAll(".shap");
        if (!key)
            return;
        audio.currentTime = 0;
        audio.play();
        shaps.forEach(function (e) {
            e.classList.remove("play");
            e.addEventListener("transitionend", function (e) {
                e.target.classList.remove("play");
                ;
            });
        });
        keys.forEach(function (e) {
            e.classList.remove("play");
            e.addEventListener("transitionend", function (e) {
                e.target.classList.remove("play");
            });
        });
        key.classList.add("play");
        shap.classList.add("play");
    };
    sound.prototype.run = function () {
        window.addEventListener("keydown", this.code);
    };
    return sound;
}());
var play = new sound();
play.run();
//# sourceMappingURL=ts.js.map