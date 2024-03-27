import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/Frontend/Home.vue';
import ShopComponent from './components/Frontend/Shop.vue';
import DetailComponent from './components/Frontend/Detail.vue';
import EComponent from './components/partition/404.vue';
import CartComponent from './components/Frontend/Cart.vue';
import CheckoutComponent from './components/Frontend/Checkout.vue';
import Login from "./components/partition/Login.vue";
import HelloWorld from "./components/HelloWorld.vue";
const routes = [
  {
    path: "/",
    name: "HomeComponent",
    component: HomeComponent,
    meta: { public: true }, // Mark this route as private
  },
  {
    path: "/shop",
    name: "ShopComponent",
    component: ShopComponent,
    meta: { public: true }, // Mark this route as private
  },
  {
    path: "/detail/:id",
    name: "DetailComponent",
    component: DetailComponent,
    meta: { public: true }, // Mark this route as private
    props: true
  },
  {
    path: "/404",
    name: "EComponent",
    component: EComponent,
    meta: { public: true }, // Mark this route as private
  },
  {
    path: "/cart",
    name: "CartComponent",
    component: CartComponent,
    meta: { public: true }, // Mark this route as private
  },
  {
    path: "/checkout",
    name: "CheckoutComponent",
    component: CheckoutComponent,
    meta: { public: false }, // Mark this route as private
  }
  ,
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { public: true }, // Mark this route as private
  },
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  // Kiểm tra xem route có phải là route public không
  if (!to.meta.public) {
    // Nếu route không phải là public, kiểm tra xem có email trong localStorage không
    const loggedInUser = localStorage.getItem('email');
    if (!loggedInUser) {
      // Nếu không có email trong localStorage, chuyển hướng đến trang login
      next('/login');
    } else {
      // Nếu có email trong localStorage, cho phép truy cập
      next();
    }
  } else {
    // Nếu là route public, cho phép truy cập
    next();
  }
});


export default router;
