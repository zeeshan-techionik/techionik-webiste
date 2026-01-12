// components/CaseStudyCard.tsx
"use client";

import Image from "next/image";
import { CaseStudy } from "@/data/CaseStudy";
import { useState } from "react";
import Button from "./Button";

interface CaseStudyCardProps {
  data: CaseStudy;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function CaseStudyCard({
  data,
  index,
  activeIndex,
  setActiveIndex
}: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isActive = index === activeIndex;
  const isBelowActive = index > activeIndex;

  let positionClasses = "";
  let scale = 1;
  let zIndex = 10;

  if (isActive) {
    positionClasses = "z-30 translate-y-0";
    scale = 1;
    zIndex = 30;
  } else if (index === activeIndex + 1) {
    positionClasses = "z-20 translate-y-10 bg-secondary";
    scale = 0.95;
    zIndex = 20;
  } else if (index === activeIndex - 1) {
    positionClasses = "z-20 -translate-y-10 ";
    scale = 0.95;
    zIndex = 20;
  } else if (index < activeIndex) {
    positionClasses = "z-10 -translate-y-20 ";
    scale = 0.85;
    zIndex = 10;
  } else {
    positionClasses = "z-10 translate-y-20 ";
    scale = 0.85;
    zIndex = 10;
  }
  // width: "1240px",
  //     height: "600px",

  return (
    <div
      className={`absolute left-0 right-0 transition-all w-full duration-500 ${positionClasses}`}
      style={{
        transform: `scale(${scale})`,
        top: `${index * 20}px`,
        zIndex: zIndex,
        width: "1072px",
        height: "529px",
        left: "50%",
        transformOrigin: "center",
        marginLeft: "-536px"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setActiveIndex(index)}
    >
      <div
        className={`w-full h-full rounded-2xl p-8 border-2 border-[#2A2A34] transition-all duration-300
          ${isBelowActive ? "bg-secondary" : "bg-[#16161A]"}
          ${isHovered && !isActive ? "scale-[1.02] border-orange-500/30" : ""}
          ${isActive ? "shadow-xl shadow-orange-500/10 border-orange-500/50" : ""}
        `}
      >
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              {isActive && (
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    {data.title} with <span className="gradient-text">{data.brand}</span>
                  </h3>
                </div>)}

              {isActive && (<div className="mb-6">
                <p className="text-gray-300">
                  <span className="gradient-text font-semibold">Solution Delivered:</span> {data.solution}
                </p>
              </div>)}


              {isActive && (<div className="flex gap-10 mb-8">
                {data.stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>)}
            </div>

            {/* Button */}
            <div>
              {isActive && (

                <Button
                  text="Read full Case Study"
                  icon="/icons/arrow-right.svg"
                  size="medium"
                  radius="full"

                  href="#"
                  variant="glass"
                  className="inline-flex w-full md:w-auto justify-center"
                />

              )}

            </div>

          </div>


          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              {isActive && (<Image
                src={data.imageDesktop}
                alt={data.brand}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />)}

              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
                <div className="text-white font-bold text-xl">{data.brand.charAt(0)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}