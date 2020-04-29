let inc = 0.01

function setup() {
	createCanvas(300, 300)

}

function draw() {
	background(51)
	loadPixels()
	let yoff = 0
	for (let y = 0; y < height; y++) {
		let xoff = 0
		for (let x = 0; x < width; x++) {
			let index = (x + y * width) * 4
			//let r = random(255)
			let r = noise(xoff, yoff) * 255
			pixels[index] = r
			pixels[index + 1] = r
			pixels[index + 2] = r
			pixels[index + 3] = 255
			xoff += inc
		}
		yoff += inc
	}
	updatePixels()
}