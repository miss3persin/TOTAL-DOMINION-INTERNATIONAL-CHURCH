import { Navbar } from "./components/Navbar"
import { AboutSection } from "./sections/AboutSection"
import { EventSection } from "./sections/EventSection"
import { Footer } from "./sections/Footer"
import { HeroSection } from "./sections/HeroSection"
import { LocationSection } from "./sections/LocationSection"
import { SermonSection } from "./sections/SermonSection"

const page = () => {
  return (
    <section>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <SermonSection/>
    <EventSection/>
    <LocationSection/>
    {/* <Footer/> */}
    {/* <div className='container'>
      <h1 className='text-3xl font-bold text-center'>My NextJS Boilerplate</h1>
    </div> */}
  </section>
  )
}

export default page