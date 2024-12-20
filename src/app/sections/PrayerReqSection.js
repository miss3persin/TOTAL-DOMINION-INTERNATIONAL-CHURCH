import Image from 'next/image'
import React from 'react'

export const PrayerReqSection = () => {
  return (
    <div className="relative z-10 mt-20">
        <div
        className="relative -z-20 bg-cover bg-center bg-no-repeat text-white flex items-center justify-center gap-16 px-5 py-16 md:p-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

        <div className='hidden lg:flex flex-col items-center justify-center relative'>
            <Image
            src="/design_asset.svg"
            width={250}
            height={250}
            className="rotate-180"
            />
        </div>

        <div>
        <form className="w-full md:w-96 space-y-6">
            <div
              className="flex items-center justify-center gap-3"
            >
              <label className="text-sm md:text-base">NAME:</label>
              <input
                type="text"
                name="name"
                className="rounded-sm border md:border-2 border-[#D7B56D] bg-transparent text-white outline-none px-2 py-1 w-full text-sm md:text-base"
              />
            </div>


            <div
              className="flex items-center justify-center gap-3"
            >
              <label className="text-sm md:text-base">EMAIL:</label>
              <input
                type="email"
                name="email"
                className="rounded-sm border md:border-2 border-[#D7B56D] bg-transparent text-white outline-none px-2 py-1 w-full text-sm md:text-base"
              />
            </div>

            <div>

            <div>
              <label className="text-sm md:text-base">PRAYER REQUEST:</label>
              <textarea
                name="prayer request"
                className="rounded-sm border md:border-2 border-[#D7B56D] bg-transparent text-white outline-none px-2 py-1 w-full text-sm md:text-base h-36 resize-none"
              />
            </div>

            <div className='flex items-center justify-center'>
            <button className="bg-[#D7B56D] bg-opacity-75 py-2 px-3 text-white font-medium text-sm rounded-sm mt-4">
            Send Prayer Request
          </button>
          </div>
            </div>
          </form>
        </div>

        <div className='hidden lg:flex flex-col items-center justify-center relative'>
            <Image
            src="/design_asset.svg"
            width={250}
            height={250}
            className="rotate-0"
            />
        </div>

    </div>
    </div>
  )
}
