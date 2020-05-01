class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height))
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)
    this.maxSpeed = 4
    this.prevPos = this.pos.copy()
  }

  update() {
    this.vel.add(this.acc)
    this.vel.limit(this.maxSpeed)
    this.pos.add(this.vel)
    this.acc.mult(0)

  }

  follow(field) {
    let x = floor(this.pos.x / scl)
    let y = floor(this.pos.y / scl)
    let index = x + (y * cols)
    this.acc.add(field[index])
  }

  show() {
    stroke(0, 25) // stroke alto melhor strokeweight 2 ou 3
    strokeWeight(1)
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
    //point(this.pos.x, this.pos.y)
    this.linectr()
  }

  linectr() {
    this.prevPos.x = this.pos.x
    this.prevPos.y = this.pos.y
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = 0
      this.linectr()
    }
    if (this.pos.x < 0) {
      this.pos.x = width
      this.linectr()
    }
    if (this.pos.y > height) {
      this.pos.y = 0
      this.linectr()
    }
    if (this.pos.y < 0) {
      this.pos.y = height
      this.linectr()
    }
  }
}