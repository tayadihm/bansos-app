import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'bansos.index',
        component: () => import("../views/bansos/Index.vue")
    },
    {
        path: '/create',
        name: 'bansos.create',
        component: () => import("../views/bansos/Create.vue")
    },
    {
        path: '/edit/:id',
        name: 'bansos.edit',
        component: () => import("../views/bansos/Edit.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;