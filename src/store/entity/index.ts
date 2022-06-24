import { Module } from 'vuex'
import { Entity } from '@/types/index'
import { RootState } from '@/store/types'
import { EntityState, UpdateOpts } from './types'

export const entityModule: Module<EntityState, RootState> = {
  state: {
    entities: []
  },
  getters: {
    entities: ({ entities }) => entities,
    entity: ({ entities }) => (id: string) => entities.find(({ _id }) => _id === id)
  },
  mutations: {
    saveEntity(state, { data: entity }) {
      // If the entity already exists, replace it. Otherwise, add it.

      // TODO: Find out why this dosent work when I copy the array
      // const entities = JSON.parse(JSON.stringify(state.entities))
      // const entities = [...state.entities]
      const entities = state.entities
      const entityIdx = entities.findIndex(({ _id }: Entity) => _id === entity._id)
      if (entityIdx === -1) state.entities.unshift(entity)
      else entities.splice(entityIdx, 1, entity)
      state.entities = entities
    },
    removeEntity(state, { entityId }) {
      const entities = state.entities
      const entityIdx = entities.findIndex(({ _id }: Entity) => _id === entityId)
      if (entityIdx !== -1) entities.splice(entityIdx, 1)
      state.entities = entities
    }
  },
  actions: {
    async updateState({ commit }, { commitType, data }: UpdateOpts) {
      // TODO: Find out how to call a service function accodring to the commitType without a huge elif statement / switch case
      commit({ type: commitType, data })
    }
  },
}