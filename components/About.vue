<template>
  <section id="about">
    <div>
      <px-title content="Me, Myself and &amp;" h="h2" n="'1'"></px-title>
      <p class="paragraph">
        I'm a web developer focused on the client-side of the web. My passion
        for coding began when I was still in my last year of high school. I
        started learning through courses and the development of
        <a href="#projects">personal projects.</a>
      </p>
      <br />
      <p class="paragraph">
        {{ screenWidth >= 1000 ? "On the right side," : "Below," }} you can
        appreciate some of the technologies with which I have worked. My main
        area of interest is the entire front-end spectrum (Especially when
        working with React and Vue). However, I also enjoy developing on the
        backend side with Express and Django :)
      </p>
      <br />
      <p class="paragraph">
        If you're looking for someone to create successful, responsive websites
        that are fast, easy to use, and built with best practices, I'm your man.
        Don't hesitate to contact me.
      </p>
    </div>
    <div class="webgl-container" ref="webgl">
      <px-skills-sphere :dark="dark" :size="size" />
    </div>
  </section>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      size: 250
    }
  },
  props: {
    screenWidth: Number,
    dark: Boolean
  },
  mounted() {
    this.size = this.$refs.webgl.clientWidth
  }
}
</script>

<style lang="scss" scoped>
section {
  padding: 2em 0;
  min-height: 100vh;
  margin: auto 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.paragraph {
  color: var(--gray);
  font-size: clamp(1.5rem, 5vw, 2rem);
  a {
    color: var(--main-color);
    font-family: "Calibre", -apple-system, system-ui, sans-serif;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

.webgl-container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 550px;
  width: 100%;
  aspect-ratio: auto 1 / 1;
  margin: 0 auto;
  pointer-events: none;
}

@media only screen and (min-width: 768px) {
  section {
    min-height: 100vh;
  }
}

@media only screen and(min-width: 1000px) {
  section {
    flex-direction: row;
  }
  // the other way around
  .webgl-container {
    margin: 0;
    pointer-events: auto;
  }
  .paragraph {
    max-width: 500px;
  }
}
</style>
