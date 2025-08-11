import Search from '../components/Search'
import CuisineCard from '../components/CuisineCard'
import { cuisines } from '../../globals'
import { useContext } from 'react'

import { UserContext } from '../context/UserContext'
const Home = () => {
  const { user } = useContext(UserContext)
  return (
    <>
      <main>
        <Search />

        {/* conditionally render different components for cust and rest */}
        <h1>
          <span id="cust-name">{user.name}</span>, ready to order?
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
