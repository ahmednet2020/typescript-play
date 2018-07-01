"use strict";
document.addEventListener("DOMContentLoaded",function () {
    var input = document.querySelectorAll('.inputlable input');
    input.forEach(function (e) {
          if(!e.value == ''){
            e.parentElement.classList.add("inputactive");
        }
        e.addEventListener("focus",function() {
            this.parentElement.classList.add("inputactive");
        });
         e.addEventListener("blur",function() {
            if(!this.value == '') return false;
            this.parentElement.classList.remove("inputactive");
        });
    });
    
});
//# sourceMappingURL=ts.js.map