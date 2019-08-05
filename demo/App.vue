<template>
  <div id="app" class="app">
    <div @click="$toast.show('Vue Toast X')">welcome!</div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  methods: {
  },
  created () {
  }
}
</script>

<style scoped lang="sass">
#app
  display: flex;
  justify-content: center;
  align-items: center
</style>
