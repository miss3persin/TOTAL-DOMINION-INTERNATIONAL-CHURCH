import Image from 'next/image'
import React from 'react'

export const HeroSection = () => {
  return (
    <div className='bg-black relative -z-20 bg-cover bg-center bg-no-repeat text-white h-screen flex flex-col items-center justify-center' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530688957198-8570b1819eeb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

        <div className='flex flex-col items-center justify-center gap-10 mt-16'>

            <div className='flex flex-col items-center justify-center gap-3'>
            <p className='flex text-center items-center justify-center text-6xl font-black'>TOTAL DOMINION <br/> INTERNATIONAL CHURCH</p>
            <p className='mt-2 text-xl font-medium'>Affecting Lives to Affect Our Generation</p>
            </div>

            <div className='flex items-center justify-center gap-8'>
                <div className='bg-[#D7B56D] w-80 h-[1px]'></div>
                <div><Image src='/TDI-removebg-preview.png' width={1000} height={1000} className='w-20'/></div>
                <div className='bg-[#D7B56D] w-80 h-[1px]'></div>
            </div>
            
            <div className='flex flex-col items-center justify-center gap-3'>
            <p className='text-xl italic max-w-[55rem] text-center'>"Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity."</p>
            <p className='text-xl'>1 TIMOTHY 4: 12</p>
            </div>
        </div>
    </div>
  )
}
