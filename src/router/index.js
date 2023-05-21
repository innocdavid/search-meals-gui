import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
