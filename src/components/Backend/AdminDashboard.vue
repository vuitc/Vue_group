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
        <a href="#">
          <i class="bx bxs-dashboard"></i>
          <span class="text">Sản phẩm</span>
        </a>
      </li>
      <li>
        <a href="#">
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
        <a href="#" class="btn-download">
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
      </ul>

      <div class="table-data">
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
                <td><button class="btn btn-info">Edit</button></td>
                <td><button class="btn btn-danger">Xóa</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
    <!-- MAIN -->
  </section>
  <!-- CONTENT -->
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      fetch("http://127.0.0.1:8000/api/products")
        .then((response) => response.json())
        .then((data) => {
          this.products = data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
  },
};
</script>

<style src="@/assets/admin-dashboard.css" scoped></style>
