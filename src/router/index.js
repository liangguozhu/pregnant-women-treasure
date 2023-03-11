import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/page/home';



Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        { path: '*', redirect: '/home' }
    ]
});

export default router;