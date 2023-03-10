import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/page/home';
import Communication from "@/components/page/communication/communication";
import Blog from "@/components/page/blog/blog";
import Store from "@/components/page/store/Store";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/communication',
            component: Communication
        },
        {
            path: '/blog',
            component: Blog
        },
        {
            path: '/store',
            component: Store
        },
        { path: '*', redirect: '/home' }
    ]
});

export default router;