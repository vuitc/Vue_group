<template>
  <!-- Single Page Header start -->
  <div class="container-fluid page-header py-5">
    <h1 class="text-center text-white display-6">Cart</h1>
    <ol class="breadcrumb justify-content-center mb-0">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Pages</a></li>
      <li class="breadcrumb-item active text-white">Cart</li>
    </ol>
  </div>
  <!-- Single Page Header End -->

  <!-- Cart Page Start -->
  <div class="container-fluid py-5">
    <div class="container py-5">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Products</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cart, index) in allCarts" :key="index">
              <th scope="row">
                <div class="d-flex align-items-center">
                  <img :src="'img/' + cart.image" class="img-fluid me-5 rounded-circle"
                    style="width: 80px; height: 80px" alt="" />
                </div>
              </th>
              <td>
                <p class="mb-0 mt-4">{{ cart.name }}</p>
              </td>
              <td>
                <p class="mb-0 mt-4">{{ cart.price }}</p>
              </td>
              <td>
                <div class="input-group quantity mt-4" style="width: 100px">
                  <div class="input-group-btn">
                    <!-- <button class="btn btn-sm btn-minus rounded-circle bg-light border">
                      <i class="fa fa-minus"></i>
                    </button> -->
                    <a class="btn btn-sm btn-plus rounded-circle bg-light border" @click="delToCart(cart.id)">
                      <i class="fa fa-minus"></i>
                    </a>
                  </div>
                  <input type="text" class="form-control form-control-sm text-center border-0" v-model="cart.quantity"
                    readonly />

                  <div class="input-group-btn">
                    <!-- <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                      <i class="fa fa-plus"></i>
                    </button> -->
                    <a class="btn btn-sm btn-plus rounded-circle bg-light border" @click="addToCart(cart.id)">
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </td>
              <td>
                <p class="mb-0 mt-4">{{ cart.price * cart.quantity }}</p>
              </td>
              <td>
                <!-- <button class="btn btn-md rounded-circle bg-light border mt-4">
                  <i class="fa fa-times text-danger"></i>
                </button> -->
                <a class="btn btn-sm btn-plus rounded-circle bg-light border mt-4" @click="removeToCart(index)">
                  <i class="fa fa-times text-danger"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td colspan="6">
                <div class="d-flex justify-content-end">
                  <h5 class="mb-0 me-4">Total</h5>
                  <p class="mb-0">{{ sumCarts }}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="6">
                <div class="d-flex justify-content-end">
                  <button class="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                    type="button">
                    Proceed Checkout
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() { },
  methods: {
    addToCart(productId) {
      this.$store.dispatch("addToCart", productId);
    },
    delToCart(productId) {
      this.$store.dispatch("delToCart", productId);
    },
    removeToCart(index) {
      this.$store.commit("removeToCart", index);
    },
  },
  computed: {
    ...mapGetters(["allCarts",'sumCarts']),
  },
};
</script>

<style></style>
