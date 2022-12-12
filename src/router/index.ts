import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/game",
      name: "Game",
      component: () => import("../views/GameView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/ranking",
      name: "Ranking",
      component: () => import("../views/RankingView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/signin",
      name: "SignIn",
      component: () => import("../views/SignIn.vue"),
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  })
}

router.beforeEach( async (to, from, next) =>{
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if (await getCurrentUser()){
      next();
    } else {
      alert("you dont have access!");
      next("/");
    }
  } else{
    next();
  }
})

export default router