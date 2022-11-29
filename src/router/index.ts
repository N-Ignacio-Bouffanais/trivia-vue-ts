import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import GameView from '../views/GameView.vue'
import HomeView from '../views/HomeView.vue'
import RankingView from '../views/RankingView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/game",
    name: "Game",
    component: GameView,
  },
  {
    path: "/ranking",
    name: "Ranking",
    component: RankingView,
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router