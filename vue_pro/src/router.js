import { createRouter, createWebHistory } from "vue-router";

import ProductList from "./components/ProductList.vue";
import ProductDetails from "./components/ProductDetails.vue";
import AddProduct from "./components/AddProduct.vue";
import EditProduct from "./components/EditProduct.vue";
import Login from "./components/Login.vue"; // Import component Đăng nhập
import Register from "./components/Register.vue"; // Import component Đăng ký

const routes = [
  {
    path: "/",
    name: "ProductList",
    component: ProductList,
    meta: { public: false }, // Đánh dấu route này là private
  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: ProductDetails,
    meta: { public: false }, // Đánh dấu route này là private
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: AddProduct,
    meta: { public: false }, // Đánh dấu route này là private
  },
  {
    path: "/edit-product/:id",
    name: "EditProduct",
    component: EditProduct,
    meta: { public: false }, // Đánh dấu route này là private
  },
  {
    path: "/login", // Thêm route này
    name: "Login",
    component: Login,
    meta: { public: true }, // Đánh dấu route này là public
  },
  {
    path: "/register", // Thêm route này
    name: "Register",
    component: Register,
    meta: { public: true }, // Đánh dấu route này là public
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Kiểm tra xem người dùng đã xác thực chưa (ví dụ: kiểm tra xem có token được lưu không)
  const isAuthenticated = !!localStorage.getItem("token");

  if (!to.meta.public && !isAuthenticated) {
    // Nếu route không phải là public và người dùng chưa xác thực, chuyển hướng đến trang đăng nhập
    next({ name: "Login" });
  } else {
    // Ngược lại, cho phép điều hướng
    next();
  }
});

export default router;
