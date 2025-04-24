import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import HomeSection from './Home.jsx'
import FeaturesSection from './Features'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import Footer from './Footer'
import Signup from './Signup'
import Login from './Login'




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HomeSection />
     <FeaturesSection />
     <AboutSection />
     <ContactSection />
     <Footer/>
  
  </StrictMode>,
)
