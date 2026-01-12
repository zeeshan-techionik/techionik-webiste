"use client";

import Card from "@/components/card";
import SliderDots from "@/components/Slider";
import { useSlider } from "@/components/hooks/Slider";
import { OutsourcingSlide } from "../data/outSourceModel";
import { log } from "console";

interface OutsourcingModelsProps {
  outsourcingModelsData: OutsourcingSlide;
}

const OutsourcingModels: React.FC<OutsourcingModelsProps> = ({ outsourcingModelsData }) => {
  const { emblaRef, emblaApi, index } = useSlider();

  return (
    <div className="py-24">
      <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 space-y-16">

              <div className="max-w-xl mb-16">
          <h2>
        {outsourcingModelsData?.title} <span className="gradient-text">{outsourcingModelsData?.MiddleTitle}</span> {outsourcingModelsData?.lastTitle}
          </h2>
          <p className="mt-4 text-gray-400 body-2">
            {outsourcingModelsData?.description}
          </p>
        </div>


        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {outsourcingModelsData?.slides.map((slide:any, i:any) => (
              <div
                key={i}
                className="flex-[0_0_100%] xl:flex-[0_0_33.33%] md:flex-[0_0_50%] px-4 gradient-border-border"
              >
                <Card
                  title={slide.title}
                  image={slide.image}
                  active={index === i}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <SliderDots
          count={outsourcingModelsData?.slides?.length??0}
          activeIndex={index}
          onDotClick={(i) => emblaApi?.scrollTo(i)}
        />
      </div>
    </div>
  );
};

export default OutsourcingModels;
