<template>
  <div>
    <!-- <px-loader /> -->
    <px-header2
      v-on:trans="trans"
      v-on:menu="blur"
      class="header"
      :screenWidth="screenWidth"
    />
    <social v-if="screenWidth >= 768" :dark="dark" />
    <main ref="main">
      <div class="wrapper" ref="wrapper">
        <home
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          :screenWidth="screenWidth"
          class="section"
          :dark="dark"
        />
        <about
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          :screenWidth="screenWidth"
          class="section"
          :dark="dark"
        />
        <projects :screenWidth="screenWidth" class="section" :dark="dark" />
        <contact
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
          data-aos-duration="1000"
          :screenWidth="screenWidth"
          class="section"
          v-on:feedback="displayFeedbackMessage($event)"
        />
      </div>
    </main>
    <px-footer />
    <email v-if="screenWidth >= 768" />
    <div ref="feedback" class="feedback-message">{{ feedback }}</div>
  </div>
</template>

<script>
import AOS from "aos"
import "aos/dist/aos.css"
export default {
  name: "App",
  data() {
    return {
      screenWidth: 0,
      loading: true,
      menuOpened: false,
      feedback: "default",
      dark: false
    }
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth
    },
    blur() {
      if (this.screenWidth < 850) {
        this.$refs.wrapper.classList.toggle("blur")
        this.menuOpened = !this.menuOpened
        if (this.menuOpened) {
          document.body.style.overflowY = "hidden"
        } else {
          document.body.style.overflowY = "auto"
        }
      }
    },
    trans() {
      document.documentElement.classList.add("transition")
      this.dark = !this.dark
      window.setTimeout(() => {
        document.documentElement.classList.remove("transition")
      })
    },
    displayFeedbackMessage(message) {
      this.feedback = message
      this.$refs.feedback.classList.add("show")
      setTimeout(() => {
        this.$refs.feedback.classList.add("go")
      }, 5000)
      setTimeout(() => {
        this.$refs.feedback.classList.remove("show")
      }, 6000)
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.loading = false
        this.$refs.main.classList.add("loaded")
        document.body.classList.add("loaded")
        AOS.init({ easing: "ease-out-quint" })
      }
      window.addEventListener("resize", this.handleResize)
    }
    this.screenWidth = window.innerWidth
  }
}
</script>

<style lang="scss">
$main-font: "Calibre", -apple-system, system-ui, sans-serif;
$monospace: "SF Mono", monospace;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  --main-color: #1a73e8;
  --main-color-rgb: 26, 115, 232;
  --gray: #1b407c;
  --light-gray: #125bc7;
  --lightest-gray: #0a192f;
  --background-color: #ffffff;
  --background-color-light: #f1f1f1;
  --shadow: rgba(177, 208, 255, 0.7);
}

html[data-theme="dark"] {
  --main-color: #64ffda;
  --main-color-rgb: 100, 255, 218;
  --gray: #8892b0;
  --light-gray: #a8b2d1;
  --lightest-gray: #ccd6f6;
  --background-color: #0a192f;
  --background-color-light: #112240;
  --shadow: rgba(2, 12, 27, 0.7);
}
html.transition,
html.transition *,
html.transition *:before,
html.transition *:after {
  transition: all 750ms !important;
  transition-delay: 0 !important;
}

body {
  background-color: var(--background-color);
  overflow-x: hidden;
  overflow-y: hidden;
}
body.loaded {
  overflow-y: auto;
}

body::-webkit-scrollbar {
  width: 4px;
}

body::-webkit-scrollbar-thumb {
  background: var(--main-color);
  border-radius: 5px;
  height: 10px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $main-font;
  font-weight: 600;
  color: var(--main-color);
}
p,
li {
  font-family: $main-font;
  font-weight: 400;
  color: whitesmoke;
}

h1::selection,
h2::selection,
h3::selection,
h4::selection,
h5::selection,
h6::selection,
p::selection {
  background-color: var(--lightest-gray);
  color: var(--light-gray);
}

main {
  margin: auto 0;
  position: relative;
  opacity: 0;
  transition: opacity 0.5s linear;
}
main.loaded {
  display: block;
  opacity: 1;
}
main span,
a {
  font-family: $monospace, monospace;
}

.wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 25px;
}
.wrapper.blur {
  filter: blur(2px);
}

.feedback-message {
  position: fixed;
  border-radius: 4px;
  font-size: clamp(1.4rem, 3vw, 1.2rem);
  pointer-events: none;
  color: var(--main-color);
  outline: 1px solid var(--main-color);
  background-color: var(--background-color-light);
  padding: 15px 20px;
  font-family: $monospace;
  overflow-x: hidden;
  right: 0;
  bottom: 0;
  transform: translate(-42px, 50px);
  transition: all 0.4s ease-in;
  &::after {
    content: "";
    position: absolute;
    background-color: var(--main-color);
    height: 4px;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  &.show {
    transform: translate(-42px, -30px);
    &::after {
      animation: feedbackAnimate 5s linear forwards;
    }
  }
  &.go {
    transform: translate(-42px, 50px);
  }
}

@keyframes feedbackAnimate {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@media only screen and(min-width: 480px) {
  .wrapper {
    padding: 0 50px;
  }
}

@media only screen and(min-width: 768px) {
  .wrapper {
    padding: 0 75px;
  }
}
@media only screen and(min-width: 1080px) {
  .social {
    left: 40px;
  }
  .email {
    right: 40px;
  }
}
@media only screen and(min-width: 1250px) {
  .wrapper {
    padding: 0 150px;
  }
}
</style>
