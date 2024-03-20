import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/Frontend/Home.vue';
import ShopComponent from './components/Frontend/Shop.vue';
import DetailComponent from './components/Frontend/Detail.vue';
import EComponent from './components/partition/404.vue';
import CartComponent from './components/Frontend/Cart.vue';
import CheckoutComponent from './components/Frontend/Checkout.vue';
import HelloWorld from "./components/HelloWorld.vue";
const routes = [
  {
    path: "/",
    name: "HomeComponent",
    component: HomeComponent,
    meta: { public: false }, // Mark this route as private
  },
  {
    path: "/shop",
    name: "ShopComponent",
    component: ShopComponent,
    meta: { public: false }, // Mark this route as private
  },
  {
    path: "/detail",
    name: "DetailComponent",
    component: DetailComponent,
    meta: { public: false }, // Mark this route as private
  },
  {
    path: "/404",
    name: "EComponent",
    component: EComponent,
    meta: { public: false }, // Mark this route as private
  },
  {
    path: "/cart",
    name: "CartComponent",
    component: CartComponent,
    meta: { public: false }, // Mark this route as private
  },
  {
    path: "/checkout",
    name: "CheckoutComponent",
    component: CheckoutComponent,
    meta: { public: false }, // Mark this route as private
  },
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   // Check if the user is authenticated (e.g., check if a token is stored)
//   const isAuthenticated = !!localStorage.getItem("token");

//   if (!to.meta.public && !isAuthenticated) {
//     // If the route is not public and the user is not authenticated, redirect to login
//     next({ name: "Login" });
//   } else {
//     // Otherwise, allow navigation
//     next();
//   }
// });

export default router;
