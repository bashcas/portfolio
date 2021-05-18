<template>
  <section :style="cssVars">
    <div>
      <h2>About me</h2>
      <p class="paragraph">
        I'm a web developer focused on the client-side of the web. My passion
        for coding began when I was still in my last year of high school. I
        started learning through courses and the development of personal
        projects.
      </p>
      <br />
      <p class="paragraph">
        On the right side, you can appreciate some of the technologies with
        which I have worked. As I said earlier, my main area of interest is the
        entire front-end spectrum. However, I also enjoy developing robust APIS
        for applications.
      </p>
      <br />
      <p class="paragraph">
        I like the technological world so much. I decided to go into web
        development firstly because my first programming language was
        Javascript, but I also have experience with other languages (at least
        their syntaxis) like Python, Java, Kotlin, C++, etc.
      </p>
    </div>
    <div class="webgl-container">
      <px-skills-sphere />
    </div>
  </section>
</template>

<script>
import PxSkillsSphere from "../components/PxSkillsSphere";
export default {
  name: "about",
  components: {
    PxSkillsSphere,
  },
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
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 200px 25px 25px 25px;
  margin: auto 0;
  position: relative;
}
h2 {
  color: var(--font-color);
  font-size: clamp(3.1rem, 8vw, 10rem);
}

.paragraph {
  max-width: 600px;
  color: var(--font-color);
  font-size: clamp(1.5rem, 5vw, 2rem);
  opacity: 0.8;
}

.webgl-container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  width: 100%;
  aspect-ratio: auto 1 / 1;
}

@media only screen and(min-width: 1440px) {
  section {
    width: 100vw;
    height: 100vh;
    padding: 0px 25px 0px 150px;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
