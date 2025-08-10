import { Link } from 'react-router-dom'
import BASE_URL from '../../globals'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const FoodCard = () => {
  let { id } = useParams()

  const [selectedFood, setSelectedFood] = useState(null)
  const [selectOrder, setSelectOrder] = useState(null)

  useEffect(() => {
    const onMount = async () => {
      let food = await axios.get(`${BASE_URL}/foods/${id}`)
      setSelectedFood(food.data)
      console.log(food)
    }
    onMount()
  }, [id])

  const handleClick = async () => {
    if (!selectOrder) {
      const order = await axios.post(`${BASE_URL}/orders`, {
        selectedFood,
        payment_status: 'pending',
        order_status: 'pending'
      })
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
            <div>BHD {selectedFood?.price.toFixed(3)}</div>
          </div>
        </button>
      </div>
    </>
  )
}
export default FoodCard
