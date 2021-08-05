<template>
  <px-header2 class="header" :screenWidth="screenWidth" />
  <social v-if="screenWidth >= 768" />
  <main>
    <div class="wrapper">
      <home :screenWidth="screenWidth" class="section" />
      <about :screenWidth="screenWidth" class="section" />
      <projects :screenWidth="screenWidth" class="section" />
      <contact :screenWidth="screenWidth" class="section" />
    </div>
  </main>
  <email v-if="screenWidth >= 768" />
</template>

<script>
import PxHeader2 from "./components/PxHeader2.vue";
import Social from "./components/Social.vue";
import Email from "./components/Email.vue";
import Home from "./containers/Home.vue";
import About from "./containers/About.vue";
import Projects from "./containers/Projects.vue";
import Contact from "./containers/Contact.vue";
export default {
  name: "App",
  data() {
    return {
      screenWidth: window.innerWidth,
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
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss">
@import "./utils/Fonts.scss";
@import "./utils/Colors.scss";
$main-font: "Calibre", -apple-system, system-ui, sans-serif;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: $background-color;
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
}

.wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 50px;
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
