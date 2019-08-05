import { VueConstructor } from 'vue'
import { createVm, ToastX } from './utils';
import { Vue } from 'vue-property-decorator'

class VueToastX {
  Vue: VueConstructor
  $root: Vue | null = null
  constructor (Vue: VueConstructor) {
    this.Vue = Vue
  }
  show (str: string) {
    this.mountIfNotMounted(str)
  }
  mountIfNotMounted (str: string) {
    if (this.$root) return
    let vm: ToastX = createVm(this.Vue)
    vm.commit(str)
    vm.$on('dead', () => this.remove())
    this.$root = vm
  }
  remove () {
    if (this.$root) {
      this.$root.$off()
      this.$root.$destroy()
      this.$root.$el.remove()
      this.$root = null
    }
  }
}

const install = (Vue: VueConstructor) => {
  Vue.prototype.$toast = new VueToastX(Vue)
}

export default {
  install,
  VueToastX
}