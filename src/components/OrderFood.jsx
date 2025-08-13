const OrderFood = ({ foodItems }) => {
  console.log(foodItems)
  return (
    <>
      {foodItems &&
        foodItems.map((item) => (
          <>
            <h4>food: {item.foodId.name}</h4>
            <h4>Quantity: {item.quantity}</h4>
          </>
        ))}
    </>
  )
}

export default OrderFood
