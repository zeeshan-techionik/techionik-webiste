"use client";

import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { IdeaBannerData } from "../../data/IdeaBanner";

interface IdeaBannerProps {
  content: IdeaBannerData;
}

const IdeaBanner: React.FC<IdeaBannerProps> = ({ content }) => {
  return (
    <div
      aria-label="Got an idea or concerns? Call to action"
      className="relative mx-auto my-24 h-[331px] md:h-[400px] lg:h-[450px] flex items-center justify-center px-4 md:px-16 lg:px-32 bg-[#16161A] shadow-[0_4px_20px_0_#00000040] rounded-2xl overflow-hidden py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src={content.backgroundImage}
          alt="Idea Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        <h2 className="text-white text-2xl md:text-3xl font-semibold">
          {content.title.split(content.highlight || "").map((part, idx, arr) => (
            <React.Fragment key={idx}>
              {part}
              {idx < arr.length - 1 && (
                <span className="font-bold">{content.highlight}</span>
              )}
            </React.Fragment>
          ))}
        </h2>

        <Button
          text={content.ctaText}
          icon={content.buttonIcon || "/icons/arrow-right.svg"}
          size="medium"
          radius="full"
          href={content.ctaLink}
          variant={content.buttonVariant || "glass"}
          className="inline-flex w-full md:w-auto justify-center"
        />
      </div>
    </div>
  );
};

export default IdeaBanner;
