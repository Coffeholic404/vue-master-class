// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'
import * as VueRouter from 'vue-router'

import PageHomeVue from './components/PageHome.vue'

const routes = [
  {
    path: '/',
    component: PageHomeVue
  }
]

const router = VueRouter.createRouter(
  {
    history: VueRouter.createWebHashHistory(),
    routes
  }
)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
