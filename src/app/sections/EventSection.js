import Image from 'next/image'
import React from 'react'

export const EventSection = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center gap-3 relative py-20'> 
            <p className='text-2xl font-bold'>UPCOMING EVENTS</p>

            <div className='border-2 border-[#D7B56D] w-[70rem] h-[25rem] p-5'>

                <div className='w-full h-full relative -z-20 bg-cover bg-center bg-no-repeat p-16 flex flex-col justify-between'
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1485634476346-5c642f4b6722?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

                    <div className='flex items-center justify-between'>
                        <div className='border-2 border-[#D7B56D] bg-white w-full h-8 flex items-center justify-center text-[#D7B56D] font-medium'>EASTER SUPER SUNDAY</div>
                        <div className='bg-[#D7B56D] w-full h-[2px]'></div>
                        <div className='border-2 border-white bg-[#D7B56D] h-8 w-full flex items-center justify-center text-white font-medium'>17th April, 2025. 11:00AM</div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='border-2 border-[#D7B56D] bg-white w-full h-8 flex items-center justify-center text-[#D7B56D] font-medium'>EASTER SUPER SUNDAY</div>
                        <div className='bg-[#D7B56D] w-full h-[2px]'></div>
                        <div className='border-2 border-white bg-[#D7B56D] h-8 w-full flex items-center justify-center text-white font-medium'>17th April, 2025. 11:00AM</div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='border-2 border-[#D7B56D] bg-white w-full h-8 flex items-center justify-center text-[#D7B56D] font-medium'>EASTER SUPER SUNDAY</div>
                        <div className='bg-[#D7B56D] w-full h-[2px]'></div>
                        <div className='border-2 border-white bg-[#D7B56D] h-8 w-full flex items-center justify-center text-white font-medium'>17th April, 2025. 11:00AM</div>
                    </div>

                    <div className='flex items-center justify-center'><button className='bg-[#D7B56D] bg-opacity-75 py-2 px-3 text-white font-bold text-xs rounded-sm flex items-center justify-center'>MORE EVENTS <span><Image src='/right-arrow.svg' width={1000} height={1000} className='w-2 ml-3'/></span></button></div>

                </div>

            </div>

            <div className='-mt-16'><Image src='/design_asset.svg' width={160} height={160} className='rotate-90'/></div>
        </div>
    </div>
  )
}
