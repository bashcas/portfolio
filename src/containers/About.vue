<template>
  <main :style="cssVars">
    <div>
      <h2>About me</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ea quas
        nam non neque distinctio similique, reprehenderit quidem odio doloremque
        consequuntur laudantium perferendis. Blanditiis atque minus incidunt
        dolor! Corporis, recusandae!
      </p>
    </div>
    <div>
      <canvas></canvas>
    </div>
  </main>
</template>

<script>
export default {
  name: "about",
  props: {
    fontColor: String,
  },
  computed: {
    cssVars() {
      return {
        "--font-color": this.fontColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  color: var(--font-color);
  font-size: clamp(3.1rem, 8vw, 8rem);
}
</style>
