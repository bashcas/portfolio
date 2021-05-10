<template>
  <div class="wrapper">
    <px-header :screenWidth="screenWidth" />
    <router-view />
  </div>
</template>

<script>
import PxHeader from "./components/PxHeader.vue";

export default {
  name: "App",
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  },
  components: {
    PxHeader,
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
@import "./utils/Vars.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: $background;
}

html {
  font-size: 62.5%;
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
  font-family: $font;
}
</style>
