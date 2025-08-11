import { useState } from 'react'
import Client from '../../services/api'

const EditFoodForm = ({ food, setCuisineFoods, cuisineFoods, onClose }) => {
  const [form, setForm] = useState({
    name: food.name,
    price: food.price,
    image_url: food.image_url,
    cuisine: food.cuisine
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await Client.put(`/foods/${food._id}`, form)
      setCuisineFoods(
        cuisineFoods.map((item) => (item._id === food._id ? res.data : item))
      )
      if (onClose) onClose()
    } catch (err) {
      throw err
    }
  }

  return (
    <form onSubmit={handleSubmit} className="edit-food-form">
      <h3>Edit Food</h3>
      <input
        type="text"
        name="name"
        placeholder="Food Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="image_url"
        placeholder="Image URL"
        value={form.image_url}
        onChange={handleChange}
        required
      />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onClose} className="cancel-button">
        Cancel
      </button>
    </form>
  )
}

export default EditFoodForm
