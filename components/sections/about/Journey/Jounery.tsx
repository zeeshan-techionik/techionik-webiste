"use client";

import Image from "next/image";
import React, { useState } from 'react';
import { journeyData } from "../../../../data/JourneyData";

const Journey = () => {
  const { title, gradientTitle, afterGradientTitle, description, list, years } = journeyData;
  const highlightColor = "#F05323";
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="">
      {/* Header */}
      <div className="space-y-7 mt-10 px-6 sm:pl-20 md:pl-25 max-w-5xl">
        <h2 className="">
          {title}
          <span className="gradient-text">{gradientTitle} </span>
          {afterGradientTitle}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 wrap-break-word">{description}</p>
      </div>

      {/* Image + Bullets */}
      <div className="mt-38 flex flex-col items-center">
        <div className="1st-div flex lg:mb-5 lg:justify-normal">
          <div className="image hidden lg:block">
            <Image
              src="/images/about/journey.svg"
              alt="Journey Image"
              width={568}
              height={347}
              className="bg-image"
            />
          </div>

          <div className="bullets flex flex-col items-center lg:items-end lg:relative lg:right-52 lg:top-40">
            <ul className="list-disc text-[rgba(206,206,206,1)]">
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-linear-primary text-[119px] md:text-[219px]">{years[0]}</p>
          </div>
        </div>

        {/* Timeline */}
         <div className="timeline flex items-center justify-center mt-16 flex-col lg:flex-row">
      {years.map((year, index) => {
        const isActive = index === activeIndex;

        return (
          <React.Fragment key={year}>
            <span
              className={`px-6 rounded-full text-[28px] font-light cursor-pointer transition-colors duration-300
                ${isActive ? "text-white" : "text-[#BDBDBD]"}
              `}
              style={{
                backgroundColor: isActive ? highlightColor : "#2A2A2A",
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(0)}
            >
              {year}
            </span>

            {index !== years.length - 1 && (
              <span className="h-7 border-[0.4px] relative lg:w-7 lg:h-0 pointer-events-none" />
            )}
          </React.Fragment>
        );
      })}
    </div>
      </div>
    </div>
  );
};

export default Journey;
