import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Welcome from './Welcome'

export default function Home() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Welcome />} />
      </Route>
    </Routes>
  )
}
