<template>
  <div class="container" style="margin-top: 200px">
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          required
        />
        <div v-if="emailError" class="text-danger">Email không hợp lệ</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          required
        />
        <div v-if="passwordError" class="text-danger">
          Password phải chứa ít nhất 6 ký tự.
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        :disabled="emailError || passwordError"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "LoginComponent",
  data() {
    return {
      email: "",
      password: "",
      emailError: false,
      passwordError: false,
    };
  },
  methods: {
    validateEmail() {
      this.emailError = this.email.length < 3 || !this.email.includes("@");
    },
    validatePassword() {
      this.passwordError = this.password.length < 6;
    },
    async login() {
      await this.$store.dispatch("fetchUsers");
      try {
        // Gọi action 'login' từ Vuex store và truyền email và password
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        // Chuyển hướng đến trang chính sau khi đăng nhập thành công
        // this.$router.push("/");
      } catch (error) {
        // Xử lý lỗi đăng nhập
        console.error("Lỗi đăng nhập:", error.message);
      }
    },
  },
  computed: {
    
  },
  mounted() {
    
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
