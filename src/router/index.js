import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/orders",
    component: () => import("@/views/Orders.vue"),
    children: [
      {
        path: "",
        name: "orders",
        component: () => import("@/components/orders/Index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
