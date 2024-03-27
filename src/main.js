import { createApp } from 'vue'
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'jquery';
// import 'popper.js';

import '@fortawesome/fontawesome-free/css/all.css';
// import './assets/css/style.css';
import App from './App.vue';
const app=createApp(App);
app.use(VueSweetalert2);
app.use(router);
app.mount('#app');
