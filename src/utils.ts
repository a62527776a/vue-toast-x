import ToastXComponent from './toast-x.vue'
import { Vue } from 'vue-property-decorator'
import { VueConstructor } from 'vue'

export interface ToastX extends Vue {
  commit: Function
}

export const createVm = (Vue: VueConstructor): ToastX => {
  const ToastXConstructor: VueConstructor = Vue.extend(ToastXComponent)
  const node: HTMLDivElement = document.createElement('div')
  const bodyDom: HTMLBodyElement | null = document.querySelector('body')
  bodyDom && bodyDom.appendChild(node)
  const _vm: ToastX = new ToastXConstructor()
  return _vm.$mount(node)
}