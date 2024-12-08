import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#F6F7F9]  w-[1346]'>
         <div className='flex mt-7 '>
      <div className='w-[620px] h-[330px] ms-11'>
        <img src="/assets/Ads-1.png" alt="ads" />
      </div>
      <div className='w-[620px] h-[330px] ms-7'>
      <img src="/assets/Ads-2.png" alt="ads" />
      </div>
    </div>
   <div className='flex justify-between' >
   <div  className=' bg-[#FFFFFF] h-[125px] mt-10 ms-[45px] border-t-2 border-[#FFFFFF] w-[557px] rounded-xl'>
       <div className=' relative flex ms-8 h-[30px] mt-7 w-20 '>
        <img className='w-[10px] h-[10px] mt-[6px]' src="/assets/mark.png" alt="dot" />
        <p className='font-semibold font-plus_jakarta_sans text-[16px] leading-[24px]'>Pick-Up</p>
       </div>
       <div className='flex'>
       <div className='border-r-2  h-14 mt-[5px] w-36 ms-[32px]'>
        <p>Locations</p>
        <select className='text-[#90A3BF] text-[12px] font-plus_jakarta_sans font-medium ' name="Select" id="Select">
            <option value="Select Your City">Select Your City</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahour">Lahour</option>
        </select>
       </div>
       <div  className='border-r-2 h-14 mt-[5px] w-36 ms-[22px]'>
       <p>Date</p>
        <select className='text-[#90A3BF] text-[12px] font-plus_jakarta_sans font-medium ' name="Select" id="Select">
            <option value="Select Your City">Select Your Date</option>
           
        </select>
       </div>
       <div  className=' h-14 mt-[5px] w-32 ms-[22px]'>
       <p>Time</p>
        <select className='text-[#90A3BF] text-[12px] font-plus_jakarta_sans font-medium ' name="Select" id="Select">
            <option value="Select Your Time" >Select Your Time</option>
           
        </select>
       </div>
       </div>
      
    </div>
    <div className='bg-primary w-[60px] h-[60px] items-center border-2 border-primary rounded-xl mt-[83px]' >
        <img className='ms-[13px] mt-[13px] ' src="/assets/Swap.png" alt="Up & Down arrow" />
    </div>
    <div  className=' bg-[#FFFFFF] h-[125px] mt-10 me-[35px] border-t-2 border-[#FFFFFF] w-[557px] rounded-xl'>
       <div className=' relative flex ms-8 h-[30px] mt-7 w-20 '>
        <img className='w-[10px] h-[10px] mt-[6px]' src="/assets/mark.png" alt="dot" />
        <p className='font-semibold font-plus_jakarta_sans text-[16px] leading-[24px]'>Drop-Off</p>
       </div>
       <div className='flex'>
       <div className='border-r-2  h-14 mt-[5px] w-36 ms-[32px]'>
        <p>Locations</p>
        <select className='text-[#90A3BF] text-[12px] font-plus_jakarta_sans font-medium ' name="Select" id="Select">
            <option value="Select Your City">Select Your City</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahour">Lahour</option>
        </select>
       </div>
       <div  className='border-r-2 h-14 mt-[5px] w-36 ms-[22px]'>
       <p>Date</p>
        <select className='text-[#90A3BF] text-[12px] font-plus_jakarta_sans font-medium ' name="Select" id="Select">
            <option value="Select Your City">Select Your Date</option>
           
        </select>
       </div>
       <div  className=' h-14 mt-[5px] w-32 ms-[22px]'>
       <p>Time</p>
        <select className='text-[#90A3BF] text-[12px] font-plus_jakarta_sans font-medium ' name="Select" id="Select">
            <option value="Select Your Time" >Select Your Time</option>
           
        </select>
       </div>
       </div>
      
    </div>
   </div>
    </div>
   
  )
}

export default Hero
