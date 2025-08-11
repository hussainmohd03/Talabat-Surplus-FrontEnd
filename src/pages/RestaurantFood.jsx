const RestaurantFood = () => {
  const [restFoods, setRestFoods] = useState(null)

  useEffect(() => {
    const getRestFood = async () => {
      const res = await axios.get(`${BASE_URL}/foods?=${cuisine}`)
      setCuisineFoods(res.data)
    }
    getCuisineFood()
  }, [cuisine])

  return (
    <>

      <section id="food-list">
        {cuisineFoods &&
          cuisineFoods.map((cuisineFood) => (
            <FoodItem cuisineFood={cuisineFood} key={cuisineFood._id} />
          ))}
      </section>
    </>
  )
}

export default RestaurantFood
