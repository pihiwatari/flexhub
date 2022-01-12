import { createRouter, createWebHashHistory } from "vue-router";
import Quote from "../views/Quote.vue";
import Maps from "../views/Maps.vue";

const routes = [
  {
    path: "/",
    name: "Quote",
    component: Quote,
    meta: {
      title: "Instant Quoting Tool",
    },
  },
  {
    path: "/competency-centers",
    name: "Maps",
    component: Maps,
    meta: {
      title: "AM Competency Centers",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "About",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
