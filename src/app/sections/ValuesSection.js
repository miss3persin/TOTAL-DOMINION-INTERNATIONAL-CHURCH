import Image from 'next/image'
import React from 'react'

export const ValuesSection = () => {
  return (
    <div className="relative z-10 mt-10">
        <div
        className="relative -z-20 bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center gap-8 px-5 md:px-10 pt-20 md:pt-32 pb-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1553406624-329f8c4b95ad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>


        <div className='flex items-center justify-center mb-8 md:mb-10'><p className='text-white border-b-2 md:text-2xl lg:text-3xl border-[#D7B56D] font-bold'>Vision, Mission, and Core Values</p></div>


        <div className='px-5 md:px-24 lg:px-64'>

            {/* Vision */}
            <div>
            <div className='flex flex-col gap-6 items-center justify-center'>
                <p className='font-semibold text-sm md:text-lg border-b-2 border-[#D7B56D]'>Vision</p>
                <p className='text-center text-xs md:text-base'>Affecting lives through the Word, prayer, and love to enter into God's dominion mandate, who also in turn will affect their generation.</p>
            </div>

            <div className='flex flex-col items-center justify-center relative my-5'>
                <Image
                src="/design_asset.svg"
                width={90}
                height={90}
                className="-rotate-90 absolute"
                />
                <Image
                src="/design_asset.svg"
                width={90}
                height={90}
                className="rotate-90"
                />
            </div>
            </div>

            {/* Mission */}
            <div>
            <div className='flex flex-col gap-6 items-center justify-center'>
                <p className='font-semibold text-sm md:text-lg border-b-2 border-[#D7B56D]'>Mission</p>
                <p className='text-center text-xs md:text-base'>Raising people that are bold and courageous to exhibit their dominion mandate in all spheres of life.</p>
            </div>

            <div className='flex flex-col items-center justify-center relative my-5'>
                <Image
                src="/design_asset.svg"
                width={90}
                height={90}
                className="-rotate-90 absolute"
                />
                <Image
                src="/design_asset.svg"
                width={90}
                height={90}
                className="rotate-90"
                />
            </div>
            </div>


            {/* Core Values */}
            <div>
            <div className='flex flex-col gap-6 items-center justify-center'>
                <p className='font-semibold text-sm md:text-lg border-b-2 border-[#D7B56D]'>Core Values</p>
                <div className='flex flex-col gap-3 md:items-center md:justify-center text-xs md:text-base'>
                <p><span className='font-semibold'>Word: </span>Teaching and living by the Word of God.</p>
                <p><span className='font-semibold'>Prayer: </span> A lifestyle centered on communication with God.</p>
                <p><span className='font-semibold'>Love: </span> Extending God's love to everyone.</p>
                <p><span className='font-semibold'>Excellence: </span> Striving for the highest standards in all we do.</p>
                </div>
            </div>
            </div>

        </div>


        <div className='flex flex-col md:flex-row justify-between items-center font-medium text-xs lg:text-sm w-full text-white mt-20 md:mt-44 gap-5 md:gap-0'>
        <p className='text-center'>TOTAL DOMINION INTERNATIONAL CHURCH</p>
        <p className='text-center'>ALL RIGHTS RESERVED © 2025</p>
    </div>
        </div>
    </div>
  )
}
