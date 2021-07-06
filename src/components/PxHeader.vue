<template>
  <header :style="cssVars">
    <div class="menu-icon-container" v-if="screenWidth < 1440">
      <img src="../assets/images/logo2.png" class="logo" alt="" />
      <div
        class="menu-btn"
        :class="{ white: theme == 'dark' }"
        v-on:click="handleClickOnMenu()"
        v-if="screenWidth < 1440"
      >
        <div class="menu-btn__burguer"></div>
      </div>
    </div>
    <nav class="menu-container">
      <ul class="menu">
        <li class="menu-item">
          <div class="menu-item-container">
            <router-link
              v-on:click="handleClickOnMenu()"
              v-if="screenWidth < 768"
              to="/"
            >
              <span>Home</span>
            </router-link>
            <router-link v-else to="/">
              <img
                class="menu-icon"
                src="../assets/images/home.png"
                alt=""
                v-on:click="handleClickOnMenu()"
                :class="{ white: theme == 'light' }"
              />
            </router-link>
          </div>
        </li>
        <li class="menu-item">
          <div class="menu-item-container">
            <router-link
              v-on:click="handleClickOnMenu()"
              v-if="screenWidth < 768"
              to="/about"
            >
              <span>About</span>
            </router-link>
            <router-link v-else to="/about">
              <img
                class="menu-icon"
                src="../assets/images/user.png"
                alt=""
                v-on:click="handleClickOnMenu()"
                :class="{ white: theme == 'light' }"
              />
            </router-link>
          </div>
        </li>
        <li class="menu-item">
          <div class="menu-item-container">
            <router-link
              v-on:click="handleClickOnMenu()"
              v-if="screenWidth < 768"
              to="/projects"
            >
              <span>Projects</span>
            </router-link>
            <router-link v-else to="/projects">
              <img
                class="menu-icon"
                src="../assets/images/portfolio.png"
                alt=""
                v-on:click="handleClickOnMenu()"
                :class="{ white: theme == 'light' }"
              />
            </router-link>
          </div>
        </li>
        <li class="menu-item">
          <div class="menu-item-container">
            <router-link
              v-on:click="handleClickOnMenu()"
              v-if="screenWidth < 768"
              to="/contact"
            >
              <span>Contact</span>
            </router-link>
            <router-link v-else to="/contact">
              <img
                class="menu-icon"
                src="../assets/images/contact.png"
                alt=""
                v-on:click="handleClickOnMenu()"
                :class="{ white: theme == 'light' }"
              />
            </router-link>
          </div>
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
    mainColor: String,
    iconsColor: String,
    fontColor: String,
    theme: String,
  },
  methods: {
    handleClickOnMenu() {
      const menuBtn = document.querySelector(".menu-btn");
      const menuContainer = document.querySelector(".menu-container");

      if (menuBtn != null && !this.menuDeployed) {
        menuBtn.classList.add("open");
        menuContainer.classList.add("open");
        this.menuDeployed = true;
        return;
      } else if (menuBtn != null) {
        menuBtn.classList.remove("open");
        menuContainer.classList.remove("open");
        this.menuDeployed = false;
        return;
      }
      this.menuDeployed = !this.menuDeployed;
    },
  },
  computed: {
    cssVars() {
      console.log(this.iconsColor);
      return {
        "--bg-color": this.mainColor,
        "--icons-color": this.iconsColor,
        "--font-color": this.fontColor,
      };
    },
  },
  mounted() {
    const items = document.querySelectorAll(".menu-item");
    items.forEach((li, index) => {
      li.addEventListener("click", () => {
        if (this.theme == "light") {
          li.style.backgroundColor = "#5900ff";
        } else {
          li.style.backgroundColor = "#00eaff";
        }
        for (let i = 0; i < items.length; i++) {
          if (i == index) continue;
          items[i].style.backgroundColor = "transparent";
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
span {
  font-size: 3.8rem;
}
header {
  background-color: transparent;
  width: 100vw;
  position: fixed;
}

li {
  font-family: "IBM Plex Mono", monospace;
  list-style: none;
  color: var(--font-color);
  a {
    text-decoration: none;
    color: var(--font-color);
  }
}

.menu-btn {
  position: relative;
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
  background: white;
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
  background: white;
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

.menu-icon {
  width: 30px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.menu-icon.white,
.menu-btn.white {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
    brightness(102%) contrast(102%);
}

.logo {
  width: 100px;
}

.menu-icon-container {
  z-index: 2;
  background-color: var(--bg-color);
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: space-between;
  padding: 0.5em 0.8em;
}

.menu-container {
  position: relative;
  height: 100vh;
  background: var(--bg-color);
  transform: translateX(100%);
  transition: all 0.5s ease-in-out;
}

.menu-container.open {
  transform: translateX(0);
}

.menu {
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

@media only screen and (min-width: 768px) {
  .menu-icon-container {
    position: static;
  }
  .menu-container {
    height: auto;
  }
  .menu-item-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    height: 100%;
  }
  .menu-item {
    flex-grow: 1;
  }
  .menu {
    flex-direction: row;
    justify-content: space-around;
  }
}

@media only screen and (min-width: 1440px) {
  header {
    width: auto;
    height: 100vh;
    position: fixed;
  }
  h1 {
    line-height: 90px;
  }
  .menu {
    flex-direction: column;
    justify-content: center;
    gap: 60px;
  }
  .menu-container {
    height: 100%;
    transform: translateX(0);
  }
}
</style>
