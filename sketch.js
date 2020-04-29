let inc = 0.01
let scl = 20
let cols, rows

function setup() {
	createCanvas(300, 300)
	cols = floor(width / scl)
	rows = floor(height / scl)
}

function draw() {
	background(51)
	
	let yoff = 0
	for (let y = 0; y < rows; y++) {
		let xoff = 0
		for (let x = 0; x < cols; x++) {
			let index = (x + y * width) * 4
			let r = random(255)
			//let r = noise(xoff, yoff) * 255
			fill (r)
			rect(x*scl,y*scl,scl,scl)
			xoff += inc
		}
		yoff += inc
	}
	
	//noLoop()
}