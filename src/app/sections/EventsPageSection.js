'use client'

import Image from 'next/image'
import React, { useState } from 'react'

export const EventsPageSection = () => {
  const events = [
    {
      id: 1,
      title: 'Sunday Worship Service',
      description: 'Join us for an uplifting worship service.',
      date: '2024-12-10',
      time: '10:00 AM',
      location: 'Total Dominion International Church, Main Auditorium'
    },
    {
      id: 2,
      title: 'Easter Super Sunday',
      description: 'Celebrate Easter with us in style!',
      date: '2025-04-17',
      time: '11:00 AM',
      location: 'Total Dominion International Church, Main Auditorium'
    },
    {
      id: 3,
      title: 'Thanksgiving Service',
      description: 'A special service of gratitude and thanksgiving.',
      date: '2025-11-25',
      time: '9:00 AM',
      location: 'Total Dominion International Church, Main Auditorium'
    },
    {
      id: 4,
      title: 'Youth Conference',
      description: 'Empowering the next generation.',
      date: '2025-07-15',
      time: '3:00 PM',
      location: 'Total Dominion International Church, Youth Hall'
    },
    {
      id: 5,
      title: 'Christmas Celebration',
      description: "A joyous celebration of Christ's birth.",
      date: '2025-12-25',
      time: '10:00 AM',
      location: 'Total Dominion International Church, Main Auditorium'
    }
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 20

  // Filter and sort events
  const filteredEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))

  // Paginated events
  const indexOfLastEvent = currentPage * eventsPerPage
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  )

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage)

  return (
    <div className='relative z-10 mt-20'>
      <div
        className='relative -z-20 flex flex-col items-center justify-center gap-2 bg-cover bg-center bg-no-repeat px-5 md:px-16 pt-5 pb-5'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      >
        <div className='absolute inset-0 -z-10 bg-black bg-opacity-60'></div>

        <div className='mb-5 md:mb-0 flex items-center justify-center lg:justify-between w-full'>
          <div className='relative hidden flex-col items-center justify-center lg:flex'>
            <Image
              src='/design_asset.svg'
              width={160}
              height={160}
              className='rotate-90'
            />
          </div>

          <div>
            <p className='text-white font-bold lg:font-extrabold text-lg lg:text-2xl text-center  border-b-2 border-[#D7B56D]'>UPCOMING EVENTS</p>
          </div>

          <div className='relative hidden flex-col items-center justify-center lg:flex'>
            <Image
              src='/design_asset.svg'
              width={160}
              height={160}
              className='rotate-90'
            />
          </div>
        </div>

        {/* Table */}
        <div className='w-full border md:border-2 border-double border-[#D7B56D] p-1 md:p-5 xl:p-10'>
          <div className='custom-scrollbar max-h-[60rem] overflow-y-auto pr-2 md:pr-3'>
            {currentEvents.length > 0 ? (
              currentEvents.map(event => (
                <div
                  key={event.id}
                  className='mb-4 flex w-full h-full md:h-24 flex-col items-center justify-between gap-3 border-2 border-[#D7B56D] p-3 md:flex-row'
                >
                  <div className='flex h-16 w-full items-center justify-center border-2 border-[#D7B56D] bg-white text-center font-medium text-[#D7B56D] text-xs md:text-sm xl:text-base'>
                    {event.title}
                  </div>
                  <div className='flex h-16 w-full flex-col items-center justify-center border-2 bg-[#D7B56D] text-center font-medium text-white'>
                    <p className='text-xs xl:text-sm'>{event.description}</p>
                  </div>
                  <div className='flex h-16 w-full flex-col items-center justify-center border-2 border-[#D7B56D] bg-white text-center font-medium text-[#D7B56D]'>
                    <p className='text-[0.6rem] lg:text-xs xl:text-sm'>
                      {event.date}, {event.time}
                    </p>
                    <p className='text-[0.6rem] lg:text-xs xl:text-sm'>{event.location}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className='text-center text-white'>No upcoming events</p>
            )}
          </div>

          {/* Pagination */}
          <div className='mt-6 md:mt-4 mb-3 md:mb-0 flex flex-col md:flex-row items-center justify-center gap-4'>
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className='rounded-sm text-sm lg:text-base bg-[#D7B56D] px-4 py-2 text-white disabled:bg-gray-500'
            >
              Previous
            </button>
            <span className='text-sm lg:text-base text-white'>{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              onClick={() =>
                setCurrentPage(prev => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className='rounded-sm text-sm lg:text-base bg-[#D7B56D] px-4 py-2 text-white disabled:bg-gray-500'
            >
              Next
            </button>
          </div>
        </div>

        <div className='flex items-center justify-between w-full'>
          <div className='relative hidden flex-col items-center justify-center lg:flex'>
            <Image
              src='/design_asset.svg'
              width={160}
              height={160}
              className='-rotate-90'
            />
          </div>

          <div className='relative hidden flex-col items-center justify-center lg:flex'>
            <Image
              src='/design_asset.svg'
              width={160}
              height={160}
              className='-rotate-90'
            />
          </div>
        </div>

        <div className='mt-16 flex w-full flex-col items-center justify-between gap-5 text-xs font-medium text-white md:mt-10 md:flex-row md:gap-0 lg:text-sm'>
          <p className='text-center'>TOTAL DOMINION INTERNATIONAL CHURCH</p>
          <p className='text-center'>ALL RIGHTS RESERVED © 2025</p>
        </div>
      </div>
    </div>
  )
}
