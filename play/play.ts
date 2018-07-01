///<reference path="p5.d.ts"/>
///<reference path="bird.ts"/>
let fly:bird;
let wall:any[] = [];
function setup():void
{
	createCanvas(windowWidth,500);
	background("#000");
	fly = new bird();
	wall.push(new pipe());
	setInterval(function () {
		wall.push(new pipe());
	},2000);
}
function draw():void
{
	background("#000");
	fly.show();
	fly.down();	
	fly.screenoff();
	for (let i in wall)
	{
		if (wall[i].remove())
		{
			wall.splice(i, 1);
		}
		if (wall[i].check(fly))
		{
			wall[i].color = "#f00";
			wall[i].show();
			noLoop();
		}
		wall[i].left();
		wall[i].show();
	}
}
function keyPressed():void
{
	if(key == ' ')
	{
		fly.up();
	}
}