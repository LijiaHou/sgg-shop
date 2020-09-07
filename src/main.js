import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, MessageBox } from 'mint-ui'
import './mock/mockServer'

// 按需引入Button、MessageBox组件 <mt-button>
Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
