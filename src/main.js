import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.provide('name','jason')

app.mount('#app')
