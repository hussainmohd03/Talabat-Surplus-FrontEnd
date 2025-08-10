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
        </Routes>
      </main>
      <NavBar />
    </>
  )
}

export default App
