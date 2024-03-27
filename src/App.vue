<template>
  <div>
    <!-- Sử dụng directive v-if để kiểm tra điều kiện -->
    <HeaderComponent v-if="!isAdminDashboard"></HeaderComponent>
    <div id="content">
      <router-view></router-view>
    </div>
    <!-- Sử dụng directive v-if để kiểm tra điều kiện -->
    <Footer v-if="!isAdminDashboard"></Footer>
  </div>
</template>

<script>
import HeaderComponent from "./components/partition/Header.vue";
import Footer from "./components/partition/Footer.vue";
export default {
  name: "IndexCompoment",
  components: {
    HeaderComponent,
    Footer,
  },
  computed: {
    // Tạo một computed property để kiểm tra trang hiện tại có phải là AdminDashboard không
    isAdminDashboard() {
      return this.$route.name === "AdminDashboard" || this.$route.name === "EditProduct";
    },
  },
};
</script>

<style></style>
