import React from 'react'
import Scroll from './components/ScrollSection/ScrollSection.jsx'
import Hero from './components/Hero/hero.jsx'
import KingSongNumbers from './components/Kingnumber/KingSongNumbers.jsx'
import PartnersScroller from './components/Partners/PartnersScroller.jsx'
import WhyChoose from './components/whychoose/WhyChoose.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import SocialCarousel from './components/Social/SocialCarousel.jsx'
import DesktopHero from './components/Desktop/DesktopHero.jsx'

const page = () => {
  return (
    <div>
      <DesktopHero />
      <Hero />
      <PartnersScroller />
      <KingSongNumbers />
      <Scroll />
      <WhyChoose />
      <Testimonials />
      <SocialCarousel />
    </div>
  )
}

export default page