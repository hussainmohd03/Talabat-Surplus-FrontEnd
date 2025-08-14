import { useEffect, useState } from 'react'
import { BASE_URL } from '../../globals'
import Client from '../../services/api'
import { Link } from 'react-router-dom'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import OrderPlaced from './OrderPlaced'

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

      setItem(items.data)
      setCartItems(items.data.foodItems)

    }
    onMount()
  }, [])

  const handleRemove = async (foodId) => {
    const updated = await Client.put(
      `${BASE_URL}/orders/${item._id}?action=remove&status=pending&foodId=${foodId}`
    )
    setCartItems(updated.data.foodItems)
  }

  const handlePlaceOrder = async () => {
    const placedOrder = await Client.put(
      `${BASE_URL}/orders/place/${item._id}`,
      {
        payment_status: 'approved'
      }
    )
    navigate('/orders/placed')
  }
  return (
    <>
      <h3 id="cart-title">Cart</h3>

      <div>
        <ul>
          {cartItems &&
            cartItems.map((item) => (
              <div>
                <li key={item._id}>
                  <h2>{item.foodId.name}</h2>
                  <h2>Quantity: {item.quantity}</h2>
                  <button onClick={() => handleRemove(item.foodId._id)}>
                    remove
                  </button>
                </li>
              </div>
            ))}
        </ul>
      </div>
      <Link to={'/'}>
        <button>Add items </button>
      </Link>
      <button onClick={handlePlaceOrder}>Place order</button>
    </>
  )
}

export default Cart
