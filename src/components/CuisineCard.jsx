import { Link } from 'react-router-dom'

const CuisineCard = ({ cuisine }) => {
  return (
    <>
      <Link to={`/foods?cuisine=${cuisine.name}`} id="cuisine-foods-link">
        <article id="cuisine-card">
          <img src={cuisine.image} alt={`Picture of ${cuisine.name}`} className='cuisine-img'/>
          <h3>{cuisine.name}</h3>
        </article>
      </Link>
    </>
  )
}

export default CuisineCard
