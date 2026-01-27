import React from "react";
import Image from "next/image";
import { outsourcingModelsData } from "../data/outSourceModel";

const OutsourcingModels = () => {
  return (
    <section className="bg-black  py-24 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden font-sans">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-[var(--color-muted)]">
            {outsourcingModelsData.title}{" "}
          </span>
          <span className="gradient-text">
            {outsourcingModelsData.MiddleTitle}
          </span>{" "}
          <span className="text-white">{outsourcingModelsData.lastTitle}</span>
        </h2>
        <p className="text-[var(--color-muted)] text-base md:text-lg max-w-2xl leading-relaxed">
          {outsourcingModelsData.description}
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {outsourcingModelsData.slides.map((slide, index) => {
          const isOdd = index % 2 !== 0; // Column 2 (Right side)
          const isFirstRow = index < 2; // First two cards

          return (
            <div
              key={index}
              className="group relative bg-[var(--color-secondary-dark)] rounded-3xl overflow-hidden w-600px min-h-[294px] flex flex-col justify-center border border-white/5 transition-all duration-500"
            >
              {/* CORNER BORDER HOVER EFFECT (Top Right) */}
              <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-30">
                <div className="absolute top-0 right-0 w-32 h-[1.5px] bg-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-[1.5px] h-32 bg-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* IMAGE POSITIONING LOGIC
                  Row 1: Anchored to BOTTOM corners
                  Row 2: Anchored to TOP corners
              */}
              <div
                className={`
                absolute pointer-events-none transition-all duration-700 ease-out z-0
                w-[250px] h-[200px] md:w-[250px] md:h-[200px]
                
                /* Full Visibility - No Opacity */
                opacity-100 grayscale-0 brightness-100
                group-hover:scale-110

                ${
                  isFirstRow
                    ? isOdd
                      ? "-left-32 -bottom-24"
                      : "-right-32 -bottom-24" // Row 1: Bottom corners
                    : isOdd
                      ? "-left-32 -top-24"
                      : "-right-32 -top-24" // Row 2: Top corners
                }
              `}
              >
                <div className="relative w-full h-[220px] group overflow-hidden">
                  {/* Default Image */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="50vw"
                    className="
      absolute inset-0
      z-10
      object-contain
      transition-opacity duration-500 ease-in-out
      opacity-100
      group-hover:opacity-0
    "
                  />

                  {/* Hover Image */}
                  <Image
                    src={slide.hoverImage}
                    alt={slide.title}
                    aria-hidden
                    fill
                    sizes="50vw"
                    className="
      absolute inset-0
      z-20
      object-contain
      transition-opacity duration-500 ease-in-out
      opacity-0
      group-hover:opacity-100
    "
                  />
                </div>
              </div>

              {/* TEXT CONTENT */}

              <h2
                className={`relative z-10 w-full p-10 md:p-14 flex ${
                  isOdd ? "justify-end text-right" : "justify-start text-left"
                }`}
              >
                <div className="max-w-[85%] md:max-w-[70%]">
                  <h2 className="text-white text-3xl md:text-4xl  mb-8 leading-[1.1]">
                    {slide.title}
                  </h2>

                  <div className="space-y-3">
                    {slide.bulletPoints.map((point, i) => (
                      <p
                        key={i}
                        className="text-[var(--color-muted)] text-sm md:text-[15px] font-medium leading-relaxed group-hover:text-gray-200 transition-colors"
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OutsourcingModels;
