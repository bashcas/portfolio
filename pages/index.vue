<template>
  <div>
    <!-- <px-loader /> -->
    <px-header2 v-on:menu="blur" class="header" :screenWidth="screenWidth" />
    <social v-if="screenWidth >= 768" />
    <main ref="main">
      <div class="wrapper" ref="wrapper">
        <home
          data-aos="fade"
          data-aos-delay="50"
          data-aos-duration="1000"
          :screenWidth="screenWidth"
          class="section"
        />
        <about
          data-aos="fade"
          data-aos-delay="50"
          data-aos-duration="1000"
          :screenWidth="screenWidth"
          class="section"
        />
        <projects
          data-aos="fade"
          data-aos-delay="50"
          data-aos-duration="1000"
          :screenWidth="screenWidth"
          class="section"
        />
        <contact
          data-aos="fade"
          data-aos-delay="50"
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
      feedback: "default"
    }
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth
    },
    blur() {
      if (this.screenWidth < 768) {
        this.$refs.wrapper.classList.toggle("blur")
        this.menuOpened = !this.menuOpened
        if (this.menuOpened) {
          document.body.style.position = "fixed"
          document.body.style.top = `-${window.scrollY}px`
        } else {
          const scrollY = document.body.style.top
          document.body.style.position = ""
          document.body.style.top = ""
          window.scrollTo(0, parseInt(scrollY || "0") * -1)
        }
      }
    },
    displayFeedbackMessage(message) {
      this.feedback = message
      this.$refs.feedback.classList.add("show")
      setTimeout(() => {
        this.$refs.feedback.classList.remove("show")
      }, 7000)
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
@import "~/assets/styles/Colors.scss";
$main-font: "Calibre", -apple-system, system-ui, sans-serif;
$monospace: "SF Mono", monospace;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: $background-color;
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
  background: $main-color;
  border-radius: 5px;
  height: 10px;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
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
  color: $main-color;
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
  background-color: $main-color;
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
  color: $main-color;
  outline: 1px solid $main-color;
  background-color: $background-color-light;
  padding: 15px 20px;
  font-family: $monospace;
  bottom: 0;
  right: 0;
  transform: translate(-42px, 50px);
  transition: all 0.2s ease-in;
}
.feedback-message.show {
  transform: translate(-42px, -30px);
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
