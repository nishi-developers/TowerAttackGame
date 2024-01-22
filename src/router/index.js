import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Game",
            component: () => import("@/views/Game.vue"),
        },
    ],
});

export default router;
