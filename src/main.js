import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPLus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(ElementPLus)
app.use(store)
app.use(router)

app.mount('#app')
