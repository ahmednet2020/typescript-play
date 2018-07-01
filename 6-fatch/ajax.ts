 document.addEventListener("DOMContentLoaded", function() {
 	var xmlhttp:any;
	if (window.XMLHttpRequest) {
	    xmlhttp = new XMLHttpRequest();
	 } else {
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	try {
		xmlhttp.open("GET","post.json",true);
		xmlhttp.send();
		xmlhttp.onreadystatechange = function () {
				if(this.readyState === 4 && this.status === 200){
				var json = JSON.parse(xmlhttp.responseText);
				 var mark = function(a:string, b:string):string{
				 	a =  a.replace(b, '<mark>$&</mark>');
				 	return a;
				 }
					document.getElementById("search").addEventListener("keyup", function (e:any) {
						var value = e.target.value.toLowerCase().trim();
							document.getElementById("content").innerHTML = "";
						for(var i in json) {
							var jsontitle = json[i].title.toLowerCase().trim(),
							    jsoncontent = json[i].content.toLowerCase().trim(),
							    jsontags = json[i].tags.filter((e:string) => e.indexOf(value) === 0);
							 if(jsontitle.indexOf(value) === 0 || jsoncontent.indexOf(value) === 0 || jsontags.length !== 0){
							 	jsontags = json[i].tags.map(function(c:string) {
							 		return c = `<span>${mark(c,value)}</span>`;
							 	});
							 	document.getElementById("content").innerHTML += `
							 	<div class="post">
							 	<h2 class="title">${mark(jsontitle,value)}</h2>
							 	<p class="description">${mark(jsoncontent,value)}</p>
							 	<div class="tags">${jsontags}</div></div>
							 	`;
							}
						}
					});
				}
			}
	} catch (err) {
		document.getElementById("content").textContent = err.message;
	}
 });
