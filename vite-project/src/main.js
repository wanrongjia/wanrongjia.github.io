import { createApp } from 'vue'
import { createPinia } from "pinia"
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import GraceUI from './GraceUI'
// 创建vue实例
const app = createApp(App);

// 挂载全局对象
app.use(GraceUI)
app.use(router);
app.use(ElementPlus);
const pinia = createPinia();
pinia.use(({ store }) => {
    store.$router = router
})
app.use(pinia);

// 挂载app
app.mount('#app')
