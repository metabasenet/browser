import { createApp } from 'vue'
import pinia from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router';
import 'virtual:svg-icons-register'
import MyGlobalComponentsPlugin from './components/index.js';
import './permisstion';
import '@/common/common.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router);
app.use(MyGlobalComponentsPlugin);
app.use(pinia);
app.mount('#app')

