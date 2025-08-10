import Register from './pages/Register'
import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
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
        </Routes>
      </main>
      <NavBar />
    </>
  )
}

export default App
