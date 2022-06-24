<template>
  <header class="app-header">
    <button @click="onClearLocalStorage">Clear localStorage</button>
    This is a header
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { utilService } from '@/services/util.service'
export default defineComponent({
  setup() {
    const onClearLocalStorage = () => {
      utilService.resetLocalStorage()
    }
    return { onClearLocalStorage }
  }
})
</script>