<template>
  <div class="social">
    <ul>
      <li>
        <a href="https://twitter.com/Sebastian_naits" target="_blank"
          ><div>
            <img
              :class="dark ? '' : 'dark'"
              src="https://img.icons8.com/ios/50/000000/twitter--v2.png"
            />
          </div>
        </a>
      </li>
      <li>
        <a href="https://github.com/Sebastian-na" target="_blank"
          ><div>
            <img
              :class="dark ? '' : 'dark'"
              src="https://img.icons8.com/ios/50/000000/github-2.png"
            />
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/sebastian-casta%C3%B1eda-33490820b/"
          target="_blank"
          ><div>
            <img
              :class="dark ? '' : 'dark'"
              src="https://img.icons8.com/ios/50/000000/linkedin-2--v1.png"
            /></div
        ></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Social",
  props: {
    dark: Boolean
  }
}
</script>

<style lang="scss" scoped>
.social {
  position: fixed;
  width: 40px;
  bottom: 0px;
  left: 20px;
  right: auto;
  z-index: 10;
}
.social ul {
  display: flex;
  flex-direction: column;
  align-items: center;

  list-style: none;
}
.social ul li img {
  width: 22px;
  filter: invert(85%) sepia(16%) saturate(599%) hue-rotate(194deg)
    brightness(99%) contrast(95%);

  transition: all 0.3s ease-in-out;
}

.social ul li img.dark {
  filter: invert(7%) sepia(21%) saturate(4255%) hue-rotate(194deg)
    brightness(94%) contrast(97%);
}
.social ul li a {
  padding: 10px;
}
.social ul li img:hover {
  filter: invert(92%) sepia(81%) saturate(478%) hue-rotate(83deg)
    brightness(97%) contrast(109%);
  transform: translateY(-7px);
}

.social ul li img.dark:hover {
  filter: invert(38%) sepia(88%) saturate(1000%) hue-rotate(191deg)
    brightness(87%) contrast(112%);
  transform: translateY(-7px);
}

.social ul::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: var(--gray);
}
</style>
