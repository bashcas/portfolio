<template>
  <header>
    <div class="logo-container">
      <img src="../assets/images/logo.png" alt="" />
    </div>
    <div
      class="menu-btn"
      :class="{ open: menuOpened }"
      v-on:click="handleClickOnMenu()"
      v-if="screenWidth < 768"
    >
      <div class="menu-btn__burguer"></div>
    </div>
    <nav
      class="menu-container"
      :class="{ open: menuOpened && screenWidth < 768 }"
    >
      <ul class="menu">
        <li class="menu-item">
          <a
            :class="{
              highlighted: route == '#home' || route == '',
            }"
            href="#home"
            v-on:click="handleClickOnMenu()"
          >
            <span class="decorator">00. &#60;</span><span>Home</span
            ><span class="decorator">/&#62;</span>
          </a>
        </li>
        <li class="menu-item">
          <a
            :class="{ highlighted: route == '#about' }"
            href="#about"
            v-on:click="handleClickOnMenu()"
          >
            <span class="decorator">01. &#60;</span><span>About</span
            ><span class="decorator">/&#62;</span>
          </a>
        </li>
        <li class="menu-item">
          <a
            :class="{ highlighted: route == '#projects' }"
            href="#projects"
            v-on:click="handleClickOnMenu()"
          >
            <span class="decorator">02. &#60;</span><span>Projects</span
            ><span class="decorator">/&#62;</span>
          </a>
        </li>
        <li class="menu-item">
          <a
            :class="{ highlighted: route == '#contact' }"
            href="#contact"
            v-on:click="handleClickOnMenu()"
          >
            <span class="decorator">03. &#60;</span><span>Contact</span
            ><span class="decorator">/&#62;</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "PxHeader2",
  data() {
    return {
      menuOpened: false,
      route: window.location.hash,
    };
  },
  props: {
    screenWidth: Number,
  },
  methods: {
    handleClickOnMenu() {
      this.menuOpened = !this.menuOpened;
      console.log(window.location);
      setTimeout(() => {
        this.route = window.location.hash;
      }, 0);
    },
  },

  watch: {},
};
</script>

<style scoped lang="scss">
@import "../utils/Colors.scss";
header {
  display: flex;
  position: fixed;
  z-index: 1;
  width: 100vw;
  justify-content: space-between;
}

.logo-container img {
  width: 45px;
}

.menu-btn {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.menu-btn__burguer {
  width: 25px;
  height: 3px;
  background: $gray;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
}
.menu-btn__burguer::before,
.menu-btn__burguer::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 3px;
  background: $gray;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
}

.menu-btn__burguer::before {
  transform: translateY(-8px);
}

.menu-btn__burguer::after {
  transform: translateY(8px);
}
/* ANIMATION */
.menu-btn.open .menu-btn__burguer {
  transform: translateX(-25px);
  background: transparent;
  box-shadow: none;
}

.menu-btn.open .menu-btn__burguer::before {
  transform: rotate(45deg) translate(17px, -17px);
}

.menu-btn.open .menu-btn__burguer::after {
  transform: rotate(-45deg) translate(17px, 17px);
}

.menu-container {
  position: absolute;
  height: 100vh;
  width: 100vw;
  transform: translate(100%, -100%) scale(0);
  background-color: $main-color;
  border-radius: 50%;
  transition: all 0.7s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu-container.open {
  transform: translate(0, 0);
  border-radius: 0;
}

.menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;
}
.menu-item a {
  text-decoration: none;
  color: black;
  font-family: monospace;
  font-size: 2.4rem;
}

.menu-item a.decorator {
  color: white;
}

.menu-item a.highlighted {
  color: white;
}

@media only screen and (min-width: 768px) {
  header {
    padding: 3.5em 5em;
  }
  .menu-container {
    position: static;
    transform: none;
    border-radius: 0;
    height: auto;
    width: auto;
    background-color: transparent;
  }
  .menu {
    flex-direction: row;
    gap: 5em;
  }
  .menu-item a {
    color: $gray;
    font-size: 1.4rem;
  }
  .menu-item a:hover {
    color: $main-color;
  }
  .menu-item a.highlighted {
    color: $main-color;
  }
  .menu-item a .decorator {
    color: $main-color;
  }
}
</style>
