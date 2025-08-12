import FoodItem from './FoodItem'
import { useState, useEffect } from 'react'
import Client from '../../services/api'
import AddFoodForm from './AddFoodForm'

const RestaurantFood = ({ search }) => {
  const [restFoods, setRestFoods] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)
  useEffect(() => {
    const getRestFood = async () => {
      const res = await Client.get('/foods')
      setRestFoods(res.data)
    }
    getRestFood()
  }, [])

  const filteredFoods = restFoods
    ? restFoods.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      )
    : []

  return (
    <>
      <section id="food-list">
        <button
          onClick={() => setShowAddForm((prev) => !prev)}
          className="add-food-btn"
        >
          {showAddForm ? 'Close' : 'New Food'}
        </button>
        {showAddForm && (
          <AddFoodForm
            setCuisineFoods={setRestFoods}
            cuisineFoods={restFoods || []}
          />
        )}
        {filteredFoods.map((restFood) => (
          <FoodItem
            food={restFood}
            key={restFood._id}
            setCuisineFoods={setRestFoods}
            cuisineFoods={restFoods}
          />
        ))}
      </section>
    </>
  )
}

export default RestaurantFood
