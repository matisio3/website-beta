const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");

let bubleCord = [];
let bals = 3;
for(let i = 0; i < balls;i++){
	bubleCord.push({
		x:Math.random() * innerWidth,
		y:Math.random() * innerHeight
	});
}

function draw(){
	for( let i = 0; i < bubleCord.length; i++){
		let buble = bubleCord[i];
		c.beginPath();
		c.arc(buble.x, buble.y,30,0,Math.PI*2,false);
		c.stroke();
		c.fill();
	}
	c.beginPath();
	for(let i = 0; i<bubleCord.length;i++){
		let l1 = bubleCord[i];
		c.moveTo(l1.x,l1.y);
		for(let j = 0; j< bublleCord.length;j++){
			let l2 = bubleCord[j];
			if(distance(l1,l2 < 150){
				c.lineTo(l2.x,l2.y);
			c.lineTo(l2.x,l2.y);
		}
	}
	function distance(piont1,piont2){
		let dx = 0;
		let dy = 0;
		
		dx = piont2.x - piont1.x;
		dx = dx * dx;
		dy = piont2.y - piont1.x;
		dy = dx * dx;
		
		return Math.sqrt(dx + dy);
}
draw();