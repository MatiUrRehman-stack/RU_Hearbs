import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './components/navbar'
import Hero from './components/hero'
import OurStory from './components/ourstory'
import Shop from './components/shop'
import Footer from './components/footer'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Navbar />
    <Hero />
    <Shop />
    <OurStory />
    <Footer />
  </StrictMode>,
)
