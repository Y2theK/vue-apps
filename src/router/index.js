import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ProductHome from "../views/ProductHome.vue";
import ProductDetail from "../views/ProductDetail.vue";
import Profile from "../views/Profile.vue";
import Login from "../views/Login.vue";
import notFound from "../views/notFound.vue";

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
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    // beforeEnter: (to, from, next) => {
    //   //profile page m lr khin work
    //   //next() so tr profie page route
    //   // console.log("profile middleware");
    //   // let auth = localStorage.getItem("auth");
    //   // if (auth) {
    //   //   next();
    //   // } else {
    //   //   next("/login");
    //   // }
    // },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/:catchall(.*)",
    name: "notFound",
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//global middleware
// bl page ma m lr khin work
router.beforeEach((to, from, next) => {
  //write middleware before next
  //next m pr yin bl page ma a loat m loat
  //next() so tr twr chin tae route
  if (to.path === "/profile" || to.path === "/product") {
    let auth = localStorage.getItem("auth");
    if (auth) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});
export default router;
