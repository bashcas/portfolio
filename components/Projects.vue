<template>
  <section id="projects">
    <px-title h="h2" content="Some of my Work" n="'2'"></px-title>
    <ul class="projects-list">
      <project-item title="Snake game"
        description="A classic snake game built with the Canvas API of Javascript. You can also play with your friends by creating a room and sharing your room id. This web app uses sockets for real-time communication."
        :technologies="['Typescript', 'Socket.io', 'Node.js']" img="snake.jpg" :index="1"
        :web="'https://snake.sebitas.dev/'" :github="'https://github.com/Sebastian-na/snake-game'" :dark="dark" />
      <project-item title="Cryptocurrencies"
        description="A web app for visualizing real time data about cryptocurrencies such as price, market capitalization, exchanges, variations, etc."
        :technologies="['Vue.js', 'Coincap API', 'Chart.js']" img="crypto.png"
        :web="'https://cryptocurrencies-sage.vercel.app/'" :github="'https://github.com/Sebastian-na/cryptocurrencies'"
        :index="3" :dark="dark" />
      <project-item title="TSP Solver" description="A website that allows you to solve the Traveling Salesman Problem (TSP). You can select a set of points in the map and 
        the server will compute the shortest path to visit all points and return to the starting point."
        :technologies="['Rust', 'React', 'Google Maps API']" img="tsp.jpeg"
        :github="'https://github.com/Sebastian-na/tsp'" :index="4" :dark="dark" />
      <project-item title="Bookswapp"
        description="A mobile app that allows students from Universidad Nacional de Colombia to exchange books. List the books you have and what you want, create swap requests, and exchange them."
        :technologies="['Kotlin', 'Mongodb', 'Node.js']" img="bookswapp.png" :index="5" :dark="dark"
        :github="'https://github.com/Sebastian-na/hardware-store'"
        :github2="'https://github.com/Sebastian-na/e-commerce-api'" />
      <project-item title="E-commerce"
        description="An e-commerce for my parents hardware store. It has a shopping cart, a checkout process, and a dashboard for managing the products."
        :technologies="['React.js', 'Django', 'Postgresql']" img="ecommerce.png" :index="2" :developing="true"
        :github="'https://github.com/Sebastian-na/bookswapp'" :github2="'https://github.com/Sebastian-na/bookswapp-api'"
        :dark="dark" />
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
