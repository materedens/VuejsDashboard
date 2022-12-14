import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () => import("../views/TableView.vue"),
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/AccountView.vue"),
  },
  {
    path: "/card",
    name: "card",
    component: () => import("../views/CardView.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../views/CalendarView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
