'use client'

import Image from 'next/image'
import React, { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1442115597578-2d0fb2413734?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1622294891694-07a7ebbd9f37?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542296375-0558290511f8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "/total dominion church.jpg"
];
export const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='flex md:flex-row flex-col items-center justify-center gap-10 relative px-5 py-20 md:p-20'>

<div className="h-72 md:h-96 w-full md:w-4/6 xl:w-3/6 border-2 border-[#D7B56D] flex items-center justify-center p-8">
      <div className="relative h-full w-full overflow-hidden">
      <div
          className="flex transition-transform duration-1000 ease-in-out h-full w-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={1000}
              height={1000}
              alt={`Image ${index}`}
              className="h-full w-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>

        <div className='flex flex-col gap-6 md:gap-0 w-full items-center justify-center md:items-start md:justify-start'>
          <p className='font-medium mb-0 md:mb-5 text-center md:text-left text-lg lg:text-xl lg:border-b-2 border-[#D7B56D]'>Affecting Lives to Affect Our Generation</p>
          <p className='text-sm text-center mb-0 md:mb-10 md:text-left lg:text-base'>At Total Dominion International Church, we are driven by a profound mission to spread the love of Christ and empower individuals to live victoriously. Our vision is to build a global community united in faith, compassion, and purpose. Discover how our rich history shapes our commitment to serving God and transforming lives.</p>
          <div className=''><button className='bg-[#D7B56D] bg-opacity-75 py-2 px-3 text-white font-bold text-xs rounded-sm flex items-center justify-center'>LEARN MORE <span><Image src='/right-arrow.svg' width={1000} height={1000} className='w-2 ml-3'/></span></button></div>
        </div>
      </div>
    </div>
  )
}
