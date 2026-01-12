"use client";

import Image from "next/image";
import { CaseStudy } from "@/data/CaseStudy";
import Button from "./Button";

interface Props {
  data: CaseStudy;
  onNext: () => void;
}

export default function CaseStudyCardMobile({ data, onNext }: Props) {
  return (
<div className="bg-[#16161A] border-2 border-[#2A2A34] rounded-2xl p-6">
  <h3 className="text-xl font-bold text-white mb-4">
    {data.title} with <span className="gradient-text">{data.brand}</span>
  </h3>

  <p className="text-gray-300 mb-6 text-sm">
    <span className="gradient-text font-semibold">Solution Delivered:</span>{" "}
    {data.solution}
  </p>

  <div className="flex gap-6 mb-6">
    {data.stats.map((stat, idx) => (
      <div key={idx}>
        <p className="text-2xl font-bold gradient-text">{stat.value}</p>
        <p className="text-xs text-gray-400">{stat.label}</p>
      </div>
    ))}
  </div>

  <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6">
    <Image
      src={data.imageDesktop}
      alt={data.brand}
      fill
      className="object-cover"
    />
  </div>

  {/* Next Case Study Button */}
    <Button
      text="Read full Case Study"
      icon="/icons/arrow-right.svg"
      size="medium"
      radius="full"
      href="#"

      className="inline-flex"
    />

</div>
  );
}