import authentication_service from '$provider/authentication'
import database_service from '$provider/database'
import storage_service from '$provider/storage'

export const authentication = authentication_service
export const database = database_service
export const storage = storage_service

export default {
  authentication,
  database,
  storage
}