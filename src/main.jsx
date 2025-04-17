import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import HomeSection from './Home.jsx'
import FeaturesSection from './Features'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import Footer from './Footer'





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HomeSection />
     <FeaturesSection />
     <AboutSection />
     <ContactSection />
     <Footer/>
  
  </StrictMode>,
)
