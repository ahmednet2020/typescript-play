"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector("nav");
    var bg = document.querySelector(".background");
    var navlink = nav.querySelectorAll(".item-link");
    function open() {
        var _this = this;
        if (!this.querySelector(".drobmanu"))
            return false;
        this.classList.add("active");
        bg.classList.add("open");
        setTimeout(function () {
            if (_this.classList.contains("active"))
                _this.classList.add("open");
        }, 0);
        var drob = this.querySelector(".drobmanu");
        var drobinfo = drob.getBoundingClientRect();
        var navsiz = nav.getBoundingClientRect();
        var drobsize = {
            width: drobinfo.width,
            height: drobinfo.height,
            top: drobinfo.top,
            left: drobinfo.left
        };
        bg.style.width = drobsize.width + "px";
        bg.style.height = drobsize.height + "px";
        bg.style.top = drobsize.top - navsiz.top + "px";
        bg.style.left = drobsize.left - navsiz.left + "px";
    }
    function close(e) {
        console.log(e.target);
        this.classList.remove("open", "active");
        bg.classList.remove("open");
    }
    navlink.forEach(function (e) { return e.addEventListener("mouseenter", open); });
    navlink.forEach(function (e) { return e.addEventListener("mouseleave", close); });
});
//# sourceMappingURL=ts.js.map