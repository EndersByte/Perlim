let inc = 0.01
let start = 0

function setup() {
	//createCanvas(1080, 720) 
	createCanvas(500, 300)
}

function draw() {
	let xoff = start
	background(51)
	stroke(255)
	noFill()
	beginShape()
	for (var x = 0; x < width; x++) {
		//let y = vertex(x,random(height))
		let y = map(noise(xoff), 0, 1, 0, height)
		vertex(x, y)
		xoff += inc
	}
	endShape()
	//noLoop()
	//frameRate(2)
	start += inc
}