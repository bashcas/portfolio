<template>
  <div class="loader-container">
    <pulse-loader :color="'#ffca0b'" :size="'30px'" :loading="loading" />
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/GridLoader.vue";

export default {
  name: "Preloader",
  props: {
    loading: Boolean,
  },
  components: {
    PulseLoader,
  },
};
</script>
<style lang="scss" scoped>
@import "../utils/Colors.scss";
.loader-container {
  z-index: 50;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: $background-color;
}
</style>
