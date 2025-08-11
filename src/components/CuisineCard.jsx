import img from '../../public/image-removebg-preview.png'
import { Link } from 'react-router-dom'

const CuisineCard = ({ cuisine }) => {
  return (
    <>
      <Link to={`/foods?cuisine=${cuisine.name}`} id="cuisine-foods-link">
        <article id="cuisine-card">
          <img src={img} alt="" />
          <h3>{cuisine.name}</h3>
        </article>
      </Link>
    </>
  )
}
export default CuisineCard
