<template>
  <form @submit.prevent="submitForm">
    <input v-model="formData.name" placeholder="Name" />
    <button type="submit">{{ formType === "edit" ? "Update" : "Add" }}</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
      },
    };
  },
  computed: {
    formType() {
      return this.$route.params.id ? "edit" : "new";
    },
    productId() {
      return this.$route.params.id;
    },
  },
  methods: {
    submitForm() {
      if (this.formType === "edit") {
        this.$store.dispatch("updateProduct", {
          id: this.productId,
          data: this.formData,
        });
      } else {
        this.$store.dispatch("addProduct", this.formData);
      }
    },
  },
  created() {
    if (this.formType === "edit") {
      this.$store.dispatch("fetchProduct", this.productId);
    }
  },
};
</script>
