<template>
  <div class="wrapper" :class="{ horizontal: screenWidth >= 1440 }">
    <px-header
      :screenWidth="screenWidth"
      :mainColor="mainColor"
      :iconsColor="iconsColor"
    />
    <router-view :fontColor="fontColor" class="margin-left" />
  </div>
</template>

<script>
import PxHeader from "./components/PxHeader.vue";
import colorVariables from "./utils/colorVariables";
export default {
  name: "App",
  data() {
    return {
      screenWidth: window.innerWidth,
      mainColor: colorVariables[0].mainColor,
      fontColor: colorVariables[0].fontColor,
      iconsColor: colorVariables[0].iconsColor,
    };
  },
  components: {
    PxHeader,
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
    changeColors() {
      if (this.mainColor == colorVariables[0].mainColor) {
        this.mainColor = colorVariables[1].mainColor;
        this.fontColor = colorVariables[1].fontColor;
        this.iconsColor = colorVariables[1].iconsColor;
      } else {
        this.mainColor = colorVariables[0].mainColor;
        this.fontColor = colorVariables[0].fontColor;
        this.iconsColor = colorVariables[0].iconsColor;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },

  watch: {
    $route() {
      this.changeColors();
    },
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
  align-items: flex-start;
}

@media only screen and (min-width: 1440px) {
  .margin-left {
    margin-left: 100px;
  }
}
</style>
