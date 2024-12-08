import React from 'react'
import Top_Header from '@/components/Top_Header'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Popular_car from '@/components/Popular_car'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='bg-[#F6F7F9]'>
      <Top_Header />
      <Header />
      < Hero />
      < Popular_car />
      < Footer />
    </div>
  )
}

export default page