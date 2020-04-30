let inc = 0.2
let scl = 15
let cols, rows, yoff, xoff, fr

function setup() {
	createCanvas(480, 360)
	cols = floor(width / scl)
	rows = floor(height / scl)
	fr = createP('')
}

function draw() {
	background(255)
	yoff = 0
	for (let y = 0; y < rows; y++) {
		xoff = 0.00000000001
		for (let x = 0; x < cols; x++) {
			let index = (x + y * width) * 4
			//let r = random(255)
			let r = noise(xoff, yoff) * TWO_PI
			v = p5.Vector.fromAngle(r)
			xoff += inc
			stroke(0)
			push()
			translate(x*scl,y*scl)
			rotate(v.heading())
			line(0, 0, scl, 0)
			pop()
		}
		yoff += inc
	}
	fr.html(floor(frameRate()))
	//noLoop()
}