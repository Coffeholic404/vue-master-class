// import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
import AppDate from './components/AppDate.vue'
// import router from './router'

const app = createApp(App)
app.component('AppDate', AppDate)
app.use(createPinia())
app.use(router)
app.mount('#app')
