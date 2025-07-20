import { createRouter, createWebHistory } from "vue-router";

// components
import home from "../Components/Screens/home.vue";
import book from "../Components/Screens/book.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/book",
    name: "book",
    component: book,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
