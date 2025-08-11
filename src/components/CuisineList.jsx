import CuisineCard from './CuisineCard'
import { cuisines } from '../../globals'

import { useContext } from 'react'

import { UserContext } from '../context/UserContext'
const CuisineList = () => {
  const { user } = useContext(UserContext)

  return (
    <>
      <h1>
        <span id="cust-name">{user.name}</span>, ready to order?
      </h1>
      <section id="cuisine-cards">
        {cuisines.map((cuisine) => (
          <CuisineCard cuisine={cuisine} key={cuisine.id} />
        ))}
      </section>
    </>
  )
}
export default CuisineList
