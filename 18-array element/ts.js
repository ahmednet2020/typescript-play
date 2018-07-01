"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var elep = "<p data-time='5:31'>ahmed</p>";
    var ele = document.body.innerHTML += "" + elep.repeat(50);
    var eleadd = Array.from(document.querySelectorAll("[data-time]"));
    var sconds = eleadd.map(function (e) { return e.dataset.time; })
        .map(function (e) {
        var _a = e.split(":").map(parseFloat), min = _a[0], sco = _a[1];
        return (min * 60) + sco;
    })
        .reduce(function (total, next) { return total += next; });
    var scond = sconds % 60;
    var mint = parseInt((sconds / 60) % 60);
    var hours = parseInt(((sconds / 60) / 60));
    console.log(hours, mint, scond);
});
//# sourceMappingURL=ts.js.map