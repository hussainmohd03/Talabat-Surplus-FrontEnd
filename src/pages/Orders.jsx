import { useEffect, useContext, useState } from 'react'
import Client from '../../services/api'
import { BASE_URL } from '../../globals'
import { UserContext } from '../context/UserContext'
import { useLocation } from 'react-router-dom'
import Order from '../components/Order'
const Orders = ({ role }) => {
  const location = useLocation()
  const { setUser, user } = useContext(UserContext)
  const [dbApprovedOrders, setDbApprovedOrders] = useState(null)

  useEffect(() => {
    if (role === 'customer') {
      if (location.pathname === '/orders') {
        const getOrders = async () => {
          // console.log('hello from order')
          const approvedOrders = await Client.get(
            `${BASE_URL}/orders/approved/${user.id}`
          )
          setDbApprovedOrders(approvedOrders.data)
          console.log(approvedOrders.data)
        }
        getOrders()
      }
    } else {
      if (location.pathname === '/orders') {
        const getOrders = async () => {
          console.log('hello from order')
          const approvedOrders = await Client.get(
            `${BASE_URL}/orders/approved/${user.id}`
          )
          approvedOrders && setDbApprovedOrders(approvedOrders.data)
        }
        getOrders()
      }
    }
  }, [location.pathname])

  return (
    <>
      <div>
        {role === 'customer' ? (
          <div>
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
          </div>
        ) : (
          <div>
            <h1>Your orders</h1>
            {dbApprovedOrders &&
              dbApprovedOrders.map((order) => <Order order={order} />)}
          </div>
        )}
      </div>
    </>
  )
}

export default Orders
