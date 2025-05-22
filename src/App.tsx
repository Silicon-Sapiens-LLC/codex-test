import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import { useAuthStore } from './store/auth'

function App() {
  const loggedIn = useAuthStore(state => state.loggedIn)

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
    </Routes>
  )
}

export default App
