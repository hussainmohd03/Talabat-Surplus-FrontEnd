import Search from '../components/Search'

import { useContext } from 'react'
import CustomerCuisines from '../components/CustomerCuisines'
import { UserContext } from '../context/UserContext'
import RestaurantFood from '../components/RestaurantFoods'
const Home = () => {
  const { user } = useContext(UserContext)
  return (
    <>
      <main>
        <Search />

        {(user && user.role === 'customer' && <CustomerCuisines />) ||
          (user && user.role === 'restaurant' && <RestaurantFood />)}
      </main>
    </>
  )
}

export default Home
