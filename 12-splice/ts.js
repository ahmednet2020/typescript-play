"use strict";
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var name = "ahmed";
    var matrixkey = [];
    window.addEventListener("keydown", function (e) {
        matrixkey.push(e.key);
        matrixkey.splice(-name.length-1, matrixkey.length - name.length);
		console.log(matrixkey);
        if (matrixkey.join("").includes(name)) {
            document.body.innerHTML += "<h2>" + name + "</h2>";
        }
    });
});
//# sourceMappingURL=ts.js.map