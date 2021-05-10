<template>
  <main>
    <div>
      <h1>
        Hi, <br />
        I'm Sebastian, <br />
        web developer
      </h1>
      <p class="disclaimer">
        (Focused on frontend <br />
        development)
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
@import "../utils/Vars.scss";

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: calc(100vh - 80px);
}

h1,
p {
  font-family: $font;
  color: $first-color-title;
}

h1 {
  font-size: 4rem;
  font-weight: 900;
}

.disclaimer {
  font-size: 2.5rem;
  margin-right: 45px;
}

@media only screen and (min-width: 768px) {
  h1 {
    font-size: 8.5rem;
  }
  .disclaimer {
    font-size: 4rem;
    margin-top: 20px;
  }
  main {
    height: 100vh;
  }
}
</style>
