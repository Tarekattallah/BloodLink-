
import { useState } from 'react'
import Step3 from './Pages/auth/CreateAccountStep3'
import './App.css'
import Login from './pages/auth/Login'
import Step1 from './pages/Registration/Step1'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/registration', element: <Step1 /> },
  // { path: '/login', element: <Login /> },
  {path: '/completeReg', element: <Step3/>}
])

function App() {
  return (

    <RouterProvider router={router} />
    //  <CreateAccountStep3/>
  );
}

export default App;
