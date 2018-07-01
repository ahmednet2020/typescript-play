"use strict";
    (function () {
		var box = document.querySelector(".box");
		var mousedown = false;
		var startx;
		var scroll;
		function scrollmove(e) {
			if (!mousedown)
				return;
			e.preventDefault();
			var movex = (e.pageX) - startx;
			box.scrollLeft = scroll - movex;
		}
		box.addEventListener("mousedown", function (e) {
			mousedown = true;
			startx = e.pageX;
			scroll = box.scrollLeft;
			box.classList.add("down");
		});
		box.addEventListener("mouseleave", function () {
			mousedown = false;
			box.classList.remove("down");
		});
		box.addEventListener("mouseup", function () {
			mousedown = false;
			box.classList.remove("down");
		});
		box.addEventListener("mousemove", scrollmove);
	})();
//# sourceMappingURL=ts.js.map