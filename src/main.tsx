import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Header } from './components/site/Header.tsx'
import { Hero } from './components/site/Hero.tsx'
import { Trust } from './components/site/Trust.tsx'
import { BusinessInfo } from './components/site/BusinessInfo.tsx'
import { LotterySection } from './components/site/LotterySection.tsx'
import { HowItWorks } from './components/site/HowItWorks.tsx'
import { About } from './components/site/About.tsx'
import { LegalNotice } from './components/site/LegalNotice.tsx'
import { Contact } from './components/site/Contact.tsx'

import { FloatingWhatsApp } from './components/site/FloatingWhatsApp.tsx'
import { Footer } from './components/site/Footer.tsx'
import "./styles.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
     <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <Trust />
        <BusinessInfo />
        <LotterySection />
        <HowItWorks />
        <About />
        <Contact />
        <LegalNotice />
      </main>
      <Footer/>
      <FloatingWhatsApp/>
    </div>
  </StrictMode>,
)
