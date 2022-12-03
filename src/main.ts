import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import log from './plugin/log'



const app = createApp(App)

app.directive('color', {
    mounted(el,binding) {
        el.style.color = binding.value
    }
})

app.use(log)
app.use(createPinia())
app.use(router)

app.mount('#app')
