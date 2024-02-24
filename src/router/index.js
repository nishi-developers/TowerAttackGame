import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "top",
            component: () => import("@/views/top.vue"),
        },
        {
            path: "/menu",
            name: "Menu",
            component: () => import("@/views/menu.vue"),
        },
        {
            path: "/game/:stageid",
            name: "Game",
            component: () => import("@/views/game.vue"),
        },
        {
            path: "/terms",
            name: "Terms",
            component: () => import("@/views/terms.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: () => import("@/views/404.vue"),
        },
    ],
});

export default router;
