import { createApp } from 'vue'
import App from './App.vue'
// import install from '../index'
const install = require('../index.module')
const app = createApp(App)
install(app,{
    isPx : true
})
app.mount('#app')
