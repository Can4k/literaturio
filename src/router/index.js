import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Books from "@/pages/Books";
import Tests from "@/pages/Tests";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/tests',
    name: 'Tests',
    component: Tests
  }
]

const router = new VueRouter({
  routes
})

export default router
