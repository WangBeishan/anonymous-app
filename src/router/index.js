import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JoinScreen from "../views/JoinScreen";
import About from "../views/About";

const routes = [
  {
    path: '/',
    name: 'Join',
    component: JoinScreen
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  base: "/ui/",
  history: createWebHistory(),
  routes
})

export default router
