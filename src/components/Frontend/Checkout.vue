<template>
    <!-- Single Page Header start -->
    <div class="container-fluid page-header py-5">
        <h1 class="text-center text-white display-6">Checkout</h1>
        <ol class="breadcrumb justify-content-center mb-0">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Pages</a></li>
            <li class="breadcrumb-item active text-white">Checkout</li>
        </ol>
    </div>
    <!-- Single Page Header End -->


    <!-- Checkout Page Start -->
    <div class="container-fluid py-5">
        <div class="container py-5">
            <h1 class="mb-4">Billing details</h1>
            <form action="#">
                <div class="row g-5">
                    <div class="col-md-12 col-lg-6 col-xl-7" v-if="isUser">
                        <div class="form-item">
                            <label class="form-label my-3">Your Name</label>
                            <input type="text" class="form-control" v-model="isUser.name" readonly>
                        </div>
                        <div class="form-item">
                            <label class="form-label my-3">Address <sup>*</sup></label>
                            <input type="text" class="form-control" v-model="isUser.diachi">
                        </div>
                        <div class="form-item">
                            <label class="form-label my-3">Mobile<sup>*</sup></label>
                            <input type="tel" class="form-control" v-model="isUser.phone">
                        </div>
                        <div class="form-item">
                            <label class="form-label my-3">Email Address<sup>*</sup></label>
                            <input type="email" class="form-control" v-model="isUser.email" readonly>
                        </div>

                    </div>
                    <div class="col-md-12 col-lg-6 col-xl-5">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Products</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(cart, index) in allCarts" :key="index">
                                        <th scope="row">
                                            <div class="d-flex align-items-center mt-2">
                                                <img :src="'img/' + cart.image" class="img-fluid rounded-circle"
                                                    style="width: 90px; height: 90px;" alt="">
                                            </div>
                                        </th>
                                        <td class="py-5">{{ cart.name }}</td>
                                        <td class="py-5">{{ cart.price }}</td>
                                        <td class="py-5">{{ cart.quantity }}</td>
                                        <td class="py-5">{{ cart.price * cart.quantity }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                        </th>
                                        <td class="py-5"></td>
                                        <td class="py-5"></td>
                                        <td class="py-5">
                                            <p class="mb-0 text-dark py-3">Subtotal</p>
                                        </td>
                                        <td class="py-5">
                                            <div class="py-3 border-bottom border-top">
                                                <p class="mb-0 text-dark">{{ sumCarts }}</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row g-4 text-center align-items-center justify-content-center pt-4">
                            <button type="button"
                                class="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
                                @click="placeOrder">Place
                                Order</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- Checkout Page End -->
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2'

export default {
    name: "CheckoutCompoment",
    data() {
        return {

        }
    },
    mounted() {
        this.$store.commit('fetchIsUser',JSON.parse(localStorage.getItem("isUser")) || "");
    },
    computed: {
        ...mapGetters(['allCarts', 'sumCarts','isUser']),
        
    },
    methods: {
        async placeOrder() {
            try {
                if (!this.isUser.name || !this.isUser.diachi || !this.isUser.phone || !this.isUser.email) {
                    alert('Vui lòng nhập đầy đủ thông tin thanh toán.');
                   
                    return;
                }

                if (this.allCarts.length === 0) {
                    alert('Không có sản phẩm trong giỏ hàng.');
                    return;
                }
                const res = await axios.get('http://localhost:3000/hoadons');
                const hoadons = res.data;
                const maxId = Math.max(...hoadons.map(hoadon => hoadon.id)) + 1;

                const orderData = {
                    id: maxId.toString(),
                    user_id: this.isUser.id,
                    phone: this.isUser.phone,
                    email: this.isUser.email,
                    total_amount: this.sumCarts,
                };

                const response = await axios.post('http://localhost:3000/hoadons', orderData);
                console.log(response.data);

                const ress = await axios.get('http://localhost:3000/chitiethoadons');
                const cts = ress.data;
                const maxIds = Math.max(...cts.map(ct => ct.id)) + 1;
                for (let i = 0; i < this.allCarts.length; i++) {
                    const hd = {
                        id: (maxIds + i).toString(),
                        hoadon_id: maxId,
                        product_id: this.allCarts[i].id,
                        quantity: this.allCarts[i].quantity,
                        price: this.allCarts[i].price * this.allCarts[i].quantity,
                    };
                    // tính lại tồn kho
                    const newTonKho = this.allCarts[i].stock - this.allCarts[i].quantity;
                    let setId = this.allCarts[i].id.toString();
                    const newPro = await axios.patch(`http://localhost:3000/products/${setId}`, { quantity: newTonKho });

                    const re = await axios.post('http://localhost:3000/chitiethoadons', hd);
                    console.log(newPro.data);
                    console.log(re.data);
                }
                Swal.fire({
                    title: 'Thanh toán',
                    text: 'Thanh toán thành công',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })

                await this.$store.dispatch('hoanTatThanhToan');
                // tại đây gọi vuex hoanTatThanhToan
            } catch (error) {
                console.error('Lỗi khi gửi đơn hàng:', error);
            }
        },
    },
};
</script>


<style></style>
