<template>
  <section id="projects">
    <px-title h="h2" content="Some of my Work" n="'2'"></px-title>
    <ul class="projects-list">
      <project-item
        title="Snake game"
        description="A classic snake game built with the Canvas API of Javascript. You can also play with your friends by creating a room and sharing your room id. This web app uses sockets for real-time communication."
        :technologies="['Typescript', 'Socket.io', 'Node.js']"
        img="snake.jpg"
        :index="1"
        :web="'https://modest-knuth-1fcbc0.netlify.app/'"
        :github="'https://github.com/Sebastian-na/snake-game'"
        :dark="dark"
      />
      <project-item
        title="Gifts&Crafts E-commerce"
        description="Gifts&Crafts is an enterprise dedicated to creating beautiful and heart-made gifts. This web app is an e-commerce to showcase and sell its products online."
        :technologies="['React.js', 'Django', 'Postgresql']"
        img="ecommerce.png"
        :index="2"
        :developing="true"
        :dark="dark"
      />
      <project-item
        title="Cryptocurrencies"
        description="A web app for visualizing real time data about cryptocurrencies such as price, market capitalization, exchanges, variations, etc."
        :technologies="['Vue.js', 'Coincap API', 'Chart.js']"
        img="crypto.png"
        :developing="true"
        :web="'https://cryptocurrencies-sage.vercel.app/'"
        :github="'https://github.com/Sebastian-na/cryptocurrencies'"
        :index="3"
        :dark="dark"
      />
      <project-item
        title="Coming soon"
        description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
        :technologies="['React.js', 'Spotify web api', 'Node.js']"
        img="comingsoon.jpg"
        :index="4"
        :dark="dark"
      />
      <project-item
        title="Coming soon"
        description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
        :technologies="['React.js', 'Spotify web api', 'Node.js']"
        img="comingsoon.jpg"
        :index="5"
        :dark="dark"
      />
    </ul>
  </section>
</template>
<script>
export default {
  name: "Projects",
  props: {
    dark: Boolean
  }
}
</script>
<style scoped lang="scss">
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
