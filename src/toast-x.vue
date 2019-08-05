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
$prime-color: #00B51D;

.vue-toast-x
  position: fixed;
  min-width: 128px;
  height: 28px;
  background: $prime-color
  color: white;
  line-height: 28px;
  text-align: center;
  top: 30px
  transform: translate3D(-50%, 30px, 0);
  border-radius: 28px;
  padding: 6px 12px
  left: 50%;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center

.fade-leave-to, .fade-enter
  opacity: 0;
.fade-enter
  transform: translate3D(-50%, 0px, 0);
.fade-enter-to
  transform: translateY(-50%, 30px, 0);
.fade-leave
  opaticy: 0
.fade-leave
  transform: translateY(-50%, 30px, 0);
.fade-leave-to
  transform: translateY(-50%, 0px, 0);
</style>
