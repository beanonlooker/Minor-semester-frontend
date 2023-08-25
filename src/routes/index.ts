import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/test',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/team',
        component: () => import('../pages/Team/index.vue')
    },
    {
        path: '/login',
        component: () => import('../pages/Login.vue')
    },
    {
        path: '/document',
        component: () => import('../pages/Document.vue')
    },
    {
        path: '/chatroom',
        component: () => import('../components/ChatForm.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router