import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine } from './utils'
import "./styles/base.less"
import "./styles/ui.less"



const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(`el-icon-${toLine(key)}`,component)
    // app.component(key,component)

    // console.log(`el-icon-${toLine(key)}`,component);
    
  }
app.use(ElementPlus)
app.use(router)
app.mount('#app')