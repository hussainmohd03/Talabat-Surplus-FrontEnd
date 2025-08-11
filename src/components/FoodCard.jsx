import { Link } from 'react-router-dom'
import { BASE_URL } from '../../globals'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import EditFoodForm from './EditFoodForm'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../../services/api'

const FoodCard = () => {
  const navigate = useNavigate()
  let { id } = useParams()
  const { user } = useContext(UserContext)
  const [selectedFood, setSelectedFood] = useState(null)
  const [selectOrder, setSelectOrder] = useState(null)
  const [editing, setEditing] = useState(false)

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
      navigate('/cart')
    }
    if (
      selectOrder &&
      selectOrder.payment_status === 'pending' &&
      selectOrder.order_status === 'pending'
    ) {
      console.log(selectOrder)
    }
  }

  return (
    <>
      <div style={{ position: 'relative' }}>
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

          <button id="button-cart" onClick={handleClick}>
            <div id="add-to-cart">
              <div>Add item </div>
              <div>BHD {selectedFood?.price?.toFixed(3)}</div>
            </div>
          </button>

          {/* Edit button under Add Item button for restaurant users */}
          {user && user.role === 'restaurant' && (
            <button 
              className="food-edit-button"
              onClick={() => setEditing((prev) => !prev)}
            >
              {editing ? 'Cancel' : 'Edit'}
            </button>
          )}

          {/* Edit form as overlay over the card */}
          {editing && selectedFood && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000
              }}
            >
              <div
                style={{
                  background: '#fff',
                  padding: '2em',
                  borderRadius: '8px',
                  minWidth: '320px',
                  maxWidth: '90vw'
                }}
              >
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
