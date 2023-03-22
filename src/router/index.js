import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/page/home';
import Blog from "@/components/page/blog/blog";
import Store from "@/components/page/store/Store";
import Orders from "@/components/page/store/orders";
import Discuss from "@/components/page/discuss/discuss";
import Expert from '@/components/page/expert/expert';
import VueQuillEditor from "vue-quill-editor";
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueRouter);
Vue.use(VueQuillEditor);

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/discuss',
            component: Discuss
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
        {
            path: '/expert',
            component: Expert
        },
        { path: '*', redirect: '/home' }
    ]
});

export default router;