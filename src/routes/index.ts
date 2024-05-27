import { createRouter, createWebHistory } from "vue-router";

let routes = [
    {
        path: '/',
        redirect: () => {
            return { path: '/home' }
        },
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@pages/Home.vue')
    },
    {
        path: '/call-for-papers',
        name: 'call-for-papers',
        component: () => import('@pages/CallForPapers.vue')
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
