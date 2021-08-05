<template>
  <h1 v-if="h == 'h1'">{{ content }}</h1>
  <h2 v-else-if="h == 'h2'">{{ content }}</h2>
  <h3 v-else-if="h == 'h3'">{{ content }}</h3>
  <h4 v-else-if="h == 'h4'">{{ content }}</h4>
  <h5 v-else-if="h == 'h5'">{{ content }}</h5>
  <h6 v-else>{{ content }}</h6>
</template>

<script>
export default {
  name: "PxTitle",
  props: {
    h: String,
    content: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/Colors.scss";
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: clamp(2.8rem, 5vw, 3.4rem);
  position: relative;
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin: 10px 0px 40px;
  color: $lighter-gray;
}

h1::before,
h2::before,
h3::before,
h4::before,
h5::before,
h6::before {
  content: "02.";
  position: relative;
  bottom: 4px;
  font-family: monospace;
  margin-right: 10px;
  font-size: clamp(2rem, 3vw, 2.8rem);
  color: $main-color;
}
h1::after,
h2::after,
h3::after,
h4::after,
h5::after,
h6::after {
  content: "";
  display: block;
  position: relative;
  top: -5px;
  width: 100%;
  height: 1px;
  margin-left: 20px;
  background-color: $lighter-gray;
}
</style>
