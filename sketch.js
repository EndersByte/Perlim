let xoff = 0,
	xof = 100000000000,
	bee

function setup() {
	//createCanvas(1080, 720)
	createCanvas(500, 300)
	bee =	new Bee()
}

function draw() {
	background(51)
	bee.show()
}