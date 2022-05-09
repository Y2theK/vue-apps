import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ProductHome from "../views/ProductHome.vue";
import ProductDetail from "../views/ProductDetail.vue";
import Profile from "../views/Profile.vue";
import Login from "../views/Login.vue";

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
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/product",
    name: "product",
    component: ProductHome,
  },
  {
    path: "/product/:id",
    name: "product-detail",
    component: ProductDetail,
    props: true,
  },
  {
    path: "/Profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
