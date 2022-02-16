import { createRouter, createWebHashHistory } from 'vue-router'
import Quote from '../views/Quote.vue'
import Maps from '../views/Maps.vue'
import BreakEven from '../views/BreakEven.vue'

const routes = [
  {
    path: '/',
    name: 'Quote',
    component: Quote,
    meta: {
      title: 'Instant Quoting Tool'
    }
  },
  {
    path: '/competency-centers',
    name: 'Maps',
    component: Maps,
    meta: {
      title: 'AM Competency Centers'
    }
  },
  {
    path: '/break-even',
    name: 'BreakEven',
    component: BreakEven,
    meta: {
      title: 'Breakeven calculator'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
