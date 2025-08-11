import { useEffect, useState } from 'react'
import { BASE_URL } from '../../globals'
import Client from '../../services/api'
import { Link } from 'react-router-dom'
import '../App.css'

const Cart = ({ selectOrder, setSelectOrder, cartItems, setCartItems }) => {
  useEffect(() => {
    const onMount = async () => {
      const items = await Client.get(`${BASE_URL}/orders`)
      setCartItems(items.data)
    }
    onMount()
  }, [])
  console.log(cartItems)
  console.log(selectOrder)
  return (
    <>
      <h3 id="cart-title">Cart</h3>
      <div>
        {cartItems &&
          cartItems.map((item) =>
            item.food_id.map((food) => (
              <div>
                <h2>{food.name}</h2>

                <button>remove</button>
              </div>
            ))
          )}
      </div>
      <Link to={'/'}>
        <button>Add items </button>
      </Link>
      <button>Place order </button>
    </>
  )
}

export default Cart
