import { Entity, Service } from '@/types'
import { storageService } from './async-storage.service'

export const entityService: Service = {
  getEntities,
  saveEntity,
}

const ENTITY_KEY = 'entityDB'

function getEntities() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(storageService.query(ENTITY_KEY))
    }, 1000)
  })
}

function saveEntity(entity: Entity) {
  if (entity._id) return storageService.put(ENTITY_KEY, entity)
  storageService.post(ENTITY_KEY, entity)
}