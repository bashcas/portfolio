<template>
  <footer>
    <p>Built by me</p>
    <br />
    <p>
      Design inspired by
      <a href="https://brittanychiang.com/">Brittany's portfolio</a>
    </p>
  </footer>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/Colors.scss";
$main-font: "Calibre", -apple-system, system-ui, sans-serif;
$monospace: "SF Mono", monospace;
footer {
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3em;
  p {
    font-size: 1.2rem;
    font-family: $monospace;
    color: $gray;
    a {
      font-family: $monospace;
      text-decoration: none;
      color: $gray;
      cursor: pointer;
      &:hover {
        color: $main-color;
      }
    }
  }
}
</style>
