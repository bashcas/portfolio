<template>
  <header :class="[scrollDown ? 'hidden' : '', scrollTop ? 'top' : '']">
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
            <span class="number">00. </span>
            <span>Home</span>
          </a>
        </li>
        <li class="menu-item">
          <a
            :class="{ highlighted: route == '#about' }"
            href="#about"
            v-on:click="handleClickOnMenu()"
          >
            <span class="number">01. </span>
            <span>About</span>
          </a>
        </li>
        <li class="menu-item">
          <a
            :class="{ highlighted: route == '#projects' }"
            href="#projects"
            v-on:click="handleClickOnMenu()"
          >
            <span class="number">02. </span>
            <span>Projects</span>
          </a>
        </li>
        <li class="menu-item">
          <a
            :class="{ highlighted: route == '#contact' }"
            href="#contact"
            v-on:click="handleClickOnMenu()"
          >
            <span class="number">03. </span>
            <span>Contact</span>
          </a>
        </li>
        <li class="menu-item">
          <button class="resume">Resume</button>
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
      lastScrollTop: 0,
      scrollDown: false,
      scrollTop: true,
    };
  },
  props: {
    screenWidth: Number,
  },
  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > this.lastScrollTop) {
          this.scrollDown = true;
          //down
        } else {
          this.scrollDown = false;
          //up
        }
        this.lastScrollTop = st <= 0 ? 0 : st;
        if (st == 0) {
          this.scrollTop = true;
        } else {
          this.scrollTop = false;
        }
      },
      false
    );
  },
  methods: {
    handleClickOnMenu() {
      this.menuOpened = !this.menuOpened;
      setTimeout(() => {
        this.route = window.location.hash;
      }, 0);
      this.$emit("menu");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../utils/Colors.scss";
$main-font: "Calibre", -apple-system, system-ui, sans-serif;
$monospace: "SF Mono", monospace;
header {
  display: flex;
  position: fixed;
  z-index: 6;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  height: 100px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 10px 30px -10px $shadow;
  backdrop-filter: blur(10px);
}
header.hidden {
  transform: translateY(-100%);
  // background-color: rgba()
}
header.top {
  box-shadow: none;
  backdrop-filter: blur(0px);
}

.logo-container img {
  width: 45px;
}

.menu-btn {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
}

.menu-btn__burguer {
  width: 25px;
  height: 3px;
  background: $main-color;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
  &:before {
    content: "";
    position: absolute;
    width: 35px;
    height: 3px;
    background: $main-color;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
    right: 0;
    transform: translateY(-8px);
  }
  &:after {
    content: "";
    position: absolute;
    width: 15px;
    height: 3px;
    background: $main-color;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
    right: 0;
    transform: translateY(8px);
  }
}
/* ANIMATION */
.menu-btn.open {
  .menu-btn__burguer {
    transform: translate(-25px);
    background: transparent;
    box-shadow: none;
    background: $background-color;
    &:before {
      transform: rotate(45deg) translate(17px, -17px);
      background: $background-color;
    }
    &:after {
      transform: rotate(-45deg) translate(10px, 10px) scaleX(2.33);
      // width: 35px;
      background: $background-color;
    }
  }
}

.menu-container {
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80vw;
  transform: translate(100%);
  background-color: $main-color;
  transition: all 0.7s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu-container.open {
  transform: translate(0);
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
  color: $background-color;
  font-family: monospace;
  font-size: 2.4rem;
}

.resume {
  font-size: 2.4rem;
  font-family: $monospace;
  padding: 0.7em 2em;
  background-color: $background-color;
  color: $main-color;
  outline: none;
  border-radius: 5px;
  transition: background-color 0.5s;
  cursor: pointer;
  &:hover {
    background-color: rgba($background-color, 0.1);
  }
}

@media only screen and(min-width: 480px) {
  header {
    padding: 0px 50px;
  }
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
    font-size: 1.3rem;
    &:hover {
      color: $main-color;
    }
    .highlighted {
      color: $main-color;
    }
    .number {
      color: $main-color;
    }
  }

  .resume {
    background-color: transparent;
    font-size: 1.3rem;
    border: 1px solid $main-color;
    padding: 1em 2em;
    &:hover {
      background-color: rgba($main-color, 0.1);
    }
  }
}
</style>
