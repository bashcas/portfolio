<template>
  <section id="contact">
    <px-title h="h2" content="Contact me" n="'3'"></px-title>
    <div class="information-container">
      <div class="form-container">
        <p>
          I'm interested in any opportunities regarding the web development
          field (freelance, part-time job, full-time job). I want to work on
          ambitious and large projects. Don't hesitate to fill-up the form
          below.
        </p>
        <form class="form" v-on:submit="sendData">
          <div class="form-name-container">
            <input
              type="text"
              class="form-name"
              placeholder="Name"
              name="name"
            />
          </div>
          <div class="form-email-container">
            <input
              type="email"
              name="email"
              class="form-email"
              placeholder="Email"
            />
          </div>
          <div class="form-subject-container">
            <input
              type="text"
              class="form-subject"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div class="form-message-container">
            <textarea
              cols="30"
              rows="10"
              class="form-message"
              placeholder="Message"
              name="message"
            ></textarea>
          </div>
          <input type="submit" value="Send message" class="form-submit" />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  mounted() {
    const form = document.querySelector(".form")
    form.addEventListener("focusin", e => {
      e.path[1].classList.add("focus")
    })
    form.addEventListener("focusout", e => {
      e.path[1].classList.remove("focus")
    })
  },
  methods: {
    async sendData(e) {
      e.preventDefault()
      const data = new FormData(e.target)
      const response = await fetch("/api/email/send", {
        method: "POST",
        body: data
      })
      console.log(response)
      this.showFeedbackMessage(response.status)
    },
    showFeedbackMessage(status) {
      if (status == 200) {
        this.$emit("feedback", "Your email was sent successfully")
      } else {
        this.$emit("feedback", "An error has occured")
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$main-font: "Calibre", -apple-system, system-ui, sans-serif;
$monospace: "SF Mono", monospace;

section {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
}

.form-container p {
  font-size: clamp(1.5rem, 5vw, 2rem);
  color: var(--gray);
  margin-bottom: 30px;
}
.form {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  input,
  textarea {
    padding: 15px 20px;
    background: var(--background-color-light);
    outline: none;
    border: none;
    border-radius: 5px;
    color: var(--gray);
    font-family: $monospace;
  }
}
input::placeholder,
textarea::placeholder {
  color: rgba(var(--gray), 0.6);
}

.form-name-container {
  position: relative;
  grid-area: 1 / 1 / 1 / 3;
  input {
    width: 100%;
  }
}
.form-email-container {
  position: relative;
  grid-area: 1 / 3 / 1 / -1;
  input {
    width: 100%;
  }
}
.form-subject-container {
  position: relative;
  grid-area: 2 / 1 / 2 / -1;
  input {
    width: 100%;
  }
}
.form-message-container {
  position: relative;
  grid-area: 3 / 1 / 3 / -1;
  textarea {
    width: 100%;
  }
}
.form-submit {
  position: relative;
  grid-area: 4 / 4 / 4 / -1;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  &:hover {
    color: var(--main-color);
    outline: 1px solid var(--main-color);
  }
}
.form div {
  overflow: hidden;
}
.form div::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background-color: var(--main-color);
  transition: all 0.3s ease-in-out;
}
.form div.focus {
  &:after {
    transform: translateX(100%);
  }
}

@media only screen and(min-width: 768px) {
  section {
    padding: 0 2em;
  }
  h2::after {
    width: 200px;
  }
}
@media only screen and(min-width: 1080px) {
  h2::after {
    width: 300px;
  }
}
</style>
