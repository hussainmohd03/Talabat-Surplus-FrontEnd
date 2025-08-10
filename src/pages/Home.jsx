import Search from '../components/Search'
import CuisineCard from '../components/CuisineCard'
const Home = () => {
  const cuisines = [
    'Fast Food',
    'Italian',
    'Desserts',
    'Breakfast',
    'Chinese',
    'Mexican',
    'Indian',
    'Thai',
    'Japanese',
    'Beverages',
    'Korean',
    'American'
  ]

  return (
    <>
      <section id="home-header">
        <Search />
        {/* conditionally render different components for cust and rest */}
        <section id='cuisine-cards'>
        {cuisines.map((cuisine) => (
          <CuisineCard cuisine={cuisine} />
        ))}
        </section>
      </section>
    </>
  )
}

export default Home
