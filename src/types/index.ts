import { Entity } from './entityTypes.js'

export { Entity, Service }

interface Service {
  [key: string]: Function
}
