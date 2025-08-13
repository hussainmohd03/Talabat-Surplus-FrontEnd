const BASE_URL = import.meta.env.VITE_BACKEND_URL

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
    image: 'breakfast.png'
  },
  {
    id: 5,
    name: 'Chinese',
    image: 'chinese.png'
  },
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
export { BASE_URL, cuisines }
