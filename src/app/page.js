
import EasyToUseSection from '@/components/easy-to-use-section'
import FAQSection from '@/components/faq-section'
import GuidanceSection from '@/components/guidance-section'
import HeroSection from '@/components/hero-section'
import UnlimitedSection from '@/components/unlimited-section'
import React from 'react'

const Home = () => {
  return (
    <div className=' space-y-10'>
      <HeroSection/>
      <GuidanceSection/>
      <FAQSection/>
      <UnlimitedSection/>
      <EasyToUseSection/>
    </div>
  )
}

export default Home