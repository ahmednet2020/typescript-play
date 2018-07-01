"use strict";
document.addEventListener("load", ready);
document.addEventListener("DOMContentLoaded", ready);
function ready() {
    "use strict";
    var form = document.querySelector(".form-flex");
    var list = document.querySelector(".list-item ul");
    var items = JSON.parse(sessionStorage.getItem("itemslist")) || [];
    function addlist(e) {
        e.preventDefault();
        var value = this.querySelector("input").value;
        var item = {
            value: value,
            done: false
        };
        items.push(item);
        print(items, list);
        storge(items);
        this.reset();
    }
    function storge(data) {
        if (typeof (Storage) !== "undefined") {
            var data = JSON.stringify(data);
            sessionStorage.setItem("itemslist", data);
        }
        else {
            window.alert("your browser is old");
        }
    }
    function print(itemslist, list) {
        if (itemslist === void 0) { itemslist = []; }
        list.innerHTML = itemslist.map(function (item, i) {
            return "\n\t\t<li>\n\t\t<input type=\"checkbox\" data-index=" + i + " name=\"" + item.value + "\" id=\"text" + i + "\" " + (item.done ? 'checked' : '') + ">\n\t\t<label for=\"text" + i + "\">" + item.value + "</label>\n\t\t</li>\n\t\t";
        }).join("");
    }
    function toggledone(e) {
        if (!(e.target.nodeName === "INPUT"))
            return;
        var index = Number(e.target.dataset.index);
        items[index].done = !items[index].done;
        storge(items);
    }
    form.addEventListener("submit", addlist);
    list.addEventListener("click", toggledone);
    print(items, list);
}
//# sourceMappingURL=ts.js.map