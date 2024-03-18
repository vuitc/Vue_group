<template>
  <!-- Form để thêm một sản phẩm -->
  <!-- @submit.prevent="submitForm" ngăn chặn việc nộp biểu mẫu mặc định và gọi phương thức 'submitForm' thay vào đó -->
  <form @submit.prevent="submitForm" class="add-product-form">
    <!-- Input cho tên sản phẩm -->
    <!-- v-model="name" ràng buộc input với thuộc tính dữ liệu 'name' -->
    <input class="input-field" v-model="name" placeholder="Tên Sản Phẩm" />
    <!-- Thông báo lỗi cho tên sản phẩm -->
    <!-- Hiển thị nếu 'errors.name' là true -->
    <p v-if="errors.name" class="error">{{ errors.name }}</p>

    <!-- Input cho mô tả sản phẩm -->
    <!-- v-model="description" ràng buộc input với thuộc tính dữ liệu 'description' -->
    <input
      class="input-field"
      v-model="description"
      placeholder="Mô Tả Sản Phẩm"
    />
    <!-- Thông báo lỗi cho mô tả sản phẩm -->
    <!-- Hiển thị nếu 'errors.description' là true -->
    <p v-if="errors.description" class="error">{{ errors.description }}</p>

    <!-- Input cho giá sản phẩm -->
    <!-- v-model="price" ràng buộc input với thuộc tính dữ liệu 'price' -->
    <input class="input-field" v-model="price" placeholder="Giá Sản Phẩm" />
    <!-- Thông báo lỗi cho giá sản phẩm -->
    <!-- Hiển thị nếu 'errors.price' là true -->
    <p v-if="errors.price" class="error">{{ errors.price }}</p>

    <!-- Button để nộp biểu mẫu -->
    <button type="submit" class="submit-button">Thêm Sản Phẩm</button>
  </form>
</template>

<script>
// Import axios instance
import axios from "@/axios";

export default {
  // Dữ liệu của component
  data() {
    return {
      // Chi tiết sản phẩm
      name: "",
      description: "",
      price: "",
      // Các lỗi validation
      errors: {},
    };
  },
  methods: {
    // Validate các trường input
    validateInput() {
      // Đối tượng lỗi
      const errors = {};
      // Validate tên sản phẩm
      if (!this.name) errors.name = "Tên là bắt buộc";
      // Validate mô tả sản phẩm
      if (!this.description) errors.description = "Mô Tả là bắt buộc";
      // Validate giá sản phẩm
      if (!this.price || isNaN(this.price))
        errors.price = "Giá là bắt buộc và phải là số";
      return errors;
    },
    // Xử lý khi nộp biểu mẫu
    async submitForm() {
      // Validate các trường input
      const errors = this.validateInput();
      // Nếu có lỗi validation, cập nhật thuộc tính dữ liệu 'errors' và dừng việc thực thi
      if (Object.keys(errors).length > 0) {
        this.errors = errors;
        return;
      }

      try {
        // Gửi yêu cầu POST tới API để thêm sản phẩm
        await axios.post("/products", {
          name: this.name,
          description: this.description,
          price: this.price,
        });
        // Nếu yêu cầu thành công, chuyển hướng đến danh sách sản phẩm
        this.$router.push("/");
      } catch (error) {
        // Nếu có lỗi, ghi log ra console
        console.error("Đã xảy ra lỗi khi thêm sản phẩm:", error);
      }
    },
  },
};
</script>


<style scoped>
.error {
  color: red;
}
.add-product-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.input-field {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  font-size: 1em;
}

.submit-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
