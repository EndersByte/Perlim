let inc = 0.1
let scl = 15
let cols, rows, yoff, xoff, fr,zoff

function setup() {
	createCanvas(480, 360)
	cols = floor(width / scl)
	rows = floor(height / scl)
	fr = createP('')
	zoff=0
}

function draw() {
	background(0)
	yoff = 0
	for (let y = 0; y < rows; y++) {
		xoff = 0.00000000001
		for (let x = 0; x < cols; x++) {
			let index = (x + y * width) * 4
			//let r = random(255)
			let r = noise(xoff, yoff,zoff) * TWO_PI
			v = p5.Vector.fromAngle(r)
			xoff += inc
			stroke(255)
			push()
			translate(x*scl,y*scl)
			rotate(v.heading())
			line(0, 0, scl, 0)
			pop()
		}
		yoff += inc
		zoff+=0.002
	}
	fr.html(floor(frameRate()))
	//noLoop()
}