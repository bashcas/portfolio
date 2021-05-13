<template>
  <div class="wrapper" :class="{ horizontal: screenWidth >= 1440 }">
    <px-header
      class="header"
      :screenWidth="screenWidth"
      :mainColor="mainColor"
      :iconsColor="iconsColor"
      :fontColor="fontColor"
    />
    <router-view class="main" :fontColor="fontColor" :mainColor="mainColor" />
    <px-nav
      v-if="screenWidth < 768"
      :mainColor="mainColor"
      :iconsColor="iconsColor"
      :fontColor="fontColor"
    />
  </div>
</template>

<script>
import PxHeader from "./components/PxHeader.vue";
import PxNav from "./components/PxNav.vue";
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
    PxNav,
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
@import "./utils/Fonts.scss";
$main-font: "Calibre", -apple-system, system-ui, sans-serif;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #1e1f21;
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
  font-family: $main-font;
  font-weight: 600;
}
p {
  font-family: $main-font;
  font-weight: 400;
}

main {
  padding: 50px;
}

.horizontal {
  display: flex;
  align-items: flex-start;
}
.wrapper {
  position: relative;
}
.header {
  z-index: 2;
}
.main {
  z-index: 1;
}
</style>
