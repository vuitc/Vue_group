import axios from "axios";
import router from "@/router";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      // Định nghĩa trạng thái của ứng dụng ở đây
      products: [
        {
          id: 21,
          name: "Product 21",
          description: "Description of product 1",
          price: 10,
          category_id: "1",
          image: "product1.jpg",
          soluongton: "100",
          trongluong: "200g",
          quantity: 11,
        },
      ],
      cart: [],
      users: [
        {
          id: 4,
          name: "User 4",
          email: "user4@example.com",
          phone: "987654321",
          diachi: "456 Avenue, Town",
          role: 0,
          password: "123456",
        },
      ],
      isLoggedIn: !!localStorage.getItem("email"),
      isEmail: localStorage.getItem("email"),
      role: !!localStorage.getItem("role"),
      isUser: JSON.parse(localStorage.getItem("isUser")) || "",
    };
  },
  mutations: {
    // Định nghĩa mutations để thay đổi trạng thái ở đây
    setUpProducts(state, productsPayload) {
      state.products = productsPayload;
    },
    setUpUsers(state, usersPayload) {
      state.users = usersPayload;
    },
    fetchIsUser(state, userData) {
        state.isUser = userData;
      },
    addToCart(state, productId) {
      const product = state.products.find(
        (product) => product.id === productId
      );
      const cartProductIndex = state.cart.findIndex(
        (product) => product.id === productId
      );

      if (cartProductIndex !== -1) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
        state.cart[cartProductIndex].quantity++;
        console.log(state.cart);
      } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm vào giỏ hàng
        console.log(state.cart);
        state.cart.push({
          ...product,
          stock: product.quantity,
          quantity: 1,
        });
      }

      // Giảm số lượng sản phẩm trong kho sau khi thêm vào giỏ hàng
      if (product) {
        product.quantity--;
      }
    },
    delToCart(state, productId) {
      const cartProductIndex = state.cart.findIndex(
        (product) => product.id === productId
      );

      if (cartProductIndex !== -1) {
        // Giảm số lượng sản phẩm trong giỏ hàng
        state.cart[cartProductIndex].quantity--;

        // Tăng số lượng sản phẩm trong kho
        const productIndex = state.products.findIndex(
          (product) => product.id === productId
        );
        if (productIndex !== -1) {
          state.products[productIndex].quantity++;
        }
      }
    },

    removeToCart(state, index) {
      const productId = state.cart[index].id;
      // Tăng số lượng sản phẩm trong kho
      const productIndex = state.products.findIndex(
        (product) => product.id === productId
      );
      if (productIndex !== -1) {
        state.products[productIndex].quantity += state.cart[index].quantity;
      }
      // Xóa sản phẩm khỏi giỏ hàng
      state.cart.splice(index, 1);
    },
    LOGIN(state, role, user) {
     
        state.isLoggedIn = true;
        state.isEmail = localStorage.getItem("email");
        state.role = role;
        state.isUser = user;
        
      localStorage.setItem("role", role);

    },
    LOGOUT(state) {
      state.isLoggedIn = false;
      state.role = null;
      state.isEmail = null;
      state.isUser = [];
    },
    clearCart(state) {
        state.cart = [];
    }
  },
  actions: {
    // Định nghĩa actions để gọi mutations hoặc thực hiện các thao tác khác ở đây
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/products");
        commit("setUpProducts", response.data);
      } catch (error) {
        console.error("Lỗi", error);
      }
    },
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/users");
        commit("setUpUsers", response.data); // Gọi mutation để cập nhật users
      } catch (error) {
        console.error("Lỗi", error);
      }
    },
    async addToCart({ commit, state }, productId) {
      // Thực hiện kiểm tra xem sản phẩm còn trong kho không
      const product = state.products.find(
        (product) => product.id === productId
      );

      if (product && product.quantity > 0) {
        commit("addToCart", productId);
      } else {
        console.error("Sản phẩm không còn trong kho hoặc hết hàng.");
      }
    },
    async delToCart({ commit, state }, productId) {
      const product = state.cart.find((product) => product.id === productId);
      if (product && product.quantity > 1) {
        const cartProductIndex = state.cart.findIndex(
          (item) => item === product
        );
        if (cartProductIndex !== -1) {
          commit("delToCart", productId);
        }
      } else {
        const index = state.cart.findIndex((item) => item === product);
        if (index !== -1) {
          commit("removeToCart", index);
        }
      }
    },
    login({ commit, state, dispatch }, { email, password }) {
      const user = state.users.find(
        (user) => user.email === email && user.password === password
      );
      console.log(state.users);
      // Kiểm tra xem người dùng có tồn tại và thông tin đăng nhập có chính xác không
      if (user) {
        const role = user.role;

        // Đăng nhập thành công, cập nhật trạng thái isLoggedIn và lưu email vào localStorage
        localStorage.setItem("email", email);
        localStorage.setItem("isUser", JSON.stringify(user));
        commit("LOGIN", role, user);
        if (role == 1) {
          dispatch("navigateToAdmin");
        } else {
          dispatch("navigateToHome");
        }
      } else {
        // Đăng nhập thất bại, ném một lỗi
        throw new Error("Email hoặc mật khẩu không chính xác");
      }
    },
    logout({ commit, dispatch }) {
      // Thực hiện logout, cập nhật trạng thái isLoggedIn và xóa email khỏi localStorage
      localStorage.removeItem("email");
      localStorage.removeItem("isUser");
      localStorage.removeItem("role");
      commit("LOGOUT");
      // Chuyển hướng đến trang đăng nhập sau khi logout
      dispatch("navigateToLogin");
    },
    navigateToLogin() {
      router.push({ name: "Login" });
    },
    navigateToHome() {
      router.push({ name: "HomeComponent" });
    },
    navigateToAdmin() {
      router.push({ name: "ShopComponent" });
    },
    hoanTatThanhToan({ commit, dispatch }) {
      commit("clearCart");
      dispatch("navigateToHome");
    },
  },
  getters: {
    // Định nghĩa getters để truy cập trạng thái ở đây
    cartSize: (state) => {
      return state.cart.length;
    },
    allProducts: (state) => state.products,
    allCarts: (state) => state.cart,
    cartQuantity: (state) => {
      return state.cart.reduce((total, product) => total + product.quantity, 0);
    },
    sumCarts: (state) => {
      return state.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    isUser:(state)=>state.isUser,
  },
});

export default store;
