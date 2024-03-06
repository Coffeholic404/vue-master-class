// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'
import { createRouter, createWebHistory } from 'vue-router'

import PageHomeVue from './components/PageHome.vue'
import PageThreadShow from './components/PageThreadShow.vue'

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
  }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes
  }
)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
