import Client from './api'

export const RegisterUser = async (data, role) => {
  try {
    const res = await Client.post(`/auth/register?role=${role}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const SignInUser = async (data, role) => {
  try {
    const res = await Client.post(`/auth/login?role=${role}`, data)
    localStorage.setItem('token', res.data.token)
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}
