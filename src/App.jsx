import { Routes, Route } from "react-router-dom"
import Home from "@pages/home"

function App() {
  alert(import.meta.env.VITE_NASA_FIRMS_API_URL)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App
