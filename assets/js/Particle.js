class Particle {
  constructor(
    x = Math.random() * window.innerWidth,
    y = Math.random() * window.innerHeight,
    color = "white"
  ) {
    this.x = x
    this.y = y
    this.size = Math.random() * 10 + 5
    this.speedX = Math.random() * 3 - 1.5
    this.speedY = Math.random() * 3 - 1.5
    this.color = color
  }
  update() {
    this.x += this.speedX
    this.y += this.speedY
    if (this.size > 0.2) this.size -= 0.1
  }
  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

export default Particle
