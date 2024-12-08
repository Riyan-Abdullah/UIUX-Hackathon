import React from 'react'
import Image from 'next/image'

const Top_Header = () => {
  return (
    <div className='flex  w-[1346px] h-[134px] bg-[#FFFFFF] justify-between mb-20'>
        <div className='flex mt-11'>
            <div className='w-[32px] h-[32px] mt-1 ms-[30px]'>
            <Image 
      src='/assets/command.png'
      alt='img'
      width={32}
      height={32}/>
            </div>
      
      <p className='font-bold text-[32px] leading-[40px] text-secondary'>High Fidelity Dashboard - Home Rent</p>
        </div>
        <div className='mt-14 me-[30px]'>
            <p className='font-medium text-[20px] leading-[25px] text-[#666666]'>Last Updated: <span className='font-bold text-[20px] leading-[25px] text-[#000000]'>8 Aug 2022</span></p>
        </div>
    </div>
  )
}

export default Top_Header
