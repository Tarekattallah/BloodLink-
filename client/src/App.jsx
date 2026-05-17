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

const router = createBrowserRouter([
  { path: '/',
    element: <AdminDashboard />,
    children: [
      {path: "/impact", element: <ImpactHub />}
    ]
  },
  // { path: '/', element: <Login /> },
  // { path: '/registration', element: <Step1 /> },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
