let inc = 0.1,
	scl = 15,
	cols, rows,
	yoff = 0,
	xoff = 0,
	zoff = 0,
	fr,
	particles = [],
	vecfield= new Array(cols*rows)

function setup() {
	createCanvas(480, 360)
	cols = floor(width / scl)
	rows = floor(height / scl)
	fr = createP('')

	for (let i = 0; i < 100; i++) {
		particles[i] = new Particle()
	}
}

function draw() {
	background(0)
	yoff = 0
	for (let y = 0; y < rows; y++) {
		xoff = 0.00000000001
		for (let x = 0; x < cols; x++) {
			let index = (x + y * cols)
			//let r = random(255)
			let r = noise(xoff, yoff, zoff) * TWO_PI
			v = p5.Vector.fromAngle(r)
			xoff += inc
			stroke(255,30)
			push()
			translate(x * scl, y * scl)
			rotate(v.heading())
			strokeWeight(1)
			line(0, 0, scl, 0)
			pop()
		}
		yoff += inc
		zoff += 0.0008
	}
	for (let k = 0; k < particles.length; k++) {
		particles[k].update()
		particles[k].show()
		particles[k].edges()
	}
	fr.html(floor(frameRate()))
	//noLoop()
}