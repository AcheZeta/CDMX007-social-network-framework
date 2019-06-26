import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Wall from './views/Wall.vue'
import Signup from './views/Signup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/wall',
      name: 'wall',
      component: Wall,
      meta: {
        requieresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
})
