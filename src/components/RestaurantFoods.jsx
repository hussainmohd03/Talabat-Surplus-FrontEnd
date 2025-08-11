import FoodItem from './FoodItem'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'
import Client from '../../services/api'
const RestaurantFood = () => {
  const [restFoods, setRestFoods] = useState(null)

  useEffect(() => {
    const getRestFood = async () => {
      const res = await Client.get('/foods')
      console.log(res.data)
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
