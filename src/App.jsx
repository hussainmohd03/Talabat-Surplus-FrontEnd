import Register from './pages/Register'
import './App.css'
import FoodCard from './components/FoodCard'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/foods/:id" element={<FoodCard />} />
      </Routes>
    </>
  )
}

export default App
