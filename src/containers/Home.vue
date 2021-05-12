<template>
  <main :style="cssVars">
    <div>
      <p class="greet">Hi, my name is</p>
      <h1>
        Sebastián Castañeda.
      </h1>
      <h2>
        I'm a frontend developer
      </h2>
      <p class="disclaimer">
        I'm a Bogotá-based web developer who specializes in building functional
        and beautiful websites interfaces, though, I also know some backend.
        Currently, I'm an active systems engineering student at Universidad
        Nacional de Colombia.
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
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
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 200px 25px 25px 25px;
  margin: auto 0;
}

h1,
h2 {
  font-size: clamp(3.1rem, 8vw, 8rem);
}

h1,
h2,
p {
  color: var(--font-color);
}

.greet {
  font-size: 1.6rem;
  font-family: "IBM Plex Mono", monospace;
  color: #fff;
  margin-bottom: 20px;
}

.disclaimer {
  font-size: clamp(1.5rem, 2vw, 2rem);
  max-width: 500px;
  margin-top: 20px;
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
}

@media only screen and (min-width: 1440px) {
  main {
    padding: 0px 25px 100px 80px;
  }
}
</style>
