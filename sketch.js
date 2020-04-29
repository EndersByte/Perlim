let xoff=0
let inc =0.01
function setup() {
	createCanvas(300, 300)

}

function draw() {
	background(51)
	loadPixels()
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			let index = (x + y * width) * 4
			let r = random(255)
			pixels[index] = r
			pixels[index + 1] = r
			pixels[index + 2] = r
			pixels[index + 3] = 255
		}
	}
	updatePixels()
}