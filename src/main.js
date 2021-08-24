import Vue from 'vue'
import App from './App.vue'
import state from './vuex/store'

createApp(App).use(state).mount('#app')
