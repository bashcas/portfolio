<template>
  <div class="social">
    <ul>
      <li>
        <a href="https://twitter.com/Sebastian_naits" target="_blank"
          ><div>
            <img src="https://img.icons8.com/ios/50/000000/twitter--v2.png" />
          </div>
        </a>
      </li>
      <li>
        <a href="https://github.com/Sebastian-na" target="_blank"
          ><div>
            <img src="https://img.icons8.com/ios/50/000000/github-2.png" />
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/sebastian-casta%C3%B1eda-33490820b/"
          target="_blank"
          ><div>
            <img
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
};
</script>

<style lang="scss" scoped>
@import "../utils/Colors.scss";
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
  filter: invert(92%) sepia(14%) saturate(747%) hue-rotate(335deg)
    brightness(105%) contrast(101%);

  transition: all 0.3s ease-in-out;
}
.social ul li a {
  padding: 10px;
}
.social ul li img:hover {
  filter: invert(87%) sepia(23%) saturate(3381%) hue-rotate(348deg)
    brightness(101%) contrast(104%);
  transform: translateY(-4px);
}

.social ul::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: $gray;
}
</style>
