import Client from './api'

export const GetFoodByCuisine = async (cuisine) => {
  try {
    const res = await Client.get(`/foods?cuisine=${cuisine}`)
    return res.data
  } catch (error) {
    throw error
  }
}
