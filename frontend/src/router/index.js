import Vue from 'vue'
import VueRouter from 'vue-router'
//import ClientList from '../views/client-list.vue'
import Profile from '../views/profile.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
//import { mutations } from '../store'

Vue.use(VueRouter)

export default function init(store) {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'Profile',
        component: Profile,
      },
      {
        path: '/users/:id',
        name: 'ClientDetail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/client-detail.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        },
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        }
      },
      // {
      //   path: '/logout',
      //   name: 'logout',
      //   beforeEnter(to, from, next) {
      //     console.log({ t: store.state, mutations });
      //     commit(mutations.SET_USER, null)
      //     if (store.state.user) return next('/profile')
      //     return next()
      //   },
      // },
      {
        path: '/profile',
        name: 'profile',
        component: Profile,
        beforeEnter(to, from, next) {
          if (!store.state.user) return next('/login')
          return next()
        },
      },
    ],
  })
}
