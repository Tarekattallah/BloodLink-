import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AdminDashboard from './pages/AdminDashboard/AdminDashboard'
import ImpactHub from './pages/community/ImpactHub'
import EligibilityAdmin from './pages/EligibilityAdmin/EligibilityAdmin'
import MedicalScreening from './pages/MedicalScreening/MedicalScreening'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminDashboard />,
    children: [
      { path: '/dashboard',   element: <div>Dashboard</div> },
      { path: '/impact',      element: <ImpactHub /> },
      { path: '/eligibility', element: <EligibilityAdmin /> },
      { path: '/screening',   element: <MedicalScreening /> },
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
