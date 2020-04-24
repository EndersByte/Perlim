let xoff = 0

function setup() {
	//createCanvas(1080, 720)
	createCanvas(500, 300)
}

function draw() {
	background(51)
	//let x = random(width)
	let x = map(noise(xoff), 0, 1, 0, width)
	xoff += 0.03
	ellipse(x, 200, 24)
}