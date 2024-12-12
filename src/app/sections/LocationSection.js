import Image from 'next/image'
import React from 'react'

export const LocationSection = () => {
  return (
    <div className='relative -z-20 bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center gap-5 px-10 pt-56 pb-5'
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625035410502-b5b4bc69c9c1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

        <div className='flex items-center justify-center gap-8 font-medium text-lg'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <p className='text-[#D7B56D] text-xl font-bold'>LOCATION</p>
                <p className='max-w-80 text-center'>Plot 215, Borikiri Residential Layout, Near Flourish Academy, New Road, Port Harcourt, Nigeria</p>
                <div><button className='bg-[#D7B56D] bg-opacity-75 py-2 px-3 text-white font-bold text-xs rounded-sm flex items-center justify-center'>MAKE A PRAYER REQUEST <span><Image src='/right-arrow.svg' width={1000} height={1000} className='w-2 ml-3'/></span></button></div>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-8'><span className='flex items-center justify-center text-[#D7B56D] text-xl font-bold gap-2'><Image src='/phone-icon.svg' width={1000} height={1000} className='w-3 mt-2'/>:</span>+234 812 345 6789</div>
                <div className='flex items-center gap-8'><span className='flex items-center justify-center text-[#D7B56D] text-xl font-bold gap-2'><Image src='/fb-icon.svg' width={1000} height={1000} className='w-3 mt-2'/>:</span>TotalDominion</div>
                <div className='flex items-center gap-8'><span className='flex items-center justify-center text-[#D7B56D] text-xl font-bold gap-2'><Image src='/ig-icon.svg' width={1000} height={1000} className='w-4 mt-2'/>:</span>total_dominion</div>
                <div className='flex items-center gap-8'><span className='flex items-center justify-center text-[#D7B56D] text-xl font-bold gap-2'><Image src='/mail-icon.svg' width={1000} height={1000} className='w-4 mt-2'/>:</span>totaldominioninternational@gmail.com</div>
            </div>
        </div>

        <div className='flex justify-between items-center font-medium text-sm w-full text-white mt-52 p-5'>
        <p>TOTAL DOMINION INTERNATIONAL CHURCH</p>
        <p>ALL RIGHTS RESERVED © 2025</p>
    </div>

        <Image src='/design_asset.svg' width={160} height={160} className='-rotate-45 absolute top-20 right-44'/>
        <Image src='/design_asset.svg' width={160} height={160} className='-rotate-45 absolute bottom-40 left-44 scale-x-[-1]'/>
      <Image src='/design_asset.svg' width={160} height={160} className='rotate-45 absolute bottom-40 right-44'/>
        <Image src='/design_asset.svg' width={160} height={160} className='rotate-45 absolute top-20 left-44 scale-x-[-1]'/>
    </div>
  )
}
