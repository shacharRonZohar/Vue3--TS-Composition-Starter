import { Entity, Service } from '@/types/index'
import { utilService } from './util.service.js'

export const storageService: Service = {
  query,
  get,
  post,
  put,
  remove,
  postMany
}

function query(entityType: string) {
  return Promise.resolve(JSON.parse(localStorage.getItem(entityType) as string) || [])
}

async function get(entityType: string, entityId: string) {
  const entities = await query(entityType)
  return new Promise((resolve, reject) => {
    const entity = entities.find((entity: Entity) => entity._id === entityId)
    if (entity) return resolve(entity)
    reject(`Unkown Entity ${entityType} with Id: ${entityId}`)
  })
}

async function post(entityType: string, newEntity: Entity) {
  newEntity._id = utilService.makeExtId()
  const entities = await query(entityType)
  entities.push(newEntity)
  _save(entityType, entities)
  return Promise.resolve(newEntity)
}

async function postMany(entityType: string, newEntities: Array<Entity>) {
  const entities = await query(entityType)
  entities.push(...newEntities)
  _save(entityType, entities)
  Promise.resolve(entities)
}

async function put(entityType: string, updatedEntity: Entity) {
  const entities = await query(entityType)
  return new Promise((resolve, reject) => {
    const idx = entities.findIndex((entity: Entity) => entity._id === updatedEntity._id)
    if (idx === -1) reject(`Unkown Entity ${entityType} with Id: ${updatedEntity}`)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    resolve(updatedEntity)
  })
}

async function remove(entityType: string, entityId: string) {
  const entities = await query(entityType)
  return new Promise((resolve, reject) => {
    const idx = entities.findIndex((entity: Entity) => entity._id === entityId)
    console.log(idx, entities)
    if (idx === -1) reject(`Unkown Entity ${entityType} with Id: ${entityId}`)
    entities.splice(idx, 1)
    _save(entityType, entities)
    resolve('Removed succesfully')
  })
}

function _save(entityType: string, entities: Array<Entity>) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}
