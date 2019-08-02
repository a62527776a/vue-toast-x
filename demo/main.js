import Vue from 'vue'
import App from './App.vue'
import VueToastX from '../src/index'
Vue.config.productionTip = false

console.log(VueToastX)
VueToastX()


new Vue({
  render: (h) => h(App)
}).$mount('#app')
