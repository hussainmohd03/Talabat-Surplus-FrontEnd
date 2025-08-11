const FoodList = ({ food }) => {
  return (
    <>
      <article className="food-item">
        <img src={food.image_url} alt="" />

        <div className="food-item-info">
          <h3>{food.name}</h3>
          <h3>{food.price}BD</h3>
          {/* <p>{cuisineFood.rating}</p> */}
        </div>
      </article>
    </>
  )
}

export default FoodList
