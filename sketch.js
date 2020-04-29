let inc = 0.2
let scl = 30
let cols, rows, yoff, xoff, fr

function setup() {
	createCanvas(480, 360)
	cols = floor(width / scl)
	rows = floor(height / scl)
	fr= createP('')
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
	fr.html(floor(frameRate()))
	//noLoop()
}