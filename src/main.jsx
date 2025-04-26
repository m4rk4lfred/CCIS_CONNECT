import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomeSection from './Landingpage/Home.jsx'
import FeaturesSection from './Landingpage/Features.jsx'
import AboutSection from './Landingpage/AboutSection.jsx'
import ContactSection from './Landingpage/ContactSection.jsx'
import Footer from './Landingpage/Footer.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HomeSection />
     <FeaturesSection />
     <AboutSection />
     <ContactSection />
     <Footer/>
  
  </StrictMode>,
)
