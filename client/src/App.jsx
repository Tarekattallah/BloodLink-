import './App.css'
import Login from './pages/auth/Login'
import Step1 from './pages/Registration/Step1'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/registration', element: <Step1 /> },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
