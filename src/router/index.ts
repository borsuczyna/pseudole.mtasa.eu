import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Homepage from '../views/Homepage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage
        },
    ]
})

export default router
