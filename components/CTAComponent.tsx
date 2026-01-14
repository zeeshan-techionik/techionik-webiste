// src/components/CTASection.tsx
import React from "react";
import { CTAactionData } from "@/data/CTAactionData";
import Button from "@/components/Button";

const CTASection = () => {
  return (
    <section className="bg-black  py-24 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden font-sans">
      {/* Container with the subtle orange top-right border effect */}
      <div className="relative max-w-8xl bg-primary rounded-[40px] p-12 md:p-24 border border-white/10 overflow-hidden flex flex-col items-center text-center">
        {/* Subtle Orange Border Corner - Top Right */}
        {/* <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 right-0 w-162 h-[1px] bg-[#FF6B35]/50" />
          <div className="absolute top-0 right-0 w-[1px] h-62 bg-[#FF6B35]/50" />
        </div> */}

        {/* Content */}
        <div className="relative z-10 w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--color-muted)] mb-8 leading-tight">
            {CTAactionData.title}{" "}
            <span className="gradient-text">
              {CTAactionData.highlightedText}
            </span>
          </h1>

          <p className="text-[var(--color-muted)] text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            {CTAactionData.description}
          </p>

          {/* Pill Button */}
          {CTAactionData.ctaText && (
            <div className="py-6 delay-400">
              <Button
                text={CTAactionData.ctaText}
                icon="/icons/arrow-right.svg"
                size="medium"
                radius="full"
                href={CTAactionData.ctaLink || "#"}
                variant="gradient"
                className="inline-flex w-full md:w-auto justify-center"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
