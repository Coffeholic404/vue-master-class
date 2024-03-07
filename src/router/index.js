import { createRouter, createWebHistory } from 'vue-router'
import PageHomeVue from '@/components/PageHome.vue'
import PageThreadShow from '@/components/PageThreadShow.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHomeVue
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

// eslint-disable-next-line no-undef
export default createRouter({
  history: createWebHistory(),
  routes
})
