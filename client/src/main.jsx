import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AuthContext from './component/context/authContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthContext>
        <App />
      </AuthContext>
  </StrictMode>,
)
