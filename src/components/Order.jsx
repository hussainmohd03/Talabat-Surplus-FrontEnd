import Client from '../../services/api'
import { BASE_URL } from '../../globals'
const Order = ({ order, idx, setDbApprovedOrders, dbApprovedOrders }) => {

  const handleClick = async (id, status) => {
    const res = await Client.put(
      `${BASE_URL}/orders/${id}?action=status&status=${status}`
    )
    let orders = [...dbApprovedOrders]
    orders.splice(idx, 1, res.data)
    console.log(res.data)
    setDbApprovedOrders(orders)
  }

  return (
    <>
      <div key={order._id}>
        <ul>
          {order._id}
          <li>{order.order_status}</li>
          <li>BHD {order.total_price}</li>
          <h3>order summary</h3>
          food: {order.food_id}
        </ul>
        {order.order_status === 'pending' && (
          <>
            <button onClick={() => handleClick(order._id, 'approved')}>
              approve
            </button>
            <button onClick={() => handleClick(order._id, 'cancelled')}>
              cancel
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default Order
