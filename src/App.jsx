import Register from './pages/Register'
import './App.css'
import FoodCard from './components/FoodCard'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import CuisineFoods from './pages/CuisineFoods'
const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<CuisineFoods />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path="/foods/:id" element={<FoodCard />} />
        </Routes>
      </main>
      <NavBar />
    </>
  )
}

export default App
