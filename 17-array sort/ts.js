"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var arry = ["The zero", "thE ahmed", "the mohamed", "An samir", "an tero", "tHe bahero"];
    function remove(e) {
        return e.replace(/^(the|an)/i, '').trim();
    }
    var arraysory = arry.sort(function (a, b) { return remove(a) > remove(b) ? 1 : -1; });
    var ul = document.querySelector(".add");
    ul.innerHTML = arraysory.map(function (e) { return "<li>" + e + "</li>"; }).join("");
});
//# sourceMappingURL=ts.js.map