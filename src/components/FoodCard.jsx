import { Link } from 'react-router-dom'
import { BASE_URL } from '../../globals'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import EditFoodForm from './EditFoodForm'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../../services/api'

const FoodCard = ({ selectOrder, setSelectOrder }) => {
  const navigate = useNavigate()
  let { id } = useParams()
  const { user } = useContext(UserContext)
  const [selectedFood, setSelectedFood] = useState(null)
  // const [selectOrder, setSelectOrder] = useState(null)
  const [editing, setEditing] = useState(false)

  console.log(selectOrder, 'this is it in food')

  useEffect(() => {
    const onMount = async () => {
      let food = await Client.get(`${BASE_URL}/foods/${id}`)
      setSelectedFood(food.data)
    }
    onMount()
  }, [id])

  const handleClick = async () => {
    if (!selectOrder) {
      const order = await Client.post(`${BASE_URL}/orders`, {
        food_id: selectedFood._id,
        payment_status: 'pending',
        order_status: 'pending',
        total_price: selectedFood.price
      })
      setSelectOrder(order)
      navigate('/cart')
    } else {
      const updated = await Client.put(`${BASE_URL}/orders/${selectOrder._id}`, {
      food_id: [...selectOrder.food_id.map(food => food._id), selectedFood._id]})
      setSelectOrder(updated.data)
      navigate('/cart')
    }
  }

  return (
    <>
      <div className="food-card-container">
        <div id="food-card">
          <div id="food-picture">
            <img id="food-picture" src={selectedFood?.image_url} alt="" />
          </div>
          <div id="food-text">
            <p id="food-text-rest-name">
              {selectedFood?.restaurant_id.rest_name}
            </p>
            <h3 id="food-test-food-name">{selectedFood?.name}</h3>
            <h4 id="food-test-food-descr">{selectedFood?.description}</h4>
          </div>

          {user && user.role !== 'restaurant' && (
            <button id="button-cart" onClick={handleClick}>
              <div id="add-to-cart">
                <div>Add item </div>
                <div>BHD {selectedFood?.price?.toFixed(3)}</div>
              </div>
            </button>
          )}

          {user && user.role === 'restaurant' && (
            <button
              className="food-edit-button"
              onClick={() => setEditing(!editing)}
            >
              <div className="edit-food">
                {editing ? 'Cancel' : 'Edit Food'}
              </div>
            </button>
          )}

          {editing && selectedFood && (
            <div className="edit-form-container">
              <div className="edit-form">
                <EditFoodForm
                  food={selectedFood}
                  setCuisineFoods={(foods) =>
                    setSelectedFood(
                      foods.find((f) => f._id === selectedFood._id) ||
                        selectedFood
                    )
                  }
                  cuisineFoods={[selectedFood]}
                  onClose={() => setEditing(false)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default FoodCard
