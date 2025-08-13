const BASE_URL = import.meta.env.VITE_BACKEND_URL

const cuisines = [
  {
    id: 1,
    name: 'Fast Food',
    image: 'burger.png'
  },
  { id: 2, name: 'Italian', image: 'pizza.png' },
  {
    id: 3,
    name: 'Desserts',
    image: 'desserts.png'
  },
  {
    id: 4,
    name: 'Breakfast',
    image: 'breakfast.png'
  },
  {
    id: 5,
    name: 'Chinese',
    image: 'chinese.png'
  },
  { id: 6, name: 'Mexican', image: 'mexico.png' },
  { id: 7, name: 'Indian', image: 'indian.png' },
  { id: 8, name: 'Thai', image: 'thai.png' },
  {
    id: 9,
    name: 'Japanese',
    image: 'japanese.png'
  },
  {
    id: 10,
    name: 'Beverages',
    image: 'beverages.png'
  },
  { id: 11, name: 'Korean', image: 'korean.png' },
  {
    id: 12,
    name: 'American',
    image: 'american.png'
  }
]
export { BASE_URL, cuisines }
