import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Client from '../../services/api'

const FoodList = ({ food, setCuisineFoods, cuisineFoods }) => {
  const { user } = useContext(UserContext)

  const handleDelete = async () => {
    try {
      await Client.delete(`/foods/${food._id}`)
      setCuisineFoods(cuisineFoods.filter((item) => item._id !== food._id))
    } catch (error) {
      console.error('Error deleting food item:', error)
    }
  }

  return (
    <>
      <article className="food-item">
        <Link to={`/foods/${food._id}`} className="cuisine-foods-link">
          <img src={food.image_url} alt="" />
        </Link>

        <div className="food-item-info">
          <h3>{food.name}</h3>
          <h3>{food.price}BD</h3>
        </div>
        {user && user.role === 'restaurant' && (
          <button
            className="food-delete-button"
            onClick={handleDelete}
          ></button>
        )}
      </article>
    </>
  )
}

export default FoodList
