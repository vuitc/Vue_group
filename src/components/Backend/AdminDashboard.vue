<template>
  <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />

  <!-- SIDEBAR -->
  <section id="sidebar">
    <a href="#" class="brand">
      <i class="bx bxs-smile"></i>
      <span class="text">Trang Admin</span>
    </a>
    <ul class="side-menu top">
      <li class="active">
        <a
          href="#"
          @click="
            showProducts = true;
            showCategories = false;
          "
        >
          <i class="bx bxs-dashboard"></i>
          <span class="text">Sản phẩm</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          @click="
            showProducts = false;
            showCategories = true;
          "
        >
          <i class="bx bxs-shopping-bag-alt"></i>
          <span class="text">Danh mục sản phẩm</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="bx bxs-doughnut-chart"></i>
          <span class="text">...</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="bx bxs-message-dots"></i>
          <span class="text">...</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="bx bxs-group"></i>
          <span class="text">...</span>
        </a>
      </li>
    </ul>
    <ul class="side-menu">
      <li>
        <a href="#">
          <i class="bx bxs-cog"></i>
          <span class="text">...</span>
        </a>
      </li>
      <li>
        <a href="#" class="logout">
          <i class="bx bxs-log-out-circle"></i>
          <span class="text">Logout</span>
        </a>
      </li>
    </ul>
  </section>
  <!-- SIDEBAR -->

  <!-- CONTENT -->
  <section id="content">
    <!-- MAIN -->
    <main>
      <div class="head-title">
        <div class="left">
          <h1 style="color: red">Dashboard</h1>
          <ul class="breadcrumb">
            <li>
              <a style="color: brown" href="#">Dashboard</a>
            </li>
            <li><i class="bx bx-chevron-right"></i></li>
            <li>
              <a style="color: brown" class="active" href="#">Home</a>
            </li>
          </ul>
        </div>
        <a href="#" class="">
          <i class="bx bxs-cloud-download"></i>
          <span class="text">Download PDF</span>
        </a>
      </div>

      <ul class="box-info">
        <li>
          <i class="bx bxs-calendar-check"></i>
          <span class="text">
            <h3>1020</h3>
            <p>Số sản phẩm trên trang</p>
          </span>
        </li>
        <li>
          <i class="bx bxs-group"></i>
          <span class="text">
            <h3>2834</h3>
            <p>Số danh mục</p>
          </span>
        </li>
        <li>
          <i class="bx bxs-dollar-circle"></i>
          <span class="text">
            <h3>$2543</h3>
            <p>Tổng hóa đơn</p>
          </span>
        </li>
        <li>
          <button
            @click="showModal('addProductModal')"
            style="background-color: #0ea5e9; color: white; width: 200px; height: 40px"
            type="button"
            class="btn btn-primary"
          >
            Thêm sản phẩm
          </button>

          <div id="addProductModal" class="modal">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Header của modal -->
                <div class="modal-header">
                  <h5 class="modal-title">Thêm sản phẩm mới</h5>
                  <button
                    type="button"
                    class="close"
                    @click="closeModal('addProductModal')"
                  >
                    <span style="width: 50px" class="btn btn-danger">&times;</span>
                  </button>
                </div>
                <!-- Nội dung của modal -->
                <div class="modal-body">
                  <!-- Form nhập thông tin sản phẩm -->
                  <form @submit.prevent="addProduct">
                    <div class="form-group">
                      <label style="color: black" for="productName">Tên sản phẩm:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="productName"
                        v-model="newProduct.name"
                        required
                      />
                      <label style="color: black" for="productPrice"
                        >Thông tin sản phẩm:</label
                      >
                      <textarea
                        style="height: 200px"
                        type="text"
                        class="form-control"
                        id="productDescription"
                        v-model="newProduct.description"
                        required
                      />
                      <label style="color: black" for="productPrice">Giá:</label>
                      <input
                        type="number"
                        class="form-control"
                        id="productPrice"
                        v-model="newProduct.price"
                        required
                      />
                      <label style="color: black" for="productCategory_id"
                        >Danh mục sản phẩm</label
                      >
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        id="productCategory_id"
                        v-model="newProduct.category_id"
                      >
                        <option selected></option>
                        <option value="1">Rau xanh , rau tươi</option>
                        <option value="2">Rau củ quả</option>
                        <option value="3">Nấm và hạt</option>
                        <option value="4">Rau mùi</option>
                      </select>
                      <label style="color: black" for="productSoluongton"
                        >Số lượng tồn:</label
                      >
                      <input
                        type="number"
                        class="form-control"
                        id="productSoluongton"
                        v-model="newProduct.soluongton"
                        required
                      />
                      <label style="color: black" for="productTrongluong"
                        >Trọng lượng:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="productTrongluong"
                        v-model="newProduct.trongluong"
                        required
                      />
                      <label style="color: black" for="productImage">Hình ảnh:</label>
                      <input
                        type="file"
                        class="form-control"
                        id="productImage"
                        @change="handleImageChange"
                        required
                      />
                      <img
                        :src="selectedImageURL || defaultImageURL"
                        alt="Selected Image"
                      />
                    </div>
                    <!-- Thêm các trường thông tin khác của sản phẩm (giá, mô tả, vv) tại đây -->
                    <!-- Button submit -->
                    <button
                      style="margin-top: 20px; height: 40px; width: 200px"
                      type="submit"
                      class="btn btn-success"
                    >
                      Thêm sản phẩm
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div v-if="showProducts" class="table-data">
        <div class="order">
          <div class="head">
            <h3 style="color: black">Sản phẩm</h3>
            <i class="bx bx-search"></i>
            <i class="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr style="color: black; font-size: larger">
                <th>Hình</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Trọng lượng</th>
              </tr>
            </thead>
            <tbody v-for="product in products" :key="product.id">
              <tr>
                <td>
                  <img
                    style="width: 100px; height: 100px; object-fit: cover"
                    :src="'img/' + product.image"
                    class="img-fluid rounded-top"
                    alt=""
                  />
                </td>
                <td>
                  <p style="color: black">{{ product.name }}</p>
                </td>
                <td style="color: black">{{ product.price }}0đ</td>
                <td>
                  <span class="status completed">{{ product.trongluong }}</span>
                </td>
                <td></td>
                <td></td>
                <td>
                  <button style="width: 100px; color: white" class="btn btn-info">
                    <router-link
                      style="width: 100px; color: white"
                      :to="{ name: 'EditProduct', params: { id: product.id } }"
                    >
                      Chỉnh sửa
                    </router-link>
                  </button>
                </td>
                <td>
                  <button
                    style="width: 70px"
                    class="btn btn-danger"
                    @click="deleteProduct(product.id)"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- danh mục sản phẩm -->
      <div v-if="showCategories">
        <ul>
          <li v-for="category in categories" :key="category.id">
            {{ category.name }}
          </li>
        </ul>
      </div>
    </main>
    <!-- MAIN -->
  </section>
  <!-- CONTENT -->
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      showProducts: true, // Mặc định hiển thị phần sản phẩm
      showCategories: false, // Ẩn phần danh mục sản phẩm ban đầu
      products: [], // Danh sách sản phẩm
      categories: [], // Danh sách danh mục sản phẩm
      newProduct: {
        name: "",
        description: "",
        price: "",
        category_id: "",
        image: null,
        soluongton: "",
        trongluong: "",
        quanlity: 0,
      },
      selectedImageURL: null, // Đường dẫn của hình ảnh được chọn
      defaultImageURL: "/path/to/default/image.jpg", // Đường dẫn mặc định của hình ảnh
    };
    props: ["product"];
  },
  mounted() {
    this.fetchProducts();
    this.fetchCategories();
  },
  methods: {
    // Hiển thị hoặc ẩn modal
    showModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";
      }
    },
    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "none";
      }
    },
    // lấy sản phâm từ server
    fetchProducts() {
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((data) => {
          this.products = data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    // lấy danh mục sản phẩm từ server
    fetchCategories() {
      fetch("http://localhost:3000/categories")
        .then((response) => response.json())
        .then((data) => {
          this.categories = data;
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    },
    // Thêm sản phẩm mới
    async addProduct() {
      if (!this.newProduct.image) {
        Swal.fire({
          icon: "error",
          title: "Lỗi!",
          text: "Vui lòng chọn hình ảnh sản phẩm.",
        });
        return; // Không thêm sản phẩm nếu không có hình ảnh
      }

      try {
        // Thêm sản phẩm mới
        const response = await fetch("http://localhost:3000/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.newProduct),
        });
        if (response.ok) {
          // Thêm sản phẩm thành công
          Swal.fire({
            icon: "success",
            title: "Sản phẩm đã được thêm thành công!",
          });
          this.fetchProducts(); // Cập nhật danh sách sản phẩm
          this.closeModal("addProductModal");
          this.newProduct = {}; // Xóa dữ liệu nhập của sản phẩm mới
        } else {
          throw new Error("Lỗi khi thêm sản phẩm");
        }
      } catch (error) {
        // Xử lý lỗi
        console.error("Đã xảy ra lỗi:", error);
        Swal.fire({
          icon: "error",
          title: "Lỗi!",
          text: "Đã xảy ra lỗi khi thêm sản phẩm.",
        });
      }
    },

    handleImageChange(event) {
      const file = event.target.files[0]; // Lấy tệp hình ảnh từ sự kiện change
      if (file) {
        // Gán tên của tệp hình ảnh cho thuộc tính image trong đối tượng newProduct
        this.newProduct.image = file.name;
      }
    },
    // Xóa sản phẩm
    deleteProduct(productId) {
      Swal.fire({
        title: "Bạn có chắc chắn muốn xóa sản phẩm này?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Đồng ý",
        cancelButtonText: "Hủy",
      }).then((result) => {
        if (result.isConfirmed) {
          // Nếu người dùng xác nhận xóa sản phẩm
          fetch(`http://localhost:3000/products/${productId}`, {
            method: "DELETE",
          })
            .then((response) => {
              if (response.ok) {
                // Xóa sản phẩm thành công
                Swal.fire({
                  icon: "success",
                  title: "Sản phẩm đã được xóa thành công!",
                });
                return this.fetchProducts();
                // Cập nhật giao diện nếu cần
              } else {
                // Xảy ra lỗi khi xóa sản phẩm
                throw new Error("Lỗi khi xóa sản phẩm");
              }
            })
            .catch((error) => {
              // Xử lý lỗi
              console.error("Đã xảy ra lỗi:", error);
              Swal.fire({
                icon: "error",
                title: "Lỗi!",
                text: "Đã xảy ra lỗi khi xóa sản phẩm.",
              });
            });
        }
      });
    },
  },
};
</script>

<style src="@/assets/admin-dashboard.css" scoped></style>
