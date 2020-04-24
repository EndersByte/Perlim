let xoff = 0,
	xof = 100000000000

function setup() {
	//createCanvas(1080, 720)
	createCanvas(500, 300)
}

function draw() {
	background(51)
	//let x = random(width)
	let x = map(noise(xof), 0, 1, 0, width)
	let y = map(noise(xoff), 0, 1, 0, height)
	xoff += 0.005
	xof	 += 0.005
	stroke(200)
	fill(2)
	ellipse(x, y, 24)
}