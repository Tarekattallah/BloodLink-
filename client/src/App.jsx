import './App.css'
// import Login from './pages/auth/Login'
// <<<<<<< HEAD
// import Step1 from './pages/Registration/Step1'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// const router = createBrowserRouter([
//   { path: '/', element: <Login /> },
//   { path: '/registration', element: <Step1 /> },
// =======
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'
// import Step1 from './pages/Registration/Step1'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ImpactHub from './pages/community/ImpactHub'

import MedicalScreening from './pages/MedicalScreening/MedicalScreening'
// import Support from './pages/Support/Support'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminDashboard />,
    children: [
      { path: "/dashboard", element: <div>Dashboard</div> },
      { path: "/impact", element: <ImpactHub /> },
      { path: "/screening", element: <MedicalScreening /> },
      // { path: "/support", element: <Support /> },
    ]
  },
])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
