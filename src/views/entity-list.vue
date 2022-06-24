<template>
  This is an entity list
  <button @click="onAddEntity">add entity</button>
  <button @click="onUpdateEntity">update entity</button>
  <ul v-if="entities?.length">
    <entity-preview v-for="entity in entities" :key="entity._id" :entity="entity" />
  </ul>
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import EntityPreview from '@/cmps/entity-preview.vue'

export default defineComponent({
  setup() {
    const { getters: { entities }, dispatch } = useStore()
    const onAddEntity = () => {
      console.log('add entity')
      dispatch({ type: 'updateState', commitType: 'saveEntity', data: { _id: '123', name: 'Mario' } })
    }
    const onUpdateEntity = () => {
      console.log('update entity')
      dispatch({ type: 'updateState', commitType: 'saveEntity', data: { _id: '123', name: 'Luigi' } })
    }
    return { entities: ref(entities).value, onAddEntity, onUpdateEntity }
  },
  methods: {

  },
  components: {
    EntityPreview
  }
})
</script>
