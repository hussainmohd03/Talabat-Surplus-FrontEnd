import FoodItem from './FoodItem'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'
const RestaurantFood = () => {
  const [restFoods, setRestFoods] = useState(null)

  useEffect(() => {
    const getRestFood = async () => {
      const res = await axios.get(`${BASE_URL}/foods`)
      setRestFoods(res.data)
    }
    getRestFood()
  }, [])

  return (
    <>
      <section id="food-list">
        {restFoods &&
          restFoods.map((restFood) => (
            <FoodItem food={restFood} key={restFood._id} />
          ))}
      </section>
    </>
  )
}

export default RestaurantFood
