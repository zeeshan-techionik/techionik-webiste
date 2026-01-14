"use client";
import React from "react";
import Card from "@/components/TalentCard";
import { useSlider } from "@/components/hooks/Slider";
import Button from "@/components/Button";
import { talentPoolData } from "../../data/TalentPollData";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Using for nav buttons

const TalentPool = () => {
  const { emblaRef, emblaApi, index } = useSlider();

  return (
    <section className="bg-black py-20 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Row 1: Title and Button in same row --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {talentPoolData.title}{" "}
            <span className="text-[#FF6B35] underline decoration-blue-500 underline-offset-8">
              {talentPoolData.highlightedText}
            </span>
          </h2>

          <Button
            text={talentPoolData.ctaText}
            icon="/icons/arrow-right.svg"
            size="medium"
            radius="full"
            href={talentPoolData.ctaLink}
            variant="gradient"
            className="hidden md:inline-flex"
          />
        </div>

        {/* --- Header Row 2: Description below Title --- */}
        <div className="mb-12">
          <p className="text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed">
            {talentPoolData.description}
          </p>
          {/* Mobile Button */}
          <Button
            text={talentPoolData.ctaText}
            icon="/icons/arrow-right.svg"
            size="medium"
            radius="full"
            href={talentPoolData.ctaLink}
            variant="gradient"
            className="inline-flex md:hidden mt-6"
          />
        </div>

        {/* --- Slider Section --- */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {talentPoolData.team.map((member, i) => (
              <div
                key={i}
                // Setting card slide width to maintain alignment
                className="flex-[0_0_100%] sm:flex-[0_0_45%] lg:flex-[0_0_31%]"
              >
                <Card
                  title={member.name}
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                  stack={member.stack}
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- Bottom Navigation: Dots and Arrows --- */}
        {/* --- Bottom Navigation: Arrows Only --- */}
        <div className="flex justify-end mt-12">
          <div className="flex gap-4">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="p-3 rounded-full border border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35]/10 transition"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentPool;
