import './assets/main.css'
import { createApp } from "vue";
import App from "./App.vue";
import router from './router/router.js'; // 確保這裡正確引入



const app = createApp(App);
app.use(router); // 註冊 Vue Router
app.mount("#app");