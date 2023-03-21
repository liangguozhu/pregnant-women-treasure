import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/page/home';
import Blog from "@/components/page/blog/blog";
import Store from "@/components/page/store/Store";
import Orders from "@/components/page/store/orders";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/blog',
            component: Blog
        },
        {
            path: '/store',
            component: Store
        },
        {
            path: '/order',
            component: Orders
        },
        { path: '*', redirect: '/home' }
    ]
});

export default router;