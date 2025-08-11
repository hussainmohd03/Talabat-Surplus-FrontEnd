import Search from '../components/Search'
import { useSearchParams } from 'react-router-dom'
import FoodItem from '../components/FoodItem'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'

import { UserContext } from '../context/UserContext'

const CuisineFoods = () => {
  const { user } = useContext(UserContext)
  const [searchParams] = useSearchParams()
  const cuisine = searchParams.get('cuisine')
  const [cuisineFoods, setCuisineFoods] = useState(null)

  useEffect(() => {
    const getCuisineFood = async () => {
      const res = await axios.get(`${BASE_URL}/foods?=${cuisine}`)
      setCuisineFoods(res.data)
    }
    getCuisineFood()
  }, [cuisine])

  return (
    <>
      <Search />

      <section id="food-list">
        {cuisineFoods &&
          cuisineFoods.map((cuisineFood) => (
            <FoodItem cuisineFood={cuisineFood} key={cuisineFood._id} />
          ))}
      </section>
    </>
  )
}

export default CuisineFoods
