<template>
  <section id="projects">
    <px-title h="h2" content="Some of my Work" n="'2'"></px-title>
    <ul class="projects-list">
      <project-item
        title="Snake game"
        description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
        :technologies="['React.js', 'Spotify web api', 'Node.js']"
        img="pexels.jpg"
        :index="1"
      />
      <project-item
        title="Snake game"
        description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
        :technologies="['React.js', 'Spotify web api', 'Node.js']"
        img="Image1.png"
        :index="2"
      />
      <project-item
        title="Snake game"
        description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
        :technologies="['React.js', 'Spotify web api', 'Node.js']"
        img="pexels.jpg"
        :index="3"
      />
      <project-item
        title="Snake game"
        description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
        :technologies="['React.js', 'Spotify web api', 'Node.js']"
        img="Image1.png"
        :index="4"
      />
      <project-item
        title="Snake game"
        description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
        :technologies="['React.js', 'Spotify web api', 'Node.js']"
        img="pexels.jpg"
        :index="5"
      />
    </ul>
  </section>
</template>
<script>
export default {
  name: "Projects"
}
</script>
<style scoped lang="scss">
@import "~/assets/styles/Colors.scss";
section {
  padding: 2em 0;
  padding-top: 12em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1000px;
}

.projects-list {
  list-style: none;
}

@media only screen and(min-width: 768px) {
  h2::after {
    width: 200px;
  }
  section {
    padding: 15em 2em 0 2em;
  }
}

@media only screen and(min-width: 1080px) {
  h2::after {
    width: 300px;
  }
}
</style>
