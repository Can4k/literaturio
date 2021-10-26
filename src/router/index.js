import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import BooksPage from "@/pages/BooksPage";
import TestsPage from "@/pages/TestsPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/books',
    name: 'Books',
    component: BooksPage
  },
  {
    path: '/tests',
    name: 'Tests',
    component: TestsPage
  }
]

const router = new VueRouter({
  routes
})

export default router
