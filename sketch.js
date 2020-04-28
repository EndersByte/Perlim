
let xoff = 0.000000000000000000001
function setup() {
	//createCanvas(1080, 720);
	//createCanvas(1080, 720) 
	createCanvas(500, 300)
}

function draw() {
	
	background(51)
	stroke(255)
	noFill()
	beginShape()
	for (var x = 0; x < width; x++) {
		//let y = vertex(x,random(height))
		let y = map(noise(xoff), 0, 1, 0, height)
		vertex(x, y)
		xoff += 0.01
	}
	endShape()
	//noLoop()
	frameRate(2)
}