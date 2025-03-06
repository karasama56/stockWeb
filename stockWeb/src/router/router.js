import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Stock from "@/views/pages/stock.vue";

const routes = [
    { path: "/", name: "home-link", component: Home },
    { path: "/stock", name: "stock-link", component: Stock },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;