
import FAQSection from '@/components/faq-section'
import GuidanceSection from '@/components/guidance-section'
import HeroSection from '@/components/hero-section'
import React from 'react'

const Home = () => {
  return (
    <div className=' space-y-10'>
      <HeroSection/>
      <GuidanceSection/>
      <FAQSection/>
    </div>
  )
}

export default Home