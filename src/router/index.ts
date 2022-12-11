import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("../views/GameView.vue"),
  },
  {
    path: "/ranking",
    name: "Ranking",
    component: () => import("../views/RankingView.vue"),
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router