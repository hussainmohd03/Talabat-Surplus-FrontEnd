import { useState } from 'react'
import Client from '../../services/api'
import { cuisines } from '../../globals'

const AddFoodForm = ({ cuisine, setCuisineFoods, cuisineFoods }) => {
  const initialValues = {
    name: '',
    price: '',
    image_url: '',
    cuisine: cuisine || ''
  }
  const [form, setForm] = useState(initialValues)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      const res = await Client.post('/foods', form)
      setCuisineFoods([res.data, ...cuisineFoods])
      setForm(initialValues)
    } catch (err) {
      setError('Failed to add food item')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="add-food-form">
      <h3>Add New Food</h3>
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
      <select
        name="cuisine"
        value={form.cuisine}
        onChange={handleChange}
        required
      >
        <option value="">Select Cuisine</option>
        {cuisines.map((cuisine) => (
          <option key={cuisine.id} value={cuisine.name}>
            {cuisine.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Food</button>
    </form>
  )
}

export default AddFoodForm
