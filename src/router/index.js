import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/center',
    name: 'Center',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/sth/Center.vue')
  },
  {
    path: '/plat',
    name: 'Plat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/sth/Plat.vue'),
    children:[
      {
        path: '/plat/moon',
        name: 'Moon',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/sth/Moon.vue'),
      },
      {
        path: '/plat/sun',
        name: 'Sun',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/sth/Sun.vue'),
      },
      {
        path: '/plat/sky',
        name: 'Sky',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/sth/Sky.vue'),
        children: [
          {
            path: '/plat/sky/bird',
            name: 'Bird',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/sth/Bird.vue'),
          },
        ]
      },
    ]
  },
  {
    path: '/info',
    name: 'Info',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/sth/Info.vue')
  },
  {
    path: '/blue',
    name: 'Blue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Blue.vue'),
    children:[
      {
        path: '/blue/water',
        name: 'Water',
        component: () => import(/* webpackChunkName: "about" */ '../views/Water.vue'),
        children:[
          {
            path: '/blue/water/flow',
            name: 'flow',
            component: () => import(/* webpackChunkName: "about" */ '../views/Flow.vue'),
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  base:'/test',
  mode:'history',
  routes
})

export default router
