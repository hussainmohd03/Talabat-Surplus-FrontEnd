import { useEffect, useContext, useState } from 'react'
import Client from '../../services/api'
import { BASE_URL } from '../../globals'
import { UserContext } from '../context/UserContext'
import { useLocation } from 'react-router-dom'

const Order = () => {
  const location = useLocation()
  const { setUser, user } = useContext(UserContext)
  const [dbApprovedOrders, setDbApprovedOrders] = useState(null)

  useEffect(() => {
    if (location.pathname === '/orders') {
      const getOrders = async () => {
        // console.log('hello from order')
        const approvedOrders = await Client.get(
          `${BASE_URL}/orders/approved/${user.id}`
        )
        setDbApprovedOrders(approvedOrders.data)
        console.log(approvedOrders.data)
        // console.log(user)
        // console.log('mini', approvedOrders)
      }
      getOrders()
    }
  }, [location.pathname])
  return (
    <>
      <h1>Your orders</h1>

      {dbApprovedOrders &&
        dbApprovedOrders.map((order) => (
          <div>
            <li>
              {order._id}
              <li>{order.order_status}</li>
              <li>BHD{order.total_price}</li>
            </li>
          </div>
        ))}
    </>
  )
}

export default Order
