import { createApp } from 'vue'
import router from './router';
import store from '@/store/store';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'jquery';
// import 'popper.js';
import '@fortawesome/fontawesome-free/css/all.css';
// import './assets/css/style.css';
import App from './App.vue';
const app=createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
