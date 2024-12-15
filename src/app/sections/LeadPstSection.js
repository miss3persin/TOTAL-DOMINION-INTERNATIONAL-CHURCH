import React from 'react'
import Image from 'next/image'

export const LeadPstSection = () => {
  return (
        <div className='container p-10'>
            <div className='border-2 border-[#D7B56D] flex flex-col items-center justify-center py-10'>
                <p className='font-bold border-b-2 border-[#D7B56D] flex text-xl mb-10'>OUR LEAD PASTOR</p>
    
                <div className='flex items-center justify-center gap-10'>
                <div className="h-72 w-72 border-2 border-[#D7B56D] flex items-center justify-center p-8">
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


                    <div className='w-3/6 flex flex-col gap-6'>
                        <p className='font-semibold text-lg'>Pst Grace Lawrence-Koko</p>
                        <p>Pst Grace Lawrence-Koko is a dynamic leader and anointed preacher dedicated to raising a generation of believers who confidently exhibit their dominion mandate in all aspects of life. Her passion for outreach and excellence drives the church's transformative initiatives</p>
                    </div>
    
                    
                </div>
            </div>
        </div>
  )
}
