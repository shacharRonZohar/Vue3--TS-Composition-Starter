<template>
  <li>
    {{ entity }}
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    entity: {
      type: Object,
      required: true
    }
  }
})
</script>
