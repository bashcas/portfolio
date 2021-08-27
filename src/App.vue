<template>
  <px-header2 v-on:menu="blur" class="header" :screenWidth="screenWidth" />
  <social v-if="screenWidth >= 768" />
  <preloader :loading="loading" v-if="loading" />
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
      />
    </div>
  </main>
  <email v-if="screenWidth >= 768" />
</template>

<script>
import PxHeader2 from "./components/PxHeader2.vue";
import Social from "./components/Social.vue";
import Email from "./components/Email.vue";
import Preloader from "./containers/Preloader.vue";
import Home from "./containers/Home.vue";
import About from "./containers/About.vue";
import Projects from "./containers/Projects.vue";
import Contact from "./containers/Contact.vue";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "App",
  data() {
    return {
      screenWidth: window.innerWidth,
      loading: true,
    };
  },
  components: {
    PxHeader2,
    Home,
    About,
    Projects,
    Contact,
    Email,
    Social,
    Preloader,
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
    blur() {
      console.log("event");
      this.$refs.wrapper.classList.toggle("blur");
    },
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.loading = false;
        this.$refs.main.classList.add("loaded");
        document.body.classList.add("loaded");
        AOS.init({ easing: "ease-out-quint" });
      }
      window.addEventListener("resize", this.handleResize);
    };
  },
};
</script>

<style lang="scss">
@import "./utils/Colors.scss";
@font-face {
  font-family: "Calibre";
  src: local("Calibre Semi bold"), local("Calibre-Semi-bold"),
    url("./assets/fonts/Calibre-Semibold/Calibre-Semibold.woff2")
      format("woff2"),
    url("./assets/fonts/Calibre-Semibold/Calibre-Semibold.woff") format("woff"),
    url("./assets/fonts/Calibre-Semibold/Calibre-Semibold.ttf")
      format("truetype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Calibre";
  src: local("Calibre Light"), local("Calibre-Light"),
    url("./assets/fonts/Calibre-Light/Calibre-Light.woff") format("woff"),
    url("./assets/fonts/Calibre-Light/Calibre-Light.ttf") format("truetype"),
    url("./assets/fonts/Calibre-Light/Calibre-Light.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Calibre";
  src: local("Calibre Regular"), local("Calibre-Regular"),
    url("./assets/fonts/Calibre-Regular/Calibre-Regular.woff2") format("woff2"),
    url("./assets/fonts/Calibre-Regular/Calibre-Regular.woff") format("woff"),
    url("./assets/fonts/Calibre-Regular/Calibre-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "SF Mono";
  src: local("SF Mono Regular"), local("SF Mono-Regular"),
    url("./assets/fonts/SFMono-Regular/SFMono-Regular.woff2") format("woff2"),
    url("./assets/fonts/SFMono-Regular/SFMono-Regular.woff") format("woff"),
    url("./assets/fonts/SFMono-Regular/SFMono-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
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
  display: initial;
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
