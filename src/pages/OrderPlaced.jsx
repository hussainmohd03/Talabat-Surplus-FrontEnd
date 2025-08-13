import { useNavigate } from 'react-router-dom'
const OrderPlaced = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/orders')
  }

  return (
    <>
      hi
      <button onClick={handleClick}>orders</button>
    </>
  )
}

export default OrderPlaced
