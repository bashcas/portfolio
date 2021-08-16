<template>
  <section id="home">
    <canvas
      id="canvas"
      ref="canvas"
      @mousemove="handleMouseMove($event)"
      @click="handleMouseClick($event)"
    ></canvas>
    <div class="content-container">
      <p class="greet">Hi, my name is</p>
      <h1 class="heading">
        Sebastián Castañeda.
      </h1>
      <h2 class="heading">
        I build amazing experiences.
      </h2>
      <p class="disclaimer">
        I'm a Bogotá-based web developer who specializes in building functional
        and beautiful website interfaces. Although, I also know some backend.
        Currently, I'm an active systems engineering student at Universidad
        Nacional de Colombia.
      </p>
      <div class="button-container">
        <a href="#contact">
          <button class="call-to-action">Get In Touch</button></a
        >
        <img class="arrow" src="../assets/images/left-arrow.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import Particle from "../utils/Particle";

export default {
  name: "Home",
  data() {
    return {
      mouse: {
        x: null,
        y: null,
      },
      particles: [],
      hue: 0,
      ctx: null,
    };
  },
  mounted() {
    //canvas background
    this.$refs.canvas.width = window.innerWidth;
    this.$refs.canvas.height = window.innerHeight;
    this.ctx = this.$refs.canvas.getContext("2d");
    this.animate();
    window.addEventListener("resize", () => {
      this.$refs.canvas.width = window.innerWidth;
      this.$refs.canvas.height = window.innerHeight;
    });
  },

  methods: {
    handleMouseClick: function(e) {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
      for (let i = 0; i < 5; i++) {
        this.particles.push(
          new Particle(
            this.mouse.x,
            this.mouse.y,
            "hsl(" + this.hue + ", 100%, 50%)"
          )
        );
      }
    },
    handleMouseMove: function(e) {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
      this.particles.push(
        new Particle(
          this.mouse.x,
          this.mouse.y,
          `hsl(47, 100%, ${(this.hue % 100) + 20}%)`
        )
      );
    },
    handleResize() {},
    animate() {
      this.ctx.clearRect(
        0,
        0,
        this.$refs.canvas.width,
        this.$refs.canvas.height
      );
      // For trails
      // ctx.fillStyle = "rgba(0, 0, 0, 0.02)"
      // ctx.fillRect(0, 0, canvas.width, canvas.height)
      this.handleParticles();
      this.hue++;
      requestAnimationFrame(this.animate);
    },
    handleParticles() {
      for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].update();
        this.particles[i].draw(this.ctx);
        if (this.particles[i].size <= 0.3) {
          this.particles.splice(i, 1);
          i--;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/Colors.scss";
$main-font: "Calibre", -apple-system, system-ui, sans-serif;
$monospace: "SF Mono", monospace;
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: auto 0;
  min-height: 100vh;
}

h1,
h2 {
  font-size: clamp(4rem, 8vw, 8rem);
}

h1 {
  color: $lighter-gray;
}

h2 {
  color: $gray;
}

p {
  color: $gray;
}

h1::selection,
h2::selection,
p::selection {
  background-color: $main-color;
}

.content-container {
  position: relative;
}

.greet {
  font-size: 1.6rem;
  color: $main-color;
  margin-bottom: 20px;
  font-family: $monospace;
}

.disclaimer {
  font-size: clamp(1.8rem, 3vw, 2rem);
  max-width: 500px;
  margin-top: 20px;
}

.call-to-action {
  font-size: 1.5rem;
  font-family: $monospace;
  padding: 1.5em 2em;
  background-color: transparent;
  color: $main-color;
  outline: none;
  border: 1px solid $main-color;
  border-radius: 5px;
  transition: background-color 0.5s;
  cursor: pointer;
}
.button-container {
  display: flex;
  align-items: center;
  margin-top: 50px;
  z-index: 5;
}
.arrow {
  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(250deg)
    brightness(108%) contrast(101%);
  margin-left: 20px;
  width: 20px;
}

#canvas {
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
}

.call-to-action:hover {
  background-color: rgba($main-color, 0.1);
}

@media only screen and (min-width: 412px) {
  .disclaimer {
    margin-top: 10px;
  }
}

@media only screen and (min-width: 768px) {
  .disclaimer {
    margin-top: 20px;
  }
  section {
    padding: 15em 2em 15em;
  }
}
</style>
