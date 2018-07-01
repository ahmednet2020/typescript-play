"use strict";
var input = document.querySelectorAll("input");
function print() {
    var size = this.dataset.size || '';
    document.documentElement.style.setProperty("--" + this.name, "" + this.value + size);
}
input.forEach(function (e) {
    e.addEventListener("change", print);
});
function rest() {
    input.forEach(function (e) {
        var size = e.dataset.size || '';
        document.documentElement.style.setProperty("--" + e.name, "" + e.dataset.defult + size);
    });
}
//# sourceMappingURL=ts.js.map