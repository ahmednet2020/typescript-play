class pipe 
{
	top:number;
	bottom:number;
	x:number;
	width:number;
	color:string;
	speed:number;
	spacing:number;
	center:number;
	rect:number;
	position:string;
	constructor()
	{
		// this.spacing = random(20, height / 4);
		// this.center = random(0,height);
		// this.top = this.center - this.spacing /2;
		// this.bottom = height - (this.center + this.spacing /2);
		this.bottom = random(50,height);
		this.x = width;
		this.width = 20;
		this.color = "#fff";
		this.speed = 5;
		this.rect = Math.round(random(0,4));
		this.position = "";
	}
	show():void
	{
		fill(this.color);
		noStroke();
		//rect(this.x,0,this.width,this.top);
		//rect(this.x,height - this.bottom,this.width,this.bottom);

		switch(this.rect)
		{
			case 0:
			case 1:
			rect(this.x,height - this.bottom,this.width,this.bottom);
			this.position = "bottom";
			break;
			case 2:
			case 3:
			case 4:
			rect(this.x,0,this.width,this.bottom);
			this.position = "top";
			break;
		}
	}
	left():void
	{
		this.x -= this.speed;
	}
	check(bird:any):boolean
	{
		let check:any;
		let status:boolean = false;
		switch (this.position) {
			case "top":
				check = bird.y < this.bottom;
				break;
			case "bottom":
				check = bird.y > (height - this.bottom);
				break;
		}
		if(bird.x > this.x && bird.x < (this.x + this.width))
		{
			if (check)
			{
				status = true;
			}
		} else {
			status =  false;
		}
		return status;
	}
	remove():boolean
	{
		if(this.x < 0)
		{
			return true;
		} else {
			return false;
		}
	}
}