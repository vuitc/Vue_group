// store/modules/products.js
const state = {
    products: [],
    product: null
  };
  
  const mutations = {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    }
  };
  
  const actions = {
    async fetchProducts({ commit }) {
      // Gọi API hoặc local storage để lấy danh sách sản phẩm
      const products = []; // Kết quả từ API hoặc local storage
      commit('setProducts', products);
    },
    async fetchProduct({ commit }, id) {
      // Gọi API hoặc local storage để lấy chi tiết sản phẩm
      const product = null; // Kết quả từ API hoặc local storage
      commit('setProduct', product);
    },
    async addProduct({ commit }, data) {
      // Gọi API hoặc local storage để thêm sản phẩm mới
      // Sau khi thêm thành công, cập nhật store
    },
    async updateProduct({ commit }, { id, data }) {
      // Gọi API hoặc local storage để cập nhật thông tin sản phẩm
      // Sau khi cập nhật thành công, cập nhật store
    },
    async deleteProduct({ commit }, id) {
      // Gọi API hoặc local storage để xóa sản phẩm
      // Sau khi xóa thành công, cập nhật store
    }
  };
  
  export default {
    state,
    mutations,
    actions
  };
  