import { createRouter, createWebHistory } from "vue-router";

// components
import homeScreen from "../Components/Screens/home.vue";
import bookScreen from "../Components/Screens/book.vue";
import aboutScreen from "../Components/Screens/about.vue";
import servicesScreen from "../Components/Screens/services.vue";

// NOT FOUND
import NotFoundScreen from "@/Components/Layouts/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: homeScreen,
  },
  {
    path: "/book",
    name: "book",
    component: bookScreen,
  },
  {
    path: "/about",
    name: "about",
    component: aboutScreen,
  },
  {
    path: "/services",
    name: "services",
    component: servicesScreen,
  },

  // NOT FOUND SCREEN
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
