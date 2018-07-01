document.addEventListener("DOMContentLoaded", function (){
    "use strict";
    var scrollitem =  document.querySelectorAll(".scroll-item");
    window.addEventListener("scroll", function () {
        scrollitem.forEach(function(e) {
            if (((window.pageYOffset+ window.innerHeight)-e.clientHeight /2 ) >= (e.offsetTop)) {
                e.classList.add("scroll-active");
            } else {
               e.classList.remove("scroll-active"); 
            }
        });
    });
});