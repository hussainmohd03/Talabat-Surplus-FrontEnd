import Search from '../components/Search'
import { useSearchParams } from 'react-router-dom'
import FoodItem from '../components/FoodItem'
import { useEffect, useState } from 'react'
import { GetFoodByCuisine } from '../../services/GetFoodByCuisine'

const CuisineFoods = () => {
  const [search, setSearch] = useState('')

  const [searchParams] = useSearchParams()
  const cuisine = searchParams.get('cuisine')
  const [cuisineFoods, setCuisineFoods] = useState(null)

  useEffect(() => {
    const getCuisineFood = async () => {
      const res = await GetFoodByCuisine(cuisine)
      setCuisineFoods(res)
    }
    getCuisineFood()
  }, [cuisine])

  const filteredFoods = cuisineFoods
    ? cuisineFoods.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      )
    : []
  return (
    <>
      <Search filterValue={search} setFilterValue={setSearch} />

      <section id="food-list">
        {filteredFoods &&
          filteredFoods.map((food) => <FoodItem food={food} key={food._id} />)}
      </section>
    </>
  )
}

export default CuisineFoods
