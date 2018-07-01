"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var text = document.querySelector(".text");
    var h = document.querySelector("h1");
    var walk = 100;
    function textshadow(e) {
        var x = e.offsetX, y = e.offsetY;
        var width = text.offsetWidth, height = text.offsetHeight;
        var xwlak = Math.round((x / width * walk) - (walk / 2));
        var ywlak = Math.round((y / height * walk) - (walk / 2));
        h.style.textShadow = "\n\t\t" + xwlak + "px " + ywlak + "px 0 rgba(255,0,255,0.7),\n\t\t" + xwlak * -1 + "px " + ywlak * -1 + "px 0 rgba(255,255,0,0.7),\n\t\t" + ywlak + "px " + xwlak + "px 0 rgba(0,255,255,0.7),\n\t\t" + ywlak * -1 + "px " + xwlak * -1 + "px 0 rgba(0,0,255,0.7)\n\n\t\t";
        console.log(xwlak);
        console.log(e.target.offsetTop);
    }
    text.addEventListener("mousemove", textshadow);
});
//# sourceMappingURL=ts.js.map