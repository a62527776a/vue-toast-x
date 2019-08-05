import Vue from 'vue'
import App from './App.vue'
import VueToastX from '../dist/vue-toast-x'
// import VueToastX from '../src/index'
Vue.config.productionTip = false

Vue.use(VueToastX)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
