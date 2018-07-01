class bird 
{
	y:number;
	gravity:number;
	velocity:number;
	lift:number;
	x:number;
	constructor()
	{
		this.y = height / 2;
		this.x = 100;
		this.velocity = 0;
		this.lift = -10;
		this.gravity = 0.5;
	}
	show():void
	{
		fill("#fff");
		noStroke();
		ellipse(this.x, this.y, 20, 20);
	}
	up():void
	{
		this.velocity += this.lift;
	}
	down():void
	{
		this.velocity += this.gravity;
		this.y += this.velocity;
	}
	screenoff():void
	{
		if(this.y > height)
		{
			this.y = height;
			this.velocity = 0;
		} else if (this.y < 0) {
			this.y = 0;
			this.velocity = 0;
		}
	}
}