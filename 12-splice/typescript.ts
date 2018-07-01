document.addEventListener("DOMContentLoaded", function() {
	"use strict";
	let name:string = "ahmed";
	let matrixkey:any[] = [];

	window.addEventListener("keydown", function(e:any):void {
		matrixkey.push(e.key);
		matrixkey.splice(-name.length-1, matrixkey.length - name.length);
		if(matrixkey.join("").includes(name)){
			document.body.innerHTML +=`<h2>${name}</h2>`;
		}
	});
});