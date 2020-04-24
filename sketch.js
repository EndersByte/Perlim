let xoff = 0

function setup() {
	createCanvas(1080, 720);
	//createCanvas(1080, 720) 
	createCanvas(500, 300)
}

function draw() {
	background(51)
	stroke(255)
	noFill()
	beginShape()
	for (var x = 0; x < width; x++) {
		//vertex(x,random(height))
		vertex(x, map(noise(xoff), 0, 1, 0, height))
		xoff += 0.03
	}
	endShape()
	noLoop()
}
