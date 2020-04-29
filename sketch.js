let inc = 0.2
let scl = 5
let cols, rows
let yoff, xoff

function setup() {
	createCanvas(480, 360)
	cols = floor(width / scl)
	rows = floor(height / scl)
}

function draw() {
	background(51)

	yoff +=2*inc
	for (let y = 0; y < rows; y++) {
		xoff +=2*inc
		for (let x = 0; x < cols; x++) {
			let index = (x + y * width) * 4
			//let r = random(255)
			let r = noise(xoff, yoff) * 255
			fill(r)
			rect(x * scl, y * scl, scl, scl)
			xoff += inc
		}
		yoff += inc
	}
	//noLoop()
}