// Import các module cần thiết
import { createStore } from "vuex"; // Hàm createStore của Vuex để tạo store
import router from "./router"; // Import router để điều khiển định tuyến trong các hành động

// Tạo store Vuex
export default createStore({
  // Đối tượng state chứa tất cả dữ liệu reactive mà chúng ta muốn chia sẻ qua các component
  state: {
    // Khởi tạo isLoggedIn từ localStorage để duy trì trạng thái đăng nhập qua các lần làm mới trang
    isLoggedIn: !!localStorage.getItem("token"),
  },
  // Mutations là các hàm trực tiếp thay đổi state.
  // Mỗi mutation handler nhận toàn bộ cây state làm đối số đầu tiên.
  mutations: {
    // Mutation để đặt isLoggedIn thành true
    LOGIN(state) {
      state.isLoggedIn = true;
    },
    // Mutation để đặt isLoggedIn thành false
    LOGOUT(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("token"); 
    },
  },
  // Actions là các hàm gây ra các hiệu ứng phụ và có thể liên quan
  // đến các hoạt động bất đồng bộ. Actions cũng có thể commit mutations.
  actions: {
    // Hành động đăng nhập commit LOGIN mutation
    login({ commit }) {
      // logic đăng nhập ở đây, sau đó:
      commit("LOGIN");
    },
    // Hành động đăng xuất commit LOGOUT mutation và gửi hành động navigateToLogin
    logout({ commit, dispatch }) {
      commit("LOGOUT");
      dispatch("navigateToLogin");
    },
    // Hành động điều hướng đến route đăng nhập bằng Vue Router
    navigateToLogin() {
      router.push({ name: "Login" });
    },
  },
});
