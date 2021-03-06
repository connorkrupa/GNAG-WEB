import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import SignIn from '@/views/SignIn.vue';
import Dashboard from '@/views/Dashboard.vue';
import Settings from '@/views/Settings.vue'
import { store } from './store/store'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
          console.log("route authorized: " + store.getters.getIsAuthorized)
        if(!store.getters.getIsAuthorized) {
          next('/sign-in')
        } else {
          next()
        }
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    }
  ],
});
