import { useEffect, useState } from 'react'
import { BASE_URL } from '../../globals'
import Client from '../../services/api'
import { Link } from 'react-router-dom'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const Cart = ({
  selectOrder,
  setSelectOrder,
  cartItems,
  setCartItems,
  item,
  setItem
}) => {
  const navigate = useNavigate()

  useEffect(() => {
    const onMount = async () => {
      const items = await Client.get(`${BASE_URL}/orders`)
      setItem(items.data._id)
      // console.log('mini', items.data.food_id[0].price)
      // console.log(items.data)

      setCartItems(items.data.foodItems)
    }
    onMount()
  }, [])

  // console.log('cart items', cartItems[0].name)

  const handleRemove = async (foodId) => {
    const updated = await Client.put(
      `${BASE_URL}/orders/${item}?action=remove&status=pending&foodId=${foodId}`
    )
    setCartItems(updated.data.foodItems)
    console.log(updated)
  }

  const handlePlaceOrder = async () => {
    const placedOrder = await Client.put(`${BASE_URL}/orders/${item}`, {
      payment_status: 'approved'
    })
    console.log(placedOrder)
    navigate('/orders')
  }
  return (
    <>
      <h3 id="cart-title">Cart</h3>

      <div>
        <ul>
          {cartItems &&
            cartItems.map((item) => (
              <div>
                <li key={item.id}>
                  <h2>{item.name}</h2>
                  <button onClick={() => handleRemove(item._id)}>remove</button>
                </li>
              </div>
            ))}
        </ul>
      </div>
      <Link to={'/'}>
        <button>Add items </button>
      </Link>
      <button onClick={handlePlaceOrder}>Place order </button>
    </>
  )
}

export default Cart
