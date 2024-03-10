import { createRouter, createWebHistory } from 'vue-router'
import PageHomeVue from '@/views/PageHome.vue'
import PageThreadShow from '@/views/PageThreadShow.vue'
import NotFound from '@/views/NotFound.vue'
import sourceData from '@/data.json'
import PageForum from '@/views/PageForum.vue'
import PageCategory from '@/views/PageCategory.vue'
import PageProfile from '@/views/PageProfile.vue'
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
    props: true,
    beforeEnter (to, from, next) {
      // check if thread exits
      const threadExist = sourceData.threads.find((thread) => thread.id === to.params.id)
      // if exit continue
      if (threadExist) {
        return next()
      } else {
        // if doesnt exit redirect to not found
        next({
          name: 'NotFound',
          // preserve current path and remove the first char to avoid the target URL starting with `//`
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash if any
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: PageForum,
    props: true
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: PageCategory,
    props: true
  },
  {
    path: '/me',
    name: 'Profile',
    component: PageProfile
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
