<template>
  <li class="container">
    <div
      class="project-image"
      :class="{ backwards: index % 2 != 0 }"
      @mouseenter="filter = false"
      @mouseleave="filter = true"
    >
      <div class="project-image-container">
        <img
          :src="require(`../assets/images/${img}`)"
          alt="img"
          :class="{ grayscale_filter: filter }"
        />
        <a class="project-link" :href="web"></a>
      </div>
    </div>
    <div class="project-content" :class="{ backwards: index % 2 != 0 }">
      <p class="featured" :class="{ end: index % 2 == 0 }">Featured Project</p>
      <h3 :class="{ end: index % 2 == 0 }">{{ title }}</h3>
      <p class="description" :class="{ end: index % 2 == 0 }">
        {{ description }}
      </p>
      <ul class="technologies" :class="{ end: index % 2 == 0 }">
        <li v-for="technologie in technologies" :key="technologie.index">
          {{ technologie }}
        </li>
      </ul>
      <div class="project-links" :class="{ end: index % 2 == 0 }">
        <a :href="github"
          ><img src="../assets/images/github.png" alt="github logo"
        /></a>
        <a :href="web"
          ><img src="../assets/images/globe.png" alt="globe image"
        /></a>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "ProjectItem",
  data() {
    return {
      filter: true,
    };
  },
  props: {
    img: String,
    title: String,
    description: String,
    technologies: Array,
    github: String,
    web: String,
    index: Number,
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/Colors.scss";
$main-font: "Calibre", -apple-system, system-ui, sans-serif;
$monospace: "SF Mono", monospace;
.container {
  position: relative;
  padding: 2em 3em;
  margin-bottom: 2em;
  background-color: rgba($main-color, 0.05);
}
.project-image {
  content: "";
  position: absolute;
  opacity: 0.2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.project-image img {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(1px);
  cursor: pointer;
  border-radius: 4px;
}

h3 {
  font-size: 2.4rem;
  margin-bottom: 1.3em;
  color: $lighter-gray;
}

.featured {
  font-family: $monospace;
  color: $main-color;
  font-size: 1.5rem;
  margin: 10px 0;
}
.description {
  font-size: 1.8rem;
  color: $gray;
  margin-bottom: 1.5em;
}

.technologies {
  display: flex;
  list-style: none;
  gap: 2em;
  margin-bottom: 2.7em;
}

.technologies li {
  font-family: $monospace;
  color: $lighter-gray;
  font-size: 1.3rem;
}

.project-links {
  display: flex;
  gap: 2em;
}

.project-links a img {
  filter: invert(92%) sepia(78%) saturate(2484%) hue-rotate(178deg)
    brightness(107%) contrast(104%);
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
}

.project-links a img:hover {
  transform: translate(2px, -3px);
  filter: invert(96%) sepia(48%) saturate(879%) hue-rotate(83deg)
    brightness(94%) contrast(116%);
}

@media only screen and(min-width: 768px) {
  .project-links.end,
  .technologies.end {
    justify-content: flex-end;
  }
  .featured.end,
  .description.end,
  h3.end {
    text-align: end;
  }
  .container {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(12, 1fr);
    background-color: transparent;
    padding: 2em 0;
  }
  .description {
    position: relative;
    background-color: $background-color-light;
    box-shadow: 0 10px 30px -15px $shadow;
    padding: 25px;
    border-radius: 4px;
    z-index: 2;
  }
  .project-content {
    grid-area: 1 / 6 / -1 / -1;
  }
  .project-image {
    position: relative;
    z-index: 1;
    border-radius: 4px;
    grid-area: 1 / 1 / -1 / 7;
    max-width: 700px;
    height: auto;
    opacity: 1;
    background-color: $main-color;
    transition: background-color 0.2s ease-in-out;
  }
  .project-image:hover {
    background-color: transparent;
  }

  .project-image.backwards {
    grid-area: 1 / 7 / -1 / -1;
  }
  .project-content.backwards {
    grid-area: 1 / 1 / -1 / 8;
  }

  .project-image img {
    position: static;
    object-fit: cover;
    height: auto;
    filter: blur(0);
  }
  .grayscale_filter {
    filter: grayscale(100%) contrast(1) brightness(90%);
  }
  .project-image-container {
    position: relative;
    mix-blend-mode: multiply;
  }
  .project-link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
</style>
