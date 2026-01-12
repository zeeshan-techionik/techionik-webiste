import Image from "next/image";
import { useState } from "react";

type CardProps = {
  title: string;
  image: string;
  active?: boolean;
  name?: string;
  designation?: string;
  stack?: string[];
};

const Card = ({ title, image, active, name, designation, stack }: CardProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div
      className={`
        relative rounded-2xl p-4
        bg-gradient-to-b from-[#1A1A1A] to-[#0E0E0E]
        transition-all duration-300 max-h-[571px] max-w-[400px] mx-auto
        ${active ? "ring-1 ring-orange-500" : "ring-1 ring-white/10"}
      `}
    >
      {/* Image */}
      <div className="rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={280}
          loading="lazy"
          className="w-full h-[220px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2 text-center">
        <h3 className="align-center">{name || title}</h3>
        {designation && <p className="text-gray-400 text-sm color-primary">{designation}</p>}

        {/* Stack Buttons */}
     <div className="flex flex-wrap gap-4 mt-4 text text-center justify-center">
  {stack?.map((tech, index) => (
    <div
      key={index}
      className="flex items-center justify-center bg-surface w-24 h-10 rounded-[28px] text-sm font-medium text-white"
      style={{
        transform: "rotate(0deg)",
        opacity: 1,
      }}
    >
      {tech}
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Card;
