import Search from '../components/Search'
import { useContext, useState } from 'react'
import CustomerCuisines from '../components/CustomerCuisines'
import { UserContext } from '../context/UserContext'
import RestaurantFood from '../components/RestaurantFoods'


const Home = () => {
  const [search, setSearch] = useState('')
  const { user } = useContext(UserContext)
  return (
    <>
      <main>
        <Search filterValue={search} setFilterValue={setSearch} />
        {(user && user.role === 'customer' && (
          <CustomerCuisines search={search} />
        )) ||
          (user && user.role === 'restaurant' && (
            <RestaurantFood search={search} />
          ))}
      </main>
    </>
  )
}

export default Home
