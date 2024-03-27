<!-- Trong file views/EditProduct.vue -->
<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossorigin="anonymous"
  />
  <div class="main">
    <h3>Chỉnh sửa sản phẩm</h3>
    <p>Admin/EditProduct</p>
    <div class="card">
      <form @submit.prevent="updateProduct">
        <div class="row">
          <div class="col-6">
            <label for="productName">Tên sản phẩm:</label>
            <input
              type="text"
              class="form-control"
              v-model="editedProduct.name"
              required
            />
            <label for="productPrice">Giá sản phẩm:</label>
            <input
              type="number"
              class="form-control"
              v-model="editedProduct.price"
              required
            />
            <label for="productCategory_id">Danh mục sản phẩm:</label>
            <select
              class="form-select"
              aria-label="Default select example"
              id="productCategory_id"
              v-model="editedProduct.category_id"
            >
              <option selected></option>
              <option value="1">Rau xanh , rau tươi</option>
              <option value="2">Rau củ quả</option>
              <option value="3">Nấm và hạt</option>
              <option value="4">Rau mùi</option>
            </select>
            <label for="productSoluongton">Số lượng tồn kho:</label>
            <input
              type="number"
              class="form-control"
              v-model="editedProduct.soluongton"
              required
            />
            <label for="productTrongluong">Trọng lượng:</label>
            <input
              type="text"
              class="form-control"
              v-model="editedProduct.trongluong"
              required
            />
          </div>
          <!-- cột 2 -->
          <div class="col-6">
            <label for="productName">Thông tin chi tiết:</label>
            <textarea
              style="width: 100%; height: 100px"
              type="text"
              class="form-control"
              v-model="editedProduct.description"
              required
            />
            <label for="productImage">Ảnh sản phẩm:</label>
            <input
              type="text"
              class="form-control"
              v-model="editedProduct.image"
              required
            />
            <button class="btn btn-primary ">Cập nhật</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      editedProduct: {}, // Dữ liệu sản phẩm sẽ được chỉnh sửa
    };
  },
  methods: {
    async updateProduct() {
      try {
        const productId = this.$route.params.id;
        const response = await fetch(`http://localhost:3000/products/${productId}`, {
          method: "PUT", // hoặc 'PATCH' tùy vào phương thức bạn sử dụng để cập nhật sản phẩm
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.editedProduct),
        });
        if (response.ok) {
          // Hiển thị thông báo thành công
          Swal.fire({
            icon: "success",
            title: "Sản phẩm đã được cập nhật thành công!",
          });
          return this.$router.push("/admin");
        } else {
          throw new Error("Failed to update product");
        }
      } catch (error) {
        console.error("Error:", error);
        // Xử lý lỗi
        Swal.fire({
          icon: "error",
          title: "Đã xảy ra lỗi khi cập nhật sản phẩm",
        });
      }
    },
    async getProductDetails() {
      const productId = this.$route.params.id; // Lấy id của sản phẩm từ route
      try {
        const response = await fetch(`http://localhost:3000/products/${productId}`);
        if (response.ok) {
          this.editedProduct = await response.json();
        } else {
          throw new Error("Failed to fetch product details");
        }
      } catch (error) {
        console.error("Error:", error);
        // Xử lý lỗi
      }
    },
  },
  created() {
    // Trong created hook, gọi hàm getProductDetails để lấy thông tin chi tiết của sản phẩm cần chỉnh sửa
    this.getProductDetails();
  },
};
</script>
<style>
label {
  font-weight: bold;
}
label , input {
  margin-top: 10px;
}
.main {
  margin: 50px;
  padding-top: 20px;
}
.card {
  padding: 20px;
  margin-top: 20px;
}
</style>
