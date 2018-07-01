"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    try {
        xmlhttp.open("GET", "post.json", true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var json = JSON.parse(xmlhttp.responseText);
                var mark = function (a, b) {
                    a = a.replace(b, '<mark>$&</mark>');
                    return a;
                };
                document.getElementById("search").addEventListener("keyup", function (e) {
                    var value = e.target.value.toLowerCase().trim();
                    document.getElementById("content").innerHTML = "";
                    for (var i in json) {
                        var jsontitle = json[i].title.toLowerCase().trim(), jsoncontent = json[i].content.toLowerCase().trim(), jsontags = json[i].tags.filter(function (e) { return e.indexOf(value) === 0; });
                        if (jsontitle.indexOf(value) === 0 || jsoncontent.indexOf(value) === 0 || jsontags.length !== 0) {
                            jsontags = json[i].tags.map(function (c) {
                                return c = "<span>" + mark(c, value) + "</span>";
                            });
                            document.getElementById("content").innerHTML += "\n\t\t\t\t\t\t\t \t<div class=\"post\">\n\t\t\t\t\t\t\t \t<h2 class=\"title\">" + mark(jsontitle, value) + "</h2>\n\t\t\t\t\t\t\t \t<p class=\"description\">" + mark(jsoncontent, value) + "</p>\n\t\t\t\t\t\t\t \t<div class=\"tags\">" + jsontags + "</div></div>\n\t\t\t\t\t\t\t \t";
                        }
                    }
                });
            }
        };
    }
    catch (err) {
        document.getElementById("content").textContent = err.message;
    }
});
//# sourceMappingURL=ajax.js.map