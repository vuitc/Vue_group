<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <router-link :to="'/admin/products/' + product.id">{{ product.name }}</router-link>
      <button @click="deleteProduct(product.id)">Delete</button>
    </div>
    <router-link to="/admin/products/new">Add Product</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>
