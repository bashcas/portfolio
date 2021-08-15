<template>
  <h1 :style="injectNumber" v-if="h == 'h1'">{{ content }}</h1>
  <h2 :style="injectNumber" v-else-if="h == 'h2'">{{ content }}</h2>
  <h3 :style="injectNumber" v-else-if="h == 'h3'">{{ content }}</h3>
  <h4 :style="injectNumber" v-else-if="h == 'h4'">{{ content }}</h4>
  <h5 :style="injectNumber" v-else-if="h == 'h5'">{{ content }}</h5>
  <h6 :style="injectNumber" v-else>{{ content }}</h6>
</template>

<script>
export default {
  name: "PxTitle",
  props: {
    h: String,
    content: String,
    n: String,
  },
  computed: {
    injectNumber() {
      return {
        "--number": this.n,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/Colors.scss";
$main-font: "Calibre", -apple-system, system-ui, sans-serif;
$monospace: "SF Mono", monospace;
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: clamp(2.6rem, 5vw, 3.4rem);
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
  content: "0" var(--number) ". ";
  position: relative;
  bottom: 4px;
  font-family: $monospace;
  margin-right: 10px;
  font-size: clamp(1.5rem, 2vw, 2rem);
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
