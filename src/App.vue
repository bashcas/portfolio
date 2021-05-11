<template>
  <div class="wrapper" :class="{ horizontal: screenWidth >= 1440 }">
    <px-header :screenWidth="screenWidth" />
    <router-view class="margin-left" />
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

.horizontal {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media only screen and (min-width: 1440px) {
  .margin-left {
    margin-left: 150px;
  }
}
</style>
