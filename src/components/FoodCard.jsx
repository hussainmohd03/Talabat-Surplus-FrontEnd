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
      console.log(order)
    }
  }

  return (
    <>
      <div className="food-card">
        <img width="200px" src={selectedFood?.image_url} alt="" />
        <p>{selectedFood?.restaurant_id.rest_name}</p>
        <h3>{selectedFood?.name}</h3>
        <h4>{selectedFood?.description}</h4>

        <button onClick={handleClick}>
          <div>add item</div>
          <div>BHD {selectedFood?.price}</div>
        </button>
      </div>
    </>
  )
}
export default FoodCard
