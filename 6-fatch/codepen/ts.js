"use strict";
document.addEventListener("DOMContentLoaded", function () {
   function codepen(url) {
    return new Promise(function(resolve, reject) {
        var http = new XMLHttpRequest();
        http.open("GET",url,true);
        http.send();
        http.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200){
                var x = JSON.parse(http.responseText);
                resolve(x);
            } else if (http.statusText != 'OK') {
              reject(http.statusText);  
            }
        }
    });

   }
   codepen('post.json').then(function (data) {
    console.log(data);
    return codepen('post.json');
   }).then(function (data) {
    console.log(data);
   }).catch(function (erro){
    console.log(erro);
   });
// fetch('post.json').then(function (data) {
//   var x = data.json();
//   console.log(x);
// });
});
//# sourceMappingURL=ts.js.map