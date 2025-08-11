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
  console.log(cartItems)
  const handleClick = async () => {
    // const itemDelete = await Client.put(`${BASE_URL}/orders/${selectOrder}`)
  }

  // const handleAdd = async ()=> {
  //   const order = await Client.put(`${BASE_URL}/order`)
  // }
  console.log(selectOrder)
  return (
    <>
      <h3>Cart</h3>
      {cartItems &&
        cartItems.map((item) =>
          item.food_id.map((food) => (
            <div>
              <h2>{food.name}</h2>

              <button onClick={handleClick}>remove</button>
            </div>
          ))
        )}

      {/* <Link to={'/'}> */}
        <button onClick={handleAdd}>Add items </button>
      {/* </Link> */}
      <button>Place order </button>
    </>
  )
}

export default Cart
