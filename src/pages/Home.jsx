import Search from '../components/Search'
import CuisineCard from '../components/CuisineCard'
const Home = () => {
  const cuisines = [
    {
      id: 1,
      name: 'Fast Food',
      image: 'https://example.com/images/fast-food.jpg'
    },
    { id: 2, name: 'Italian', image: 'https://example.com/images/italian.jpg' },
    {
      id: 3,
      name: 'Desserts',
      image: 'https://example.com/images/desserts.jpg'
    },
    {
      id: 4,
      name: 'Breakfast',
      image: 'https://example.com/images/breakfast.jpg'
    },
    { id: 5, name: 'Chinese', image: 'https://example.com/images/chinese.jpg' },
    { id: 6, name: 'Mexican', image: 'https://example.com/images/mexican.jpg' },
    { id: 7, name: 'Indian', image: 'https://example.com/images/indian.jpg' },
    { id: 8, name: 'Thai', image: 'https://example.com/images/thai.jpg' },
    {
      id: 9,
      name: 'Japanese',
      image: 'https://example.com/images/japanese.jpg'
    },
    {
      id: 10,
      name: 'Beverages',
      image: 'https://example.com/images/mediterranean.jpg'
    },
    { id: 11, name: 'Korean', image: 'https://example.com/images/korean.jpg' },
    {
      id: 12,
      name: 'American',
      image: 'https://example.com/images/american.jpg'
    }
  ]

  return (
    <>
      <main>
        <Search />

        {/* conditionally render different components for cust and rest */}
        <h1>
          <span id="cust-name">Maryam</span>, ready to order?
        </h1>
        <section id="cuisine-cards">
          {cuisines.map((cuisine) => (
            <CuisineCard cuisine={cuisine} key={cuisine.id} />
          ))}
        </section>
      </main>
    </>
  )
}

export default Home
