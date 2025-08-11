import CuisineCard from './CuisineCard'
import { cuisines } from '../../globals'

import { useContext } from 'react'

import { UserContext } from '../context/UserContext'

const CuisineList = ({ search = '' }) => {
  const { user } = useContext(UserContext)

  const filteredCuisines = cuisines.filter((cuisine) =>
    cuisine.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <h1>
        <span id="cust-name">{user.name}</span>, ready to order?
      </h1>
      <section id="cuisine-cards">
        {filteredCuisines.map((cuisine) => (
          <CuisineCard cuisine={cuisine} key={cuisine.id} />
        ))}
      </section>
    </>
  )
}
export default CuisineList
