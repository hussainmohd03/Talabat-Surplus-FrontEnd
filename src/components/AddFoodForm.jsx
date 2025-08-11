import { useState } from 'react'
import Client from '../../services/api'

const AddFoodForm = ({ cuisine, setCuisineFoods, cuisineFoods }) => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    image_url: '',
    cuisine: cuisine || ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const token = localStorage.getItem('token')
      const res = await Client.post('/foods', form, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setCuisineFoods([res.data, ...cuisineFoods])
      setForm({ name: '', price: '', image_url: '', cuisine: cuisine || '' })
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
      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Food'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default AddFoodForm
