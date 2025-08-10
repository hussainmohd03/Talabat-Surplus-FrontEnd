import Search from '../components/Search'
import { useSearchParams } from 'react-router-dom'
import FoodCard from '../components/FoodCard'
import { useEffect, useState } from 'react'

const CuisineFoods = () => {
  const [searchParams] = useSearchParams()
  const cuisine = searchParams.get('cuisine')
  const [cuisineFoods, setCuisineFoods] = useState(null)

  useEffect(() => {

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
