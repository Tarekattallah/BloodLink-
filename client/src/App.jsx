import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'
import ImpactHub from './pages/community/ImpactHub'
import Step1 from './pages/Registration/Step1'
import './App.css'
import Login from './pages/auth/Login'

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/registration', element: <Step1 /> },
  { path: '/Admin', element: <AdminDashboard />,
    children: [
      {path: "impact", element: <ImpactHub />}
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
