import { useEffect, useContext, useState } from 'react'
import Client from '../../services/api'
import { BASE_URL } from '../../globals'
import { UserContext } from '../context/UserContext'
import { useLocation } from 'react-router-dom'
import Order from '../components/Order'
import '../../public/styleSheets/OrderStyle.css'

const Orders = ({ role }) => {
  const location = useLocation()
  const [dbApprovedOrders, setDbApprovedOrders] = useState(null)
  const { setUser, user } = useContext(UserContext)

  useEffect(() => {
    if (user.role === 'customer') {
      if (location.pathname === '/orders') {
        const getOrders = async () => {
          const approvedOrders = await Client.get(
            `${BASE_URL}/orders/approved/${user.id}`
          )
          setDbApprovedOrders(approvedOrders.data)

          console.log(approvedOrders.data)
        }
        getOrders()
      }
    } else if (user.role === 'restaurant') {
      if (location.pathname === '/orders') {
        const getOrders = async () => {
          const approvedOrders = await Client.get(
            `${BASE_URL}/orders/approved/${user.id}`
          )
          console.log(approvedOrders)
          approvedOrders && setDbApprovedOrders(approvedOrders.data)
        }
        getOrders()
      }
    }
  }, [user, location.pathname])

  return (
    <>
      <div className='orders-container'>
        {user.role === 'customer' ? (
          <div>
            <h1 className='orders-title'>Your orders</h1>

            {dbApprovedOrders?.map((order) => (
              <div>
                <li className='order-id'>
                  {order._id}
                  <li className='order-status'>{order.order_status}</li>
                  <li className='order-price'>BHD{order.total_price}</li>
                </li>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1 className='order-summary'>Your orders</h1>
            {dbApprovedOrders?.map((order, idx) => (
              <Order
                dbApprovedOrders={dbApprovedOrders}
                idx={idx}
                order={order}
                setDbApprovedOrders={setDbApprovedOrders}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Orders
