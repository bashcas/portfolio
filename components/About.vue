<template>
  <section id="about">
    <div>
      <px-title content="Me, Myself and &amp;" h="h2" n="'1'"></px-title>
      <p class="paragraph">
        Hi again! I want to tell you a little more about me. 
        My passion for coding and all this tech world began when 
        I was in my last year of high school. I started to learn 
        programming through courses, and eventually, I began 
        to develop some personal projects to practice what I learned.
      </p>
      <br />
      <p class="paragraph">
        {{ screenWidth >= 1000 ? "On the right side," : "Below," }} you can appreciate
         some of the technologies, libraries, and tools I have worked with. 
         My main area of interest is the entire web development spectrum. 
         However, I also enjoy developing apps for Android with Kotlin.
      </p>
      <br />
      <p class="paragraph">
        I have a deep enthusiasm for learning new things. Lately, 
        I have been learning about data structures and algorithms 
        through a specialization I'm taking from the University of San Diego.
        (Currently studying algorithms on strings).
      </p>
      <br />
      <p class="paragraph">
        If you're looking for someone to build successful, responsive, easy-to-use, 
        and fast applications (both web and mobile), I'm your man. 
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
