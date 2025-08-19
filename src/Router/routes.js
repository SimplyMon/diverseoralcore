import { createRouter, createWebHistory } from "vue-router";

// components
import homeScreen from "../Components/Screens/home.vue";
import book from "../Components/Screens/book.vue";
import aboutScreen from "../Components/Screens/about.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: homeScreen,
  },
  {
    path: "/book",
    name: "book",
    component: book,
  },
  {
    path: "/about",
    name: "about",
    component: aboutScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
