<template>
    <!-- Container chi tiết sản phẩm -->
    <!-- Sử dụng directive 'v-if' của Vue để chỉ hiển thị container này nếu 'product' là true -->
    <div v-if="product" class="product-details">
        <!-- Hiển thị tên sản phẩm -->
        <h2 class="product-title">{{ product.name }}</h2>
        <!-- Hiển thị mô tả sản phẩm -->
        <p class="product-description">{{ product.description }}</p>
        <!-- Hiển thị giá sản phẩm -->
        <p class="product-price">Giá: ${{ product.price }}</p>
    </div>
</template>

<script>
import axios from '@/axios'; // Import axios instance

export default {
    // Dữ liệu của component
    data() {
        return {
            // Khởi tạo product là null
            product: null
        };
    },
    // Lifecycle hook được gọi sau khi instance được mounted
    async mounted() {
        // Lấy ID của sản phẩm từ route params
        const productId = this.$route.params.id;
        try {
            // Gửi yêu cầu GET tới API để lấy dữ liệu của sản phẩm
            const response = await axios.get(`/products/${productId}`);
            // Cập nhật dữ liệu sản phẩm với dữ liệu từ API
            this.product = response.data;
        } catch (error) {
            // Nếu có lỗi, ghi log lỗi ra console
            console.error("Đã xảy ra lỗi khi lấy thông tin sản phẩm:", error);
        }
    }
};
</script>

    
    <style scoped>
    .product-details {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    }
    
    .product-title {
    margin-bottom: 20px;
    font-size: 2em;
    }
    
    .product-description {
    font-size: 1.2em;
    }
    
    .product-price {
    margin-top: 20px;
    font-size: 1.2em;
    font-weight: bold;
    }
    </style>