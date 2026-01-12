"use client";

import { useEffect, useState } from "react";
import CaseStudyCard from "@/components/CaseStudyCard";
import CaseStudyCardMobile from "@/components/CaseStudyCardMobile";
import Button from "@/components/Button";

export type CaseStudyType = {
  id: number;
  title: string;
  description: string;
  image?: string;
  category?: string;
};

type CaseStudiesProps = {
  caseStudies: CaseStudyType[];
};

const CaseStudies: React.FC<CaseStudiesProps> = ({ caseStudies }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || !caseStudies.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === caseStudies.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, caseStudies.length]);

  if (!caseStudies.length) return null; // handle empty array

  return (
    <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-24">

      {/* HEADER */}
      <div className="max-w-8xl mx-auto mb-12 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex flex-col md:flex-1">
          <h2 className="text-4xl font-bold text-white">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-8xl">
            Discover how we transform challenges into success.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <Button
            text="View All Case Studies"
            icon="/icons/arrow-right.svg"
            size="medium"
            radius="full"
            href="#"
            variant="glass"
            className="inline-flex w-full md:w-auto justify-center"
          />
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden max-w-md mx-auto">
        <CaseStudyCardMobile
          data={caseStudies[activeIndex]}
          onNext={() =>
            setActiveIndex((prev) =>
              prev === caseStudies.length - 1 ? 0 : prev + 1
            )
          }
        />
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block relative max-w-8xl mx-auto h-[650px] hover:cursor-grab overflow-hidden py-20">
        {caseStudies.map((item, index) => (
          <CaseStudyCard
            key={item.id}
            data={item}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
