import React from 'react'
import Image from 'next/image'

export const LeadPstSection = () => {
  return (
        <div className='container p-10'>
            <div className='bg-[#D7B56D] flex flex-col items-center justify-center py-10'>
                <p className='font-bold border-b-2 border-black flex text-xl lg:text-2xl mb-10'>OUR LEAD PASTOR</p>
    
                <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                <div className="h-44 md:h-56 lg:h-72 w-44 md:w-56 lg:w-72 border-2 border-black flex items-center justify-center p-4 md:p-8">
                          <div className="relative h-full w-full overflow-hidden">
                          <div
                              className="flex h-full w-full"
                            >
                                <Image
                                  src='/total dominion lady.jpg'
                                  width={1000}
                                  height={1000}
                                  alt='Pst Grace Lawrence-Koko'
                                  className="h-full w-full object-contain flex-shrink-0"
                                />
                            </div>
                          </div>
                        </div>


                    <div className='w-5/6 md:w-3/6  flex flex-col gap-6'>
                        <p className='font-semibold text-base lg:text-lg'>Pst Grace Lawrence-Koko</p>
                        <p className='text-sm lg:text-base'>Pst Grace Lawrence-Koko is a dynamic leader and anointed preacher dedicated to raising a generation of believers who confidently exhibit their dominion mandate in all aspects of life. Her passion for outreach and excellence drives the church's transformative initiatives</p>
                    </div>
    
                    
                </div>
            </div>
        </div>
  )
}
