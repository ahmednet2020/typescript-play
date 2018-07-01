"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var input = document.querySelectorAll("input[type='checkbox']"), lastinput;
    function checked(e) {
        var _this = this;
        console.log(this);
        console.log(e);
        var stat = false;
        if (e.shiftKey && this.checked) {
            input.forEach(function (e) {
                if (e === _this || e === lastinput) {
                    stat = !stat;
                }
                if (stat) {
                    e.checked = true;
                }
            });
        }
        lastinput = this;
    }
    input.forEach(function (e) {
        e.addEventListener("click", checked);
    });
});
//# sourceMappingURL=ts.js.map