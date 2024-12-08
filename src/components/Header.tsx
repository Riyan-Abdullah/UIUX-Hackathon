import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-[1346] h-[115px] border-[1px] border-[#C3D4E966] bg-[#FFFFFF] flex'>
        <div>
            <p className='font-bold font-plus_jakarta_sans text-[28px] text-primary leading-[45px] -3% w-[145px] h-[42px] ms-[50px] mt-[36px]'>MORENT</p>
        </div>
        <div className=''>
            <input className='border-[#C3D4E966] border-[1px] w-[483px] h-[41px] rounded-[70px] mt-[36px] ml-[40px] absolute text-center' type="text" placeholder='Search something here' />
            <Image 
            className='relative ms-12 mt-[44px] inline'
            src="/assets/search-icon.png"
            alt='search-icon'
            width="24"
            height="24"
            />
             <Image 
            className='relative ms-[410px] mt-[44px] inline'
            src="/assets/filter.png"
            alt='search-icon'
            width="24"
            height="24"
            />
        </div>
        <div className='flex h-[44px] w-[240px] gap-6 ms-[400px] mt-10'>
            <Image 
            className='w-9 h-10'
             src="/assets/Like.png"
             alt="Like Img"
             width={30}
             height={24}

             />
              <Image
               className='w-9 h-10'
             src="/assets/Notification.png"
             alt="Like Img"
             width={30}
             height={24}

             />
            
              <Image
               className='w-9 h-10'
             src="/assets/Settings.png"
             alt="Like Img"
             width={30}
             height={24}

             />
              <Image
               className='w-9 h-10'
             src="/assets/Image-1.png"
             alt="Like Img"
             width={30}
             height={24}

             />
        </div>
    </div>
  )
}

export default Header