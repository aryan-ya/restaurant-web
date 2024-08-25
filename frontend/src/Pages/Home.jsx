import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import Whoarewe from '../components/Whoarewe'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
const Home = () => {
  return (
    <>
    
    {/* all components */}
    <HeroSection />
    <About />
    <Qualities />
    <Menu />
    <Whoarewe />
    <Team />
    <Reservation />
    </>
  )
}

export default Home