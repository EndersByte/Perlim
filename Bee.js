class Bee {
  constructor() {
    this.xoff = 0
    this.xof = 100000000000
    this.x = 250
    this.y = 150
  }

  show() {
    stroke(200)
    fill(2)
    this.xoff += 0.005
    this.xof += 0.005
    //let x = random(width)
    this.x = map(noise(this.xof), 0, 1, 0, width)
    this.y = map(noise(this.xoff), 0, 1, 0, height)
    ellipse(this.x, this.y, 24)
  }
}