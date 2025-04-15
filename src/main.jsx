import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import App from './App.jsx'
import FeaturesSection from './Features'





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App />
     <FeaturesSection />
  
  </StrictMode>,
)
