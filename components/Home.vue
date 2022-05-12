<template>
  <section id="home">
    <canvas
      v-if="screenWidth >= 1280"
      id="canvas"
      ref="canvas"
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
        I’m a software engineer who specializes in creating good-looking and functional applications. 
        Nowdays, I study Systems Enginering and Computer Science at Universidad Nacional de Colombia.
      </p>
      <div class="button-container">
        <a href="#contact">
          <button class="call-to-action">
            Get In Touch
          </button></a
        >
        <img
          class="arrow"
          :class="dark ? 'dark' : ''"
          src="../assets/images/left-arrow.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
import Particle from "~/assets/js/Particle"

export default {
  name: "Home",
  data() {
    return {
      mouse: {
        x: null,
        y: null
      },
      particles: [],
      hue: 0,
      ctx: null,
      requestId: 0,
      changeWidthCount: 0
    }
  },

  props: {
    screenWidth: Number,
    dark: Boolean
  },

  mounted() {
    //canvas background
    setTimeout(() => {
      if (this.screenWidth >= 1280) {
        this.$refs.canvas.width = window.innerWidth
        this.$refs.canvas.height = window.innerHeight
        this.ctx = this.$refs.canvas.getContext("2d")
        this.animate()
        window.addEventListener("resize", () => {
          if (this.$refs.canvas != undefined) {
            this.$refs.canvas.width = window.innerWidth
            this.$refs.canvas.height = window.innerHeight
          }
        })
      }
    }, 5)
  },

  methods: {
    handleMouseClick: function(e) {
      this.mouse.x = e.x
      this.mouse.y = e.y
      for (let i = 0; i < 5; i++) {
        this.particles.push(
          new Particle(
            this.mouse.x,
            this.mouse.y,
            "hsl(" + this.hue + ", 100%, 50%)"
          )
        )
      }
    },

    animate() {
      if (this.$refs.canvas != undefined) {
        this.ctx.clearRect(
          0,
          0,
          this.$refs.canvas.width,
          this.$refs.canvas.height
        )
        this.handleParticles()
        this.hue++
        this.requestId = requestAnimationFrame(this.animate)
      } else {
        cancelAnimationFrame(this.requestId)
      }
    },
    handleParticles() {
      for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].update()
        this.particles[i].draw(this.ctx)
        if (this.particles[i].size <= 0.3) {
          this.particles.splice(i, 1)
          i--
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
  color: var(--lightest-gray);
}

h2 {
  color: var(--gray);
}

p {
  color: var(--gray);
}

h1::selection,
h2::selection,
p::selection {
  background-color: var(--main-color);
}

.content-container {
  position: relative;
}

.greet {
  font-size: 1.6rem;
  color: var(--main-color);
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
  color: var(--main-color);
  outline: none;
  border: 1px solid var(--main-color);
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
  filter: invert(7%) sepia(21%) saturate(4255%) hue-rotate(194deg)
    brightness(94%) contrast(97%);
  margin-left: 20px;
  width: 20px;
  animation: arrow-bounce 1s linear infinite;
  animation-direction: alternate;
}

.arrow.dark {
  filter: invert(85%) sepia(16%) saturate(599%) hue-rotate(194deg)
    brightness(99%) contrast(95%);
}

@keyframes arrow-bounce {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(50%);
  }
}

#canvas {
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
}

.call-to-action:hover {
  background-color: rgba(var(--main-color-rgb), 0.1);
}

@media only screen and (min-width: 412px) {
  .disclaimer {
    margin-top: 10px;
  }
}

@media only screen and (min-width: 850px) {
  .disclaimer {
    margin-top: 20px;
  }
  section {
    padding: 15em 2em 15em;
  }
}
</style>
