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
    // router view for child components. This is done because, the orders page can contain nested routes for ex., orders/:orderId to view more details about any order
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
