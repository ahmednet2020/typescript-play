///<reference path="jquery.d.ts" />
///<reference path="greensock.d.ts" />
$(function () {
	var slider = $(".slider");
	var itemwidth = 100;
	var sliderwidth = slider.outerWidth(true);
	var sliderheight = slider.outerHeight(true);
	var cols = Math.floor(sliderwidth/itemwidth);
	var rows = Math.floor(sliderheight/itemwidth);
	var cells = [];
	var next = $(".next");
	var prev = $(".prev");
	//span function build
	function slidergo(x:any,y:any) 
	{
		this.x = (x * itemwidth);
		this.y = (y * itemwidth);
	}
	//add span in html dom
	slidergo.prototype.show = function ()
	{
		this.span = `<span class='item' style='left:${this.x}px;top:${this.y}px;background-position:-${this.x}px -${this.y}px;background-size:${sliderwidth}px ${sliderheight}px'></span>`;
		slider.append(this.span);
	}
	for (let row = 0; row < rows; row++)
	{
		for (let col = 0; col < cols; col++)
		{
			let cell = new slidergo(col,row);
			cells.push(cell);
		}
	}
	for(let cell of cells)
	{
		cell.show();
	}
	//animat
	function animat() 
	{
		var time = (3000 / cells.length);
		var span = $(".slider.active").find(".item");
	    span.each(function (i:any,e:any) {
	    	var left = $(e).css("left");
	    	var top = $(e).css("top");
	    	$(e).css({
	    		left:`${-sliderwidth}px`,
		    	top:`${-sliderheight}px`
	    	})
	    	setTimeout(function(){
		    	$(e).animate({
		    		left:left,
		    		top:top
		    	},time*(i/2))
	    	},time);
	    })
	}
	function autoplay()
	{
		if($(".slider.active").is(":last-of-type"))
		{
			$(".slider").eq(0).addClass("active").siblings(".slider").removeClass("active");
			animat();
		} else {
			$(".slider.active").next(".slider").addClass("active").siblings(".slider").removeClass("active");
			animat();
		}
	}
	next.on("click", function(e:any)
	{
		autoplay();
		
	});
	setInterval(function () {
		autoplay();
	},5000)
});