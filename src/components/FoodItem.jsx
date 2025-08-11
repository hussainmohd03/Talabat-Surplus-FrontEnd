import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
const FoodList = ({ food }) => {
  const { user } = useContext(UserContext)
  console.log(user)
  return (
    <>
      <article className="food-item">
        <img src={food.image_url} alt="" />

        <div className="food-item-info">
          <h3>{food.name}</h3>
          <h3>{food.price}BD</h3>
          {user && user.role === 'restaurant' && <button>X</button>}
        </div>
      </article>
    </>
  )
}

export default FoodList
