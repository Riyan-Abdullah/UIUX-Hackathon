import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-[#FFFFFF] border-t-2 border-[#FFFFFF] '>
            <div className='flex justify-between'>
                <div className='ms-[60px] mt-[80px]'>
                    <p className='text-[32px] font-bold font-plus_jakarta_sans leading-[48px] -3% text-primary mb-4'>MORENT</p>
                    <div className='w-[260px] h-[48px]'>
                        <p className='text-[#13131399] font-medium font-plus_jakarta_sans text-[16px] leading-[24px] lin'>Our vision is to provide convenience and help increase your sales business.</p>
                    </div>
                </div>
                <div className='mt-[80px] ms-72'>
                    <ul className='text-[#13131399] text-[16px] font-plus_jakarta_sans font-medium leading-[24px] space-y-3 '>
                        <li className='text-[#1A202C] font-semibold text-[20px] leading-[30px] font-plus_jakarta_sans mb-10'>About</li>
                        <li className='hover:text-primary hover:underline'><Link href="/">How it work</Link></li>
                        <li className='hover:text-primary hover:underline'><Link href="/">Featured</Link></li>
                        <li className='hover:text-primary hover:underline'><Link href="/">Partnership</Link></li>
                        <li className='hover:text-primary hover:underline'><Link href="/">Bussiness Relation</Link></li>
                    </ul>
                </div>
                <div className='mt-[80px] '>
                    <ul className='text-[#13131399] text-[16px] font-plus_jakarta_sans font-medium leading-[24px] space-y-3 '>
                        <li className='text-[#1A202C] font-semibold text-[20px] leading-[30px] font-plus_jakarta_sans mb-10'>Community</li>
                        <li className='hover:text-primary hover:underline'><Link href="/">Events</Link></li>
                        <li className='hover:text-primary hover:underline'><Link href="/">Blog</Link></li>
                        <li className='hover:text-primary hover:underline'><Link href="/">Podcast</Link></li>
                        <li className='hover:text-primary hover:underline'><Link href="/">Invite a Friend</Link></li>
                    </ul>
                </div>
                <div className='mt-[80px] me-24'>
                    <ul className='text-[#13131399] text-[16px] font-plus_jakarta_sans font-medium leading-[24px] space-y-3 '>
                        <li className='text-[#1A202C] font-semibold text-[20px] leading-[30px] font-plus_jakarta_sans mb-10'>Socials</li>
                        <li className='hover:text-primary hover:underline'><Link href="/">Discord</Link></li>
                        <li className='hover:text-primary hover:underline'><Link href="/">Instagram</Link></li>
                        <li className='hover:text-primary hover:underline'><Link href="/">Facebook</Link></li>
                        <li className='hover:text-primary hover:underline'><Link href="/">Twitter</Link></li>
                    </ul>
                </div>
            </div>
            <hr className='w-[1250px] mb-10 ms-14 mt-12 ' />
            <div className='flex justify-between mb-10'>
                <p className='ms-10 text-16px font-plus_jakarta_sans font-semibold'>©2022 MORENT. All rights reserved</p>
                <p className='text-[16px] ms-[620px] text-secondary font-semibold leading-[24px] font-plus_jakarta_sans hover:text-primary hover:underline'><Link href="/">Privacy & Policy</Link></p>
                <p className='text-[16px] me-9 text-secondary font-semibold leading-[24px] font-plus_jakarta_sans hover:text-primary hover:underline'><Link href="/">Terms & Condition</Link></p>
            </div>

        </div>
    )
}

export default Footer