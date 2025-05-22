import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Welcome from './Welcome'
import Dashboard from './Dashboard'
import Users from './Users'

export default function Home() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  )
}
