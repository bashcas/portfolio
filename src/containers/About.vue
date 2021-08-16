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
        {{ screenWidth >= 1000 ? "On the right side" : "Below" }} you can
        appreciate some of the technologies with which I have worked. As I said
        earlier, my main area of interest is the entire front-end spectrum.
        However, I also enjoy developing on the backend side :)
      </p>
      <br />
      <p class="paragraph">
        I like the tech world so much. I decided to go into web development
        firstly because the first programming language that I play with was
        Javascript, but I also have experience with other languages (at least
        their syntaxis) like Python, Java, Kotlin, C++, etc.
      </p>
    </div>
    <div class="webgl-container" ref="webgl">
      <px-skills-sphere :size="size" />
    </div>
  </section>
</template>

<script>
import PxSkillsSphere from "../components/PxSkillsSphere";
import PxTitle from "../components/PxTitle.vue";
export default {
  name: "about",
  data() {
    return {
      size: 250,
    };
  },
  components: {
    PxSkillsSphere,
    PxTitle,
  },
  props: {
    screenWidth: Number,
  },
  mounted() {
    this.size = this.$refs.webgl.clientWidth;
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/Colors.scss";
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
  color: $gray;
  font-size: clamp(1.5rem, 5vw, 2rem);
  a {
    color: $main-color;
    text-decoration: none;
    font-size: clamp(1.4rem, 5vw, 1.9rem);
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
  }
  .paragraph {
    max-width: 500px;
  }
}
</style>
