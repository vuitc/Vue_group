<template>
  <!-- Thanh điều hướng -->
  <nav>
    <!-- Các liên kết đến các route khác nhau. Chúng được hiển thị điều kiện dựa trên trạng thái 'isLoggedIn'. -->
    <router-link to="/" v-if="isLoggedIn">Danh Sách Sản Phẩm</router-link> |
    <router-link to="/add-product" v-if="isLoggedIn">Thêm Sản Phẩm</router-link> |
    <router-link to="/login" v-if="!isLoggedIn">Đăng Nhập</router-link> |
    <router-link to="/register" v-if="!isLoggedIn">Đăng Ký</router-link> |
    <!-- Nút Logout gọi hành động 'logout' khi được nhấp -->
    <a href="#" @click="logout" v-if="isLoggedIn">Đăng Xuất</a>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    // Sử dụng Vuex helpers để ánh xạ trạng thái 'isLoggedIn' thành một thuộc tính tính toán
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    // Sử dụng Vuex helpers để ánh xạ hành động 'logout' thành một phương thức
    ...mapActions(["logout"]),
  },
};
</script>
