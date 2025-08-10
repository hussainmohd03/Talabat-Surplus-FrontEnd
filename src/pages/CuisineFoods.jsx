import Search from '../components/Search'
import { useSearchParams } from 'react-router-dom'
import FoodCard from '../components/FoodCard'

const CuisineFoods = () => {
  const [searchParams] = useSearchParams()
  const cuisine = searchParams.get('cuisine')

  return (
    <>
      <Search />

      <section id="food-list">

      </section>
    </>
  )
}

export default CuisineFoods
