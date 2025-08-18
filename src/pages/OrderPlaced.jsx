import Client from '../../services/api'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../../globals'
const OrderPlaced = ({ item, setCartItems }) => {
  const [resName, setResName] = useState(null)
  const [address, setAddress] = useState(null)


  useEffect(() => {
    const onMount = async () => {
      let restaurantId = item.foodItems.map((item) => item.foodId.restaurant_id)
      const res = await Client.get(
        `${BASE_URL}/auth/profile/${restaurantId[0]}`
      )
      setResName(res.data.rest_name)

      const response = await Client.get(`${BASE_URL}/auth/profile`)
      setAddress(response.data.address)
    }

    onMount()
  }, [])
  return (
    <>
      {resName && resName}
      <br />
      {item.foodItems.map((item) => item.foodId.name)}
      <br />
      {address && address}
      <br />
      {item.foodItems.map((item) => item.quantity)}
      <br />
      {item.foodItems.map((item) => item.foodId.price)}
    </>
  )
}

export default OrderPlaced
