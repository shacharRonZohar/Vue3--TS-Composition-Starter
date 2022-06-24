<template>
  <App-Header />
  <router-view />
  <App-Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './cmps/app-header.vue'
import AppFooter from './cmps/app-footer.vue'

export default defineComponent({
  components: {
    AppHeader,
    AppFooter
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
