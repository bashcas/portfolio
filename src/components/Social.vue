<template>
  <div class="social">
    <ul>
      <li>
        <a href="#"
          ><div><img src="../assets/images/github.png" alt="a" /></div>
        </a>
      </li>
      <li>
        <a href="#"
          ><div><img src="../assets/images/github.png" alt="a" /></div>
        </a>
      </li>
      <li>
        <a href="#"
          ><div><img src="../assets/images/github.png" alt="a" /></div
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
  width: 20px;
  filter: invert(84%) sepia(92%) saturate(325%) hue-rotate(325deg)
    brightness(99%) contrast(96%);
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
