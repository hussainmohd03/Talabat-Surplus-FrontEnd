import Search from '../components/Search'
import CuisineCard from '../components/CuisineCard'
import { cuisines } from '../../globals'
const Home = () => {
  return (
    <>
      <main>
        <Search />

        {/* conditionally render different components for cust and rest */}
        <h1>
          <span id="cust-name">Maryam</span>, ready to order?
        </h1>
        <section id="cuisine-cards">
          {cuisines.map((cuisine) => (
            <CuisineCard cuisine={cuisine} key={cuisine.id} />
          ))}
        </section>
      </main>
    </>
  )
}

export default Home
