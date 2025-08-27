
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Aboutme from '../components/Aboutme' 
import Experience from '../components/Experience'
import Project from '../components/Project'
import FigmaProject from '../components/FigmaProject'

import '../styles/Home.css'

function Home() {
  return (
    <>
        <Navbar />  
        <HeroSection />
        <Aboutme />
        <Experience />
        <Project />
        <FigmaProject />
        <Footer />
    </>
  )
}

export default Home