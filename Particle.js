class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height))
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)
    this.maxSpeed =2
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
    stroke(255,60)
    strokeWeight(3)
    point(this.pos.x, this.pos.y)
  }


  edges() {
    if (this.pos.x > width)
      this.pos.x = 0
    if (this.pos.x < 0)
      this.pos.x = width
    if (this.pos.y > height)
      this.pos.y = 0
    if (this.pos.y < 0)
      this.pos.y = height
  }
}