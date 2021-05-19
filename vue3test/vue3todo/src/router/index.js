import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Start from '../views/Start.vue'
// 路由的配置数组
// path: 路由路径 必须以/开头
// component: 对应的路由组件
// name: 路由名字
const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 按需引入
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 按需引入
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 按需引入
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  }
]

//创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
