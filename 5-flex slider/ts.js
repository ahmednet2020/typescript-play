"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var panles = document.querySelectorAll(".panles");
    function flexClass() {
        if (!document.querySelector(".open"))
            return this.classList.add("open");
        return this.classList.remove("open");
    }
    function textclass(e) {
        if (e.propertyName === "font-size" && e.target.nodeName === "DIV")
            return this.classList.toggle("openactive");
    }
    panles.forEach(function (ele) { return ele.addEventListener("click", flexClass); });
    panles.forEach(function (ele) { return ele.addEventListener("transitionend", textclass); });
});
//# sourceMappingURL=ts.js.map