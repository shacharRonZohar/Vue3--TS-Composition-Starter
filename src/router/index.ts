import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/home-page.vue'
import EntityList from '@/views/entity-list.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/entity',
    name: 'EntityList',
    component: EntityList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
