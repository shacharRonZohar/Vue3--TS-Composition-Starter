import { Entity } from '@/types'

export { Entity, EntityState, UpdateOpts }

interface EntityState {
  entities: Array<Entity>
}

interface UpdateOpts {
  commitType: string
  data: Entity | string
}