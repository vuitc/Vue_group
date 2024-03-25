<template>
  <!-- Form đăng ký -->
  <div class="form-container">
    <form @submit.prevent="register" class="register-form">
      <!-- Các input cho tên, email, và password -->
      <input type="text" v-model="name" placeholder="Tên" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input
        type="password"
        v-model="password"
        placeholder="Mật khẩu"
        required
      />
      <!-- Nút "Register" để gửi yêu cầu đăng ký -->
      <button type="submit">Đăng ký</button>
    </form>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  data() {
    return {
      // Dữ liệu cho các input trong form
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        // Gửi yêu cầu POST tới đường dẫn "/register" với tên, email, và password là dữ liệu
        const response = await axios.post("/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        // Ở đây bạn có thể xử lý phản hồi, ví dụ như lưu token nhận được,
        // cập nhật trạng thái 'isLoggedIn', và chuyển hướng đến trang dashboard hoặc bất kỳ trang nào khác
      } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
        if (error.response) {
          console.error("Chi tiết lỗi:", error.response.data);
        }
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

.register-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.register-form input,
.register-form button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.register-form button {
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
</style>
