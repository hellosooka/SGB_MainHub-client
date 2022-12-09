import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import AuthorizationView from "../views/AuthorizationView.vue";
import SettingsView from "../views/SettingsView.vue";
import PurchasesView from "../views/PurchasesView.vue";
import SearchRoomView from "../views/SearchRoomView.vue";
import BlogView from "../views/BlogView.vue";
import PostView from "../views/PostView.vue";
import GameView from "../views/GameView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/registration",
      name: "registration",
      component: RegistrationView,
    },
    {
      path: "/authorization",
      name: "authorization",
      component: AuthorizationView,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
    },
    {
      path: "/purchases",
      name: "purchases",
      component: PurchasesView,
    },
    {
      path: "/games/:id",
      name: "game",
      component: GameView,
    },
    {
      path: "/search-room",
      name: "search-room",
      component: SearchRoomView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/blog/:post",
      name: "post",
      component: PostView,
    },
  ],
});

export default router;
