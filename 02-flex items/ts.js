$(document).ready(function () {
	var btn = $("button");
	var slier = $(".items-slider");
	var items = $(".item-show");
	var imgshow = $(".item-show img");
	var mousedown = false;
	var pagex;
	var scrollX;
	var star = $(".star");
	var sup = $(".supstart");
	var slierwidth = slier[0].scrollWidth - slier.outerWidth(true);
	function scrollbtn(e) {
		var item = items.outerWidth();
		var scroll = slier.scrollLeft() + item;
		if($(this).hasClass("arrow-left")) scroll = slier.scrollLeft() - item;
		slier.animate({
			scrollLeft: scroll
		},arrow);
	}
	function arrow() {
		if(slier.scrollLeft() === 0){
		 $(btn[0]).addClass('hidden');
		} else {
			$(btn[0]).removeClass('hidden');
		}
		if(slier.scrollLeft() >= slierwidth){
		 $(btn[1]).addClass('hidden');
		} else {
			$(btn[1]).removeClass('hidden');
		}
	}
	function imgshowfun() {
		var src = this.src;
		var imgactive = $(".img-acitve img");
		imgactive.prop('src',src);
	}
	function mousemove(e) {
		e.preventDefault();
		if(e.type === 'touchmove') {
			var pageXnow = e.originalEvent.touches[0].pageX - pagex;
			slier.scrollLeft(scrollX - pageXnow);
			arrow();
			return;
		}
		if(mousedown === true) {
			var pageXnow = e.pageX - pagex;
			slier.scrollLeft(scrollX - pageXnow);
			arrow();
		}
	}
	function staryellow() {
		$(this).addClass('yellow').prevAll(".star").addClass('yellow');
		$(this).nextAll(".star").removeClass('yellow');
		var yellow = $(".yellow");
		sup.text(yellow.length+'.0');
	}
	btn.on("click", scrollbtn);
	imgshow.on("click", imgshowfun);
	slier.on("touchstart mousedown", function (e) {
		e.preventDefault();
		if(e.type === 'touchstart'){
			pagex = e.originalEvent.touches[0].pageX;
			scrollX = slier.scrollLeft();
			return;
		}
		mousedown = true;
		pagex = e.pageX;
		scrollX = slier.scrollLeft();
	});
	slier.on("mouseup", function () {mousedown = false});
	slier.on("mouseleave", function () {mousedown = false});
	slier.on("touchmove mousemove", mousemove);
	star.on("click", staryellow);
});