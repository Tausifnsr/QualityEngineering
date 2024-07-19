import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Join from './Components/Join';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import WhatsAppButton from './Components/WhatsAppButton';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
  });
  }, [])

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Join/>
    <Services/>
    <Projects/>
    <Contact/>
    <WhatsAppButton/>
    <Footer/>
    </>
  )
}

export default App