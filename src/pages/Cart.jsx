import { useEffect, useState } from 'react'
import { BASE_URL } from '../../globals'
import Client from '../../services/api'
import { Link } from 'react-router-dom'

const Cart = ({ selectOrder, setSelectOrder, cartItems, setCartItems }) => {
  useEffect(() => {
    const onMount = async () => {
      const items = await Client.get(`${BASE_URL}/orders`)
      setCartItems(items.data)
    }
    onMount()
  }, [])

  // console.log(cartItems[0].food_id[0].name)
  return (
    <>
      <h3>Cart</h3>
      {/* {cartItems && cartItems.map((item) => <h2>{item.food_id.name}</h2>)} */}

            {cartItems && cartItems.map((item) => {item.food_id.map(food => (
<h2>{food.name}</h2>
      ))})}

      <Link to={'/'}>
        <button>Add items </button>
      </Link>
      <button>Place order </button>
    </>
  )
}

export default Cart
