<template>
  <div class="email">
    <div>
      <a href="mailto:sebis.dev@gmail.com">sebis.dev@gmail.com</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Email"
}
</script>

<style lang="scss" scoped>
.email {
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 20px;
  z-index: 10;
}

.email div {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.email div a {
  display: inline-block;
  margin: 20px auto;
  font-family: monospace;
  font-size: 1.2rem;
  line-height: 18px;
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  text-decoration: none;
  color: var(--lightest-gray);
  transition: all 0.3s ease-in-out;
}
.email div a:hover {
  transform: translateY(-4px);
  color: var(--main-color);
}
.email div::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: var(--gray);
}
</style>
