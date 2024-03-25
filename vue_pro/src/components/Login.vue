<template>
  <!-- Form đăng nhập -->
  <div class="form-container">
    <form @submit.prevent="login" class="login-form">
      <!-- Các input cho email và password -->
      <input type="email" v-model="email" placeholder="Email" required />
      <input
        type="password"
        v-model="password"
        placeholder="Mật khẩu"
        required
      />
      <!-- Nút "Login" để gửi yêu cầu đăng nhập -->
      <button type="submit">Đăng nhập</button>
    </form>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  data() {
    return {
      // Dữ liệu cho các input trong form
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        // Gửi yêu cầu POST tới đường dẫn "/login" với email và password
        const response = await axios.post("/login", {
          email: this.email,
          password: this.password,
        });

        // Nếu nhận được token, lưu vào local storage và coi người dùng đã đăng nhập
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);

          // Gọi mutation để cập nhật trạng thái đăng nhập
          this.$store.commit("LOGIN");

          // Chuyển hướng đến trang chính
          this.$router.push("/");
        }
      } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
      }
    },
  },
};
</script>


<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-form input,
.login-form button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.login-form button {
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
</style>
