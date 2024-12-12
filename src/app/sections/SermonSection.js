import React from 'react'
import Image from 'next/image'

export const SermonSection = () => {
  return (
    <div>
        <div className='relative -z-20 bg-cover bg-center bg-no-repeat text-white flex items-center justify-center gap-8 p-32' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519491050282-cf00c82424b4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

            <div className='border-r-2 border-[#D7B56D] flex items-center py-5'>
              <div className='flex flex-col items-center gap-5'>
                <p className='text-[1.4rem] font-black'>RECENT SERMONS</p>

                <div className='flex flex-col gap-5'>
                    <p className='border-2 px-3 py-1 font-medium text-sm flex items-center justify-center'>The Power of The Holy Ghost</p>
                    <p className='border-2 px-3 py-1 font-medium text-sm flex items-center justify-center'>The Power of The Holy Ghost</p>
                    <p className='border-2 text-[#D7B56D] border-[#D7B56D] px-3 py-1 font-medium text-sm flex items-center justify-center'>The Power of The Holy Ghost</p>
                    <p className='border-2 px-3 py-1 font-medium text-sm flex items-center justify-center'>The Power of The Holy Ghost</p>
                </div>

                <div><button className='bg-[#D7B56D] bg-opacity-75 py-2 px-3 text-white font-bold text-xs rounded-sm flex items-center justify-center'>SEE MORE <span><Image src='/right-arrow.svg' width={1000} height={1000} className='w-2 ml-3'/></span></button></div>

                </div>
                <div className='bg-[#D7B56D] w-12 h-[2px] mt-14'></div>
            </div>



            <div className='flex flex-col items-center gap-2'>
                <p className='text-xl font-bold'>The Power of The Holy Ghost</p>
                <p className='text-sm font-bold'>Pastor Akin Ayanwale</p>
                <p className='text-sm font-bold'>June 16, 2020</p>
                <p className='border-2 border-[#D7B56D] px-2 py-1 w-72 h-40 font-medium text-xs flex items-center justify-center'>description...</p>
            </div>


        <div><Image src='/design_asset.svg' width={160} height={160} className='-rotate-45 absolute top-0 right-44'/></div>
        <div><Image src='/design_asset.svg' width={160} height={160} className='-rotate-45 absolute bottom-0 left-44 scale-x-[-1]'/></div>
        </div>
    </div>
  )
}
