<template>
  <header :style="cssVars">
    <div
      class="menu-icon-container"
      :class="{ absolute: menuDeployed }"
      v-if="screenWidth < 1024"
    >
      <img
        src="../assets/images/menu-icon.svg"
        alt="menu-icon"
        class="menu-icon"
        v-on:click="handleClickOnMenu()"
        v-if="screenWidth < 1024"
      />
    </div>
    <nav class="menu-container" v-show="menuDeployed || screenWidth >= 1024">
      <ul class="menu">
        <li>
          <router-link v-if="screenWidth < 768" to="/">
            <span>Home</span>
          </router-link>
          <router-link v-else to="/">
            <svg
              class="menu-img"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 60"
            >
              <g clip-path="url(#clip0)" fill="#000">
                <path
                  d="M59.362 24.3825L30.921 3.55868c-.5484-.40148-1.2935-.40148-1.8417 0L.638154 24.3825c-.6946877.5088-.845625 1.4842-.336914 2.1789.50871.6947 1.4843.8454 2.17887.3369L30.0001 6.74864 57.52 26.8982c.2775.2033.6.3012.9197.3012.48 0 .9537-.2209 1.2591-.6381.5088-.6946.3579-1.67-.3368-2.1788z"
                />
                <path
                  d="M51.8255 27.2512c-.8609 0-1.559.698-1.559 1.559v24.8143H37.7952V40.0793c0-4.2985-3.4971-7.7953-7.7953-7.7953s-7.7953 3.4971-7.7953 7.7953v13.5453H9.73312V28.8103c0-.861-.69808-1.559-1.55894-1.559s-1.55895.698-1.55895 1.559v26.3734c0 .861.69809 1.5589 1.55895 1.5589H23.7635c.8199 0 1.4908-.6334 1.5529-1.4375.0037-.0365.0061-.0763.0061-.1214V40.0794c0-2.5792 2.0982-4.6774 4.6774-4.6774 2.5792 0 4.6774 2.0983 4.6774 4.6774v15.1043c0 .0449.0024.084.0061.12.0614.8047.7325 1.4389 1.5528 1.4389h15.5894c.861 0 1.5589-.6979 1.5589-1.5589V28.8103c-.0001-.8611-.6981-1.5591-1.559-1.5591z"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <path fill="#fff" d="M0 0h60v60H0z" />
                </clipPath>
              </defs>
            </svg>
          </router-link>
        </li>
        <li>
          <router-link v-if="screenWidth < 768" to="/about">
            <span>About</span>
          </router-link>
          <router-link v-else to="/about">
            <svg
              class="menu-img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M510.702 438.722c-2.251-10.813-12.84-17.754-23.657-15.503-10.814 2.251-17.755 12.843-15.503 23.656 1.297 6.229-.248 12.613-4.236 17.519-2.31 2.841-7.461 7.606-15.999 7.606H60.693c-8.538 0-13.689-4.766-15.999-7.606-3.989-4.905-5.533-11.29-4.236-17.519 20.756-99.695 108.691-172.521 210.24-174.977 1.759.068 3.526.102 5.302.102 1.782 0 3.556-.035 5.322-.103 71.532 1.716 137.648 37.947 177.687 97.66 6.151 9.175 18.574 11.625 27.75 5.474 9.174-6.151 11.625-18.575 5.473-27.749-32.817-48.944-80.47-84.534-134.804-102.417C370.538 220.036 392 180.477 392 136 392 61.01 330.991 0 256 0S120 61.01 120 136c0 44.504 21.488 84.084 54.633 108.911-30.368 9.998-58.863 25.555-83.803 46.069-45.732 37.617-77.529 90.086-89.532 147.742-3.762 18.067.745 36.623 12.363 50.909C25.222 503.847 42.365 512 60.693 512h390.613c18.329 0 35.472-8.153 47.032-22.369 11.62-14.286 16.126-32.842 12.364-50.909zM160 136c0-52.935 43.065-96 96-96s96 43.065 96 96c0 51.305-40.455 93.339-91.141 95.878-1.617-.03-3.237-.045-4.859-.045-1.614 0-3.228.016-4.84.046C200.465 229.35 160 187.312 160 136z"
              />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link v-if="screenWidth < 768" to="/projects">
            <span>Projects</span>
          </router-link>
          <router-link v-else to="/projects">
            <svg
              class="menu-img"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M67.962 12.4419C67.9578 12.4419 67.9535 12.4414 67.9492 12.4414H49.3555V10.3906C49.3555 6.99829 46.5955 4.23828 43.2031 4.23828H26.7969C23.4045 4.23828 20.6445 6.99829 20.6445 10.3906V12.4414H2.05078C0.908966 12.4414 0 13.3771 0 14.4922V59.6094C0 63.0017 2.76001 65.7617 6.15234 65.7617H63.8477C67.24 65.7617 70 63.0017 70 59.6094V14.5354C70 14.5328 70 14.5301 70 14.5274C69.9215 13.1805 69.0932 12.4494 67.962 12.4419ZM24.7461 10.3906C24.7461 9.26003 25.6663 8.33984 26.7969 8.33984H43.2031C44.3337 8.33984 45.2539 9.26003 45.2539 10.3906V12.4414H24.7461V10.3906ZM65.1038 16.543L58.7351 35.6483C58.4558 36.4874 57.674 37.0508 56.7901 37.0508H45.2539V35C45.2539 33.8673 44.3359 32.9492 43.2031 32.9492H26.7969C25.6641 32.9492 24.7461 33.8673 24.7461 35V37.0508H13.2099C12.326 37.0508 11.5442 36.4874 11.2649 35.6483L4.89624 16.543H65.1038ZM41.1523 37.0508V41.1523H28.8477V37.0508H41.1523ZM65.8984 59.6094C65.8984 60.74 64.9783 61.6602 63.8477 61.6602H6.15234C5.02174 61.6602 4.10156 60.74 4.10156 59.6094V27.1296L7.37373 36.9456C8.2122 39.4621 10.5578 41.1523 13.2099 41.1523H24.7461V43.2031C24.7461 44.3359 25.6641 45.2539 26.7969 45.2539H43.2031C44.3359 45.2539 45.2539 44.3359 45.2539 43.2031V41.1523H56.7901C59.4422 41.1523 61.7878 39.4621 62.6263 36.9456L65.8984 27.1296V59.6094Z"
                fill="white"
              />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link v-if="screenWidth < 768" to="/contact">
            <span>Contact</span>
          </router-link>
          <router-link v-else to="/contact">
            <svg
              class="menu-img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32.666 32.666"
            >
              <path
                d="M28.189 16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-.001-1.664c6.355-.003 11.523 5.167 11.523 11.522zM16.666 7.856l-.001 1.664c3.853 0 6.983 3.133 6.981 6.983l1.666-.001c0-4.767-3.876-8.646-8.646-8.646zM16.333 0C7.326 0 0 7.326 0 16.334c0 9.006 7.326 16.332 16.333 16.332.557 0 1.007-.45 1.007-1.006 0-.559-.45-1.01-1.007-1.01-7.896 0-14.318-6.424-14.318-14.316 0-7.896 6.422-14.319 14.318-14.319S30.65 8.439 30.65 16.334c0 3.299-1.756 6.568-4.269 7.954-.913.502-1.903.751-2.959.761.634-.377 1.183-.887 1.591-1.529.08-.121.186-.228.238-.359.328-.789.357-1.684.555-2.518.243-1.064-4.658-3.143-5.084-1.814-.154.492-.39 2.048-.699 2.458-.275.366-.953.192-1.377-.168-1.117-.952-2.364-2.351-3.458-3.457l.002-.001c-.028-.029-.062-.061-.092-.092-.031-.029-.062-.062-.093-.092v.002c-1.106-1.096-2.506-2.34-3.457-3.459-.36-.424-.534-1.102-.168-1.377.41-.311 1.966-.543 2.458-.699 1.326-.424-.75-5.328-1.816-5.084-.832.195-1.727.227-2.516.553-.134.057-.238.16-.359.24-2.799 1.774-3.16 6.082-.428 9.292 1.041 1.228 2.127 2.416 3.245 3.576l-.006.004c.031.031.063.06.095.09.03.031.059.062.088.095l.006-.006c1.16 1.118 2.535 2.765 4.769 4.255 4.703 3.141 8.312 2.264 10.438 1.098 3.67-2.021 5.312-6.338 5.312-9.719C32.666 7.326 25.339 0 16.333 0z"
              />
            </svg>
          </router-link>
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
  computed: {
    cssVars() {
      return {
        "--bg-color": this.mainColor,
        "--icons-color": this.iconsColor,
      };
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
  background-color: var(--bg-color);
  width: 100%;
  position: absolute;
}

li {
  list-style: none;
}

.menu-icon {
  width: 40px;
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
    width: 40px;
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
    g,
    path {
      fill: var(--icons-color);
    }

    width: 40px;
    height: 40px;
  }
}

@media only screen and (min-width: 1440px) {
  header {
    width: auto;
    height: 100vh;
    position: static;
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
  }
}
</style>
