import Search from '../components/Search'
import { useSearchParams } from 'react-router-dom'
import FoodItem from '../components/FoodItem'
import { useEffect, useState } from 'react'

const CuisineFoods = () => {
  const [searchParams] = useSearchParams()
  const cuisine = searchParams.get('cuisine')
  const [cuisineFoods, setCuisineFoods] = useState(null)

  useEffect(() => {
    const getCuisineFood = async () => {
      
    }
  }, [cuisine])

  return (
    <>
      <Search />

      <section id="food-list">
        
      </section>
    </>
  )
}

export default CuisineFoods
