import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import Projects from "../components/Projects"
import WhyUs from "../components/WhyUs"
import Testimonials from "../components/Testimonials"
import CTA from "../components/CTA"
import OurProcess from "../components/OurProcess"
import Packages from "../components/Packages"

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Packages />
        <WhyUs />
        <OurProcess />  
        <CTA />
        
    </>
  )
}

export default Home
