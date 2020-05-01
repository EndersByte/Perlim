class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height))
    this.vel = p5.Vector.random2D()
    this.acc = createVector(0, 0)
  }
  update() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
  }

  applyForce(force) {
    this.acc.add(force)
  }

  show() {
    stroke(255)
    strokeWeight(3)
    point(this.pos.x, this.pos.y)
  }

  edges() {
    if (this.pos.x > width) this.pos.x = 0
    if (this.pos.x < 0) this.pos.x = width
    if (this.pos.y > height) this.pos.y = 0
    if (this.pos.y < 0) this.pos.y = height
  }

}