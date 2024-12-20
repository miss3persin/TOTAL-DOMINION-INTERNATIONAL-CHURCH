import React from 'react'

export const DonationSection = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center gap-5 md:gap-8 p-20'>
            <p className='md:border-b-2 border-[#D7B56D] font-medium text-lg md:text-xl text-center'>Make a Difference Today</p>
            <p className='text-sm md:text-base text-center'>Support our mission to impact lives through the Word, prayer, and love. Your generosity helps us serve our community and expand God's Kingdom.</p>
            <button className="bg-[#D7B56D] bg-opacity-75 py-2 px-3 text-white font-medium text-sm rounded-sm">
            DONATE NOW
          </button>
        </div>
    </div>
  )
}
