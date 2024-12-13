"use client";

import Image from "next/image";
import React from "react";

export const EventSection = () => {
  // Dummy event data
  const events = [
    {
      id: 1,
      title: "Sunday Worship Service",
      description: "Join us for an uplifting worship service.",
      date: "2024-12-10",
      time: "10:00 AM",
      location: "Total Dominion International Church, Main Auditorium",
    },
    {
      id: 2,
      title: "Easter Super Sunday",
      description: "Celebrate Easter with us in style!",
      date: "2025-04-17",
      time: "11:00 AM",
      location: "Total Dominion International Church, Main Auditorium",
    },
    {
      id: 3,
      title: "Thanksgiving Service",
      description: "A special service of gratitude and thanksgiving.",
      date: "2025-11-25",
      time: "9:00 AM",
      location: "Total Dominion International Church, Main Auditorium",
    },
    {
      id: 4,
      title: "Youth Conference",
      description: "Empowering the next generation.",
      date: "2025-07-15",
      time: "3:00 PM",
      location: "Total Dominion International Church, Youth Hall",
    },
    {
      id: 5,
      title: "Christmas Celebration",
      description: "A joyous celebration of Christ's birth.",
      date: "2025-12-25",
      time: "10:00 AM",
      location: "Total Dominion International Church, Main Auditorium",
    },
  ];

  // Display only the last 3 events
  const displayedEvents = events.slice(-3);

  return (
    <div className="relative z-10">
      <div className="flex flex-col items-center justify-center gap-3 relative -z-20 py-20 md:px-12 lg:px-36">
        <p className="text-2xl font-bold border-b-2 border-[#D7B56D]">UPCOMING EVENTS</p>

        <div className="border-2 border-[#D7B56D] w-full h-[25rem] p-5 relative -z-20">
          <div
            className="w-full h-full relative -z-20 bg-cover bg-center bg-no-repeat py-8 px-8 md:p-16 flex flex-col justify-between"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1485634476346-5c642f4b6722?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

            {displayedEvents.map((event) => (
              <div
                key={event.id}
                className="flex flex-col md:flex-row items-center justify-between mb-4"
              >
                <div className="border-2 border-[#D7B56D] bg-white w-full h-8 flex items-center justify-center text-[#D7B56D] font-medium text-xs lg:text-sm xl:text-base text-center">
                  {event.title}
                </div>
                <div className="hidden md:block bg-[#D7B56D] w-full h-[2px]"></div>
                <div className="border-2 border-white bg-[#D7B56D] h-8 w-full flex items-center justify-center text-white font-medium text-xs lg:text-sm xl:text-base text-center">
                  {event.date}, {event.time}
                </div>
              </div>
            ))}

            <div className="flex items-center justify-center">
              <button className="bg-[#D7B56D] bg-opacity-75 py-2 px-3 text-white font-bold text-xs lg:text-sm rounded-sm flex items-center justify-center">
                MORE EVENTS
                <span>
                  <Image
                    src="/right-arrow.svg"
                    width={1000}
                    height={1000}
                    className="w-2 ml-3"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="-mt-16">
          <Image
            src="/design_asset.svg"
            width={160}
            height={160}
            className="rotate-90"
          />
        </div>
      </div>
    </div>
  );
};
