"use client";

import React, { useState } from "react";
import Image from "next/image";

const sermons = [
  {
    id: 1,
    title: "Faith in Action",
    preacher: "Pastor John Doe",
    date: "2024-12-01",
    video_url: "https://example.com/sermon1.mp4",
    thumbnail_url: "https://example.com/thumbnail1.jpg",
    description: "An inspiring message about living out your faith.",
  },
  {
    id: 2,
    title: "Walking in Grace",
    preacher: "Pastor Jane Smith",
    date: "2024-12-08",
    video_url: "https://example.com/sermon2.mp4",
    thumbnail_url: "https://example.com/thumbnail2.jpg",
    description: "Discover the power of God's grace in your life.",
  },
  {
    id: 3,
    title: "The Power of Prayer",
    preacher: "Pastor Mark Lee",
    date: "2024-12-15",
    video_url: "https://example.com/sermon3.mp4",
    thumbnail_url: "https://example.com/thumbnail3.jpg",
    description: "Learn the importance and impact of persistent prayer.",
  },
  {
    id: 4,
    title: "The Love of God",
    preacher: "Pastor Sarah Brown",
    date: "2024-12-22",
    video_url: "https://example.com/sermon4.mp4",
    thumbnail_url: "https://example.com/thumbnail4.jpg",
    description: "Experience the depth and beauty of God's love for us.",
  },
  {
    id: 5,
    title: "Trusting in His Plan",
    preacher: "Pastor Akin Ayanwale",
    date: "2024-12-29",
    video_url: "https://example.com/sermon5.mp4",
    thumbnail_url: "https://example.com/thumbnail5.jpg",
    description: "Trust in God's plan even when life seems uncertain.",
  },
];

const topValues = {
  0: "15px", // Position for the 4th active sermon
  1: "67px", // Position for the 3rd active sermon
  2: "119px", // Adjust as needed for the 2nd active sermon
  3: "171px",  // Adjust as needed for the 1st active sermon
};

export const SermonSection = () => {
  const displayedSermons = sermons.slice(-4); // Display the last 4 sermons
  const [activeSermon, setActiveSermon] = useState(displayedSermons[0].id); // Default to the first sermon in the list

  const handleSermonClick = (id) => {
    setActiveSermon(id); // Update the active sermon
  };

  const activeSermonDetails = displayedSermons.find(
    (sermon) => sermon.id === activeSermon
  );

  return (
    <div className="relative z-10">
      <div
        className="relative -z-20 bg-cover bg-center bg-no-repeat text-white flex flex-col md:flex-row items-center justify-center gap-8 p-32"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519491050282-cf00c82424b4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

        <div className="lg:border-r-2 border-[#D7B56D] flex items-center md:px-20 lg:px-0 py-5">
          <div className="flex flex-col items-center gap-5 lg:pr-10">
            <p className="text-[1.4rem] font-black text-center lg:border-b-2 border-[#D7B56D]">
              RECENT SERMONS
            </p>

            <div className="flex flex-col gap-5 relative">
              {displayedSermons.map((sermon, index) => (
                <div
                  key={sermon.id}
                  className={`border-2 px-3 py-1 font-medium text-center text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] cursor-pointer ${
                    activeSermon === sermon.id
                      ? "text-[#D7B56D] border-[#D7B56D]"
                      : "text-white border-white"
                  }`}
                  onClick={() => handleSermonClick(sermon.id)}
                >
                  {sermon.title}
                </div>
              ))}

              {/* Indicator */}
              <div
  className="hidden lg:block bg-[#D7B56D] -right-16 w-16 h-[2px] absolute transition-all duration-300"
  style={{
    top: topValues[displayedSermons.findIndex(
      (sermon) => sermon.id === activeSermon
    )],
  }}
></div>
            </div>

            <div>
              <button className="bg-[#D7B56D] bg-opacity-75 py-2 px-3 text-white font-bold text-xs rounded-sm flex items-center justify-center">
                SEE MORE{" "}
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

        {/* Right Section */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-bold border-b-2 border-[#D7B56D]">{activeSermonDetails.title}</p>
          <p className="text-sm font-bold flex items-center justify-center gap-3"><span className='flex items-center justify-center'><Image src='/person-icon.svg' width={1000} height={1000} className='w-3'/></span>{activeSermonDetails.preacher}</p>
          <p className="text-sm font-bold flex items-center justify-center gap-3"><span className='flex items-center justify-center'><Image src='/time-icon.svg' width={1000} height={1000} className='w-3'/></span>{activeSermonDetails.date}</p>
          <p className="border-2 border-[#D7B56D] px-2 py-1 w-72 h-40 font-medium text-center text-xs flex items-center justify-center">
            {activeSermonDetails.description}
          </p>
        </div>

        {/* Decorative Design Assets */}
        <div>
          <Image
            src="/design_asset.svg"
            width={160}
            height={160}
            className="hidden lg:block -rotate-45 absolute top-0 right-44"
          />
        </div>
        <div>
          <Image
            src="/design_asset.svg"
            width={160}
            height={160}
            className="hidden lg:block -rotate-45 absolute bottom-0 left-44 scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
};
