import { mainApi } from '../axios'

export const loginUser = async (email, password) => {
  return await mainApi.post('/api/auth', {
    email,
    password
  })
}