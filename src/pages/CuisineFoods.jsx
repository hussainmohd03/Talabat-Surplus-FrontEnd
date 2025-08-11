import Search from '../components/Search'
import { useSearchParams } from 'react-router-dom'
import FoodItem from '../components/FoodItem'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GetFoodByCuisine } from '../../services/GetFoodByCuisine'
import { UserContext } from '../context/UserContext'

const CuisineFoods = () => {
  const { user } = useContext(UserContext)
  const [searchParams] = useSearchParams()
  const cuisine = searchParams.get('cuisine')
  const [cuisineFoods, setCuisineFoods] = useState(null)

  useEffect(() => {
    const getCuisineFood = async () => {
      const token = localStorage.getItem('token')

      const res = await GetFoodByCuisine(cuisine)
      setCuisineFoods(res)
    }
    getCuisineFood()
  }, [cuisine])

  return (
    <>
      <Search />

      <section id="food-list">
        {cuisineFoods &&
          cuisineFoods.map((food) => <FoodItem food={food} key={food._id} />)}
      </section>
    </>
  )
}

export default CuisineFoods
