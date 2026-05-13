import './App.css'
import Login from './pages/auth/Login'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'
import Step1 from './pages/Registration/Step1'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <AdminDashboard /> },
  // { path: '/', element: <Login /> },
  // { path: '/registration', element: <Step1 /> },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
