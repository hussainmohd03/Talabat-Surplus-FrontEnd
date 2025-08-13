import { useState, useEffect } from 'react'
import Client from '../../services/api'
import { BASE_URL } from '../../globals'
const Order = ({ order }) => {
  const [orderStatus, setOrderStatus] = useState(order.order_status)

  const handleClick = async (order) => {
    const res = await Client.put(
      `${BASE_URL}/orders/${order}?action=status&status=approved`
    )
    console.log(res.data)
    setOrderStatus(res.data.order_status)
  }

  useEffect(() => {
    console.log('on mount')
    console.log(order.order_status)
  }, [orderStatus])
  return (
    <>
      <div key={order._id}>
        <ul>
          {order._id}
          <li>{orderStatus}</li>
          <li>BHD{order.total_price}</li>
          <h3>order summary</h3>
          food: {order.food_id}
        </ul>
        {order.order_status === 'pending'}
        {order.order_status === 'pending' && (
          <>
            <button onClick={() => handleClick(order._id)}>approve</button>
            <button>cancel</button>
          </>
        )}
      </div>
    </>
  )
}

export default Order
