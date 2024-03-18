<template>
    <!-- Đánh dấu component -->
    <div class="edit-product">
        <!-- Biểu mẫu để chỉnh sửa một sản phẩm. Sự kiện 'submit' được ngăn chặn và thay vào đó gọi phương thức 'submitForm' -->
        <form @submit.prevent="submitForm" class="edit-product-form">
            <!-- Các trường input khác nhau được ràng buộc với các thuộc tính sản phẩm với xử lý lỗi -->
            <input class="input-field" v-model="product.name" placeholder="Tên Sản Phẩm" />
            <p v-if="errors.name" class="error">{{ errors.name }}</p>
            
            <input class="input-field" v-model="product.description" placeholder="Mô Tả Sản Phẩm" />
            <p v-if="errors.description" class="error">{{ errors.description }}</p>
            
            <input class="input-field" v-model="product.price" placeholder="Giá Sản Phẩm" />
            <p v-if="errors.price" class="error">{{ errors.price }}</p>
            
            <!-- Nút nộp biểu mẫu -->
            <button type="submit" class="submit-button">Cập Nhật Sản Phẩm</button>
        </form>
    </div>
</template>

<script>
// Import các chức năng cần thiết từ Vue 3 Composition API
import { ref, onMounted } from 'vue';
// Import các chức năng định tuyến
import { useRoute, useRouter } from 'vue-router';
// Import axios để thực hiện các yêu cầu HTTP
import axios from '@/axios';

export default {
    setup() {
        // Tạo một tham chiếu linh hoạt cho đối tượng sản phẩm và thông báo lỗi
        const product = ref({ id: null, name: '', description: '', price: '' });
        const errors = ref({});

        // Lấy instance route hiện tại và trích xuất id sản phẩm từ đó
        const route = useRoute();
        product.value.id = route.params.id;

        // Lấy instance router
        const router = useRouter();

        // Định nghĩa hàm xác nhận input
        const validateInput = () => {
            const errorMessages = {};
            if (!product.value.name) errorMessages.name = 'Tên là bắt buộc';
            if (!product.value.description) errorMessages.description = 'Mô Tả là bắt buộc';
            if (!product.value.price || isNaN(product.value.price)) errorMessages.price = 'Giá là bắt buộc và phải là số';
            return errorMessages;
        };

        // Định nghĩa hàm nộp biểu mẫu
        const submitForm = async () => {
            const errorMessages = validateInput();
            if (Object.keys(errorMessages).length > 0) {
                errors.value = errorMessages;
                return;
            }

            // Gửi dữ liệu sản phẩm đã cập nhật đến server
            try {
                await axios.put(`/products/${product.value.id}`, product.value);
                // Nếu cập nhật thành công, chuyển hướng đến trang Danh Sách Sản Phẩm
                router.push('/');
            } catch (error) {
                console.error("Đã xảy ra lỗi khi cập nhật sản phẩm:", error);
                if (error.response && error.response.status === 422) {
                    // Xử lý lỗi validation từ phía server
                    errors.value = error.response.data.errors;
                }
            }
        };

        // Fetch dữ liệu sản phẩm từ server khi component được mounted
        onMounted(async () => {
            try {
                const response = await axios.get(`/products/${product.value.id}`);
                product.value.name = response.data.name;
                product.value.description = response.data.description;
                product.value.price = response.data.price;
            } catch (error) {
                console.error("Đã xảy ra lỗi khi lấy thông tin sản phẩm:", error);
            }
        });

        // Expose các tham chiếu linh hoạt và phương thức để sử dụng trong template
        return { product, submitForm, errors };
    }
};
</script>

    
    
    <style scoped>
    .error {
    color: red;
    }
    .edit-product {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    }
    
    .input-field {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    font-size: 1em;
    }
    
    .submit-button {
    padding: 10px 20px;
    background-color: #FF9800;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    }
    
    .submit-button:hover {
    background-color: #e68a00;
    }
    </style>