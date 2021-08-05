<template>
  <section id="home">
    <div>
      <p class="greet">Hi, my name is</p>
      <h1 class="heading">
        Sebastián Castañeda.
      </h1>
      <h2 class="heading">
        I build amazing experiences.
      </h2>
      <p class="disclaimer">
        I'm a Bogotá-based web developer who specializes in building functional
        and beautiful website interfaces. Although, I also know some backend.
        Currently, I'm an active systems engineering student at Universidad
        Nacional de Colombia.
      </p>
      <div class="button-container">
        <a href="#contact">
          <button class="call-to-action">Get In Touch</button></a
        >
        <img class="arrow" src="../assets/images/left-arrow.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Home",
  mounted() {
    const tl = gsap.timeline();
    tl.from(".greet", { x: 200, opacity: 0, duration: 1 });
    tl.from(".heading", {
      y: 100,
      duration: 1.5,
      opacity: 0,
      stagger: 0.2,
      ease: "sine",
    });
    tl.from(".disclaimer", { x: -200, duration: 1.5, opacity: 0 });
    tl.from(".call-to-action", { opacity: 0, duration: 1.5 });
    tl.from(".arrow", { opacity: 0 });
    tl.to(".arrow", { x: 10, duration: 0.5, repeat: -1, yoyo: true }, "-=1");
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/Colors.scss";
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: auto 0;
  min-height: 100vh;
}

h1,
h2 {
  font-size: clamp(4rem, 8vw, 8rem);
}

h1 {
  color: $lighter-gray;
}

h2 {
  color: $gray;
}

p {
  color: $gray;
}

h1::selection,
h2::selection,
p::selection {
  background-color: $main-color;
}

.greet {
  font-size: 1.6rem;
  font-family: "IBM Plex Mono", monospace;
  color: $main-color;
  margin-bottom: 20px;
}

.disclaimer {
  font-size: clamp(1.8rem, 3vw, 2rem);
  max-width: 500px;
  margin-top: 20px;
}

.call-to-action {
  font-size: 1.5rem;
  font-family: "IBM Plex Mono", monospace;
  padding: 1.5em 2em;
  background-color: transparent;
  color: $main-color;
  outline: none;
  border: 1px solid $main-color;
  border-radius: 5px;
  transition: background-color 0.5s;
  cursor: pointer;
}
.button-container {
  display: flex;
  align-items: center;
  margin-top: 50px;
}
.arrow {
  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(250deg)
    brightness(108%) contrast(101%);
  margin-left: 20px;
  width: 20px;
}

.call-to-action:hover {
  background-color: rgba($main-color, 0.1);
}

@media only screen and (min-width: 412px) {
  .disclaimer {
    margin-top: 10px;
  }
}

@media only screen and (min-width: 768px) {
  .disclaimer {
    margin-top: 20px;
  }
  section {
    padding: 15em 2em 15em;
  }
}
</style>
