"use strict";
var handscond = document.querySelector(".hand-scond"), handmint = document.querySelector(".hand-mint"), handhours = document.querySelector(".hand-hours");
function data() {
    var data = new Date(), scound = data.getSeconds(), scounddeg = ((scound / 60) * 360) + 90, mint = data.getMinutes(), mintdeg = ((mint / 60) * 360) + 90, hours = data.getHours(), hourdeg = ((hours / 12) * 360) + 90;
    if (scounddeg == 90) {
        handscond.style.transitionDuration = "0s";
    }
    else {
        handscond.style.transitionDuration = "0.5s";
    }
    if (mintdeg == 90) {
        handmint.style.transitionDuration = "0s";
    }
    else {
        handmint.style.transitionDuration = "0.5s";
    }
    if (hourdeg == 90) {
        handhours.style.transitionDuration = "0s";
    }
    else {
        handhours.style.transitionDuration = "0.5s";
    }
    handscond.style.transform = "rotate(" + scounddeg + "deg)";
    handmint.style.transform = "rotate(" + mintdeg + "deg)";
    handhours.style.transform = "rotate(" + hourdeg + "deg)";
    console.log(scounddeg);
}
setInterval(data, 1000);
//# sourceMappingURL=ts.js.map