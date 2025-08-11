import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
const FoodList = ({ food }) => {
  const { user } = useContext(UserContext)
  console.log(user)
  return (
    <>
      <article className="food-item">
        <Link to={`/foods/${food._id}`} id="cuisine-foods-link">
          <img src={food.image_url} alt="" />
        </Link>

        <div className="food-item-info">
          <h3>{food.name}</h3>
          <h3>{food.price}BD</h3>
        </div>
        {user && user.role === 'restaurant' && <button>X</button>}
      </article>
    </>
  )
}

export default FoodList
