<template>
  <header>
    <div class="menu-icon-container" :class="{ absolute: menuDeployed }">
      <img
        src="../assets/images/menu-icon.svg"
        alt="menu-icon"
        class="menu-icon"
        v-on:click="handleClickOnMenu()"
        v-if="screenWidth < 1024"
      />
    </div>
    <nav class="menu-container" v-show="menuDeployed">
      <ul class="menu">
        <li>
          <span v-if="screenWidth < 768">Home</span>
          <img
            v-else
            class="menu-img"
            src="../assets/images/home.svg"
            alt="home"
          />
        </li>
        <li>
          <span v-if="screenWidth < 768">About</span>
          <img
            v-else
            class="menu-img"
            src="../assets/images/about.svg"
            alt="about"
          />
        </li>
        <li>
          <span v-if="screenWidth < 768">Projects</span>
          <img
            v-else
            class="menu-img"
            src="../assets/images/portfolio.svg"
            alt="portfolio"
          />
        </li>
        <li>
          <span v-if="screenWidth < 768">Contact</span>
          <img
            v-else
            class="menu-img"
            src="../assets/images/contact.svg"
            alt="contact"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "PxHeader",
  data() {
    return {
      menuDeployed: false,
    };
  },
  props: {
    screenWidth: Number,
  },
  methods: {
    handleClickOnMenu() {
      if (this.screenWidth < 768) {
        this.menuDeployed = !this.menuDeployed;
      } else {
        this.menuDeployed = !this.menuDeployed;
        //display menu on other way
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/Vars.scss";

h1,
span {
  font-family: $font;
}
span {
  font-size: 3.8rem;
}
header {
  background-color: $first-color;
  width: 100%;
  position: absolute;
}

li {
  list-style: none;
}

.menu-icon {
  width: 50px;
  cursor: pointer;
}

.menu-icon-container {
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 15px;
}

.menu-container {
  z-index: 1;
  position: relative;
  height: 100vh;
}

.menu {
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.absolute {
  position: absolute;
}

@media only screen and (min-width: 768px) {
  .menu-icon-container {
    position: static;
  }
  .menu-icon {
    width: 60px;
  }
  .menu-container {
    height: initial;
    padding: 15px;
  }
  .menu {
    flex-direction: row;
    justify-content: space-around;
  }
  .menu-img {
    width: 60px;
    height: 60px;
  }
}
</style>
