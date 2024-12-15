import Image from 'next/image'
import React from 'react'

export const FounderSection = () => {
  return (
    <div className='container px-10 pb-10 pt-32'>
        <div className='border-2 border-[#D7B56D] flex flex-col items-center justify-center py-10'>
            <p className='font-bold border-b-2 border-[#D7B56D] flex text-xl mb-10'>OUR FOUNDER</p>

            <div className='flex items-center justify-center gap-10'>
                <div className='w-3/6 flex flex-col gap-6'>
                    <p className='font-semibold text-lg'>Pastor Lawrence Omubo Amadi-Koko</p>
                    <p>Our visionary founder, Pastor Lawrence Omubo Amadi-Koko, established Total Dominion International Church to fulfill God's mandate of empowering individuals to live boldly and purposefully. His unwavering commitment to spreading the Word and building strong communities remains at the heart of the church's mission.</p>
                </div>

                <div className="h-72 w-72 border-2 border-[#D7B56D] flex items-center justify-center p-8">
                      <div className="relative h-full w-full overflow-hidden">
                      <div
                          className="flex h-full w-full"
                        >
                            <Image
                              src='/total dominion man.jpg'
                              width={1000}
                              height={1000}
                              alt='Pastor Lawrence Omubo Amadi-Koko'
                              className="h-full w-full object-contain flex-shrink-0"
                            />
                        </div>
                      </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
