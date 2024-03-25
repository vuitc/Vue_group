<template>
  <!-- Container danh sách sản phẩm -->
  <div class="product-list">
    <ul>
      <!-- Mỗi sản phẩm trong danh sách -->
      <!-- Sử dụng directive 'v-for' của Vue để lặp qua mảng products -->
      <li class="product-item" v-for="product in products" :key="product.id">
        <!-- Hiển thị tên sản phẩm -->
        <span class="product-name">{{ product.name }}</span>

        <!-- Container cho các liên kết hành động -->
        <div class="action-links">
          <!-- Liên kết để chỉnh sửa sản phẩm -->
          <!-- Sử dụng thành phần 'router-link' của Vue Router để tạo một liên kết điều hướng -->
          <!-- Sử dụng directive 'v-bind' của Vue (viết tắt ':') để gắn prop 'to' với dữ liệu route -->
          <router-link
            class="edit-link"
            :to="{ name: 'EditProduct', params: { id: product.id } }"
            >Chỉnh sửa</router-link
          >

          <!-- Liên kết để xem chi tiết sản phẩm -->
          <router-link
            class="details-link"
            :to="{ name: 'ProductDetails', params: { id: product.id } }"
            >Xem chi tiết</router-link
          >

          <!-- Nút để xóa sản phẩm -->
          <!-- Sử dụng directive 'v-on' của Vue (viết tắt '@') để gắn sự kiện click với phương thức 'deleteProduct' -->
          <button class="delete-button" @click="deleteProduct(product.id)">
            Xóa
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "@/axios"; // Import axios instance

export default {
  // Dữ liệu của component
  data() {
    return {
      // Khởi tạo products là một mảng rỗng
      products: [],
    };
  },
  methods: {
    // Phương thức để xóa một sản phẩm
    async deleteProduct(id) {
      try {
        // Gửi yêu cầu DELETE tới API
        await axios.delete(`/products/${id}`);

        // Nếu yêu cầu thành công, lọc sản phẩm đã xóa ra khỏi mảng products
        this.products = this.products.filter((product) => product.id !== id);
      } catch (error) {
        // Nếu có lỗi, ghi log lỗi ra console
        console.error("Đã xảy ra lỗi khi xóa sản phẩm:", error);
      }
    },
  },
  // Lifecycle hook được gọi sau khi instance được tạo
  async created() {
    try {
      // Khi component được tạo, fetch các sản phẩm từ API
      const response = await axios.get("http://localhost:8000/api/products");
      // Cập nhật mảng products với dữ liệu từ API
      this.products = response.data;
    } catch (error) {
      // Nếu có lỗi, ghi log lỗi ra console
      console.error("Đã xảy ra lỗi khi lấy danh sách sản phẩm:", error);
    }
  },
};
</script>


<style scoped>
.product-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.product-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 8px 0;
  border-bottom: 1px solid #ddd;
}

.product-name {
  font-weight: bold;
  font-size: 1.1em;
}

.action-links {
  display: flex;
  align-items: center;
}

.edit-link,
.details-link,
.delete-button {
  margin: 0 8px;
  font-size: 0.9em;
}

.edit-link,
.details-link {
  text-decoration: none;
  color: #337ab7;
}

.delete-button {
  padding: 5px 10px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
}

.delete-button:hover {
  background-color: #d32f2f;
  cursor: pointer;
}
</style>
