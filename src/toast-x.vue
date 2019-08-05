<template lang="pug">
div
  transition(
    name="fade"
    @after-leave="transitionend")
    .vue-toast-x(v-if="show")
      a {{message}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class VueToastXComponent extends Vue {
  show:boolean = false
  deadlineTimer: Function
  message: string = ''
  async showToast () {
    this.show = true
    await this.deadlineTimeout()
    this.show = false
  }

  commit (str: string) {
    this.message = str
  }

  transitionend () {
    if (!this.show) this.$emit('dead')
  }

  deadlineTimeout () {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }

  mounted () {
    this.showToast()
  }
}
</script>

<style lang="sass" scoped>
$prime-color: #2196F3;

.vue-toast-x
  position: fixed;
  min-width: 128px;
  height: 22px;
  background: $prime-color
  color: white;
  text-align: center;
  top: 30px
  transform: translate3D(-50%, 30px, 0);
  border-radius: 22px;
  padding: 6px
  left: 50%;
  transition: all .3s;
  display: flex;
  justify-content: center;
  align-items: center
  a
    color: white
    font-size: 12px;
.fade-leave-to, .fade-enter
  opacity: 0;
.fade-enter
  transform: translate3D(-50%, 0px, 0);
.fade-leave-to
  transform: translate3D(-50%, 0px, 0) !important;
</style>
