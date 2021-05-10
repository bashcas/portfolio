import { createRouter, createWebHistory } from "vue-router";

import Home from "@/containers/Home.vue";
import About from "@/containers/About.vue";
import Projects from "@/containers/Projects.vue";
import Contact from "@/containers/Contact.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/proyects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
