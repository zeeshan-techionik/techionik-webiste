import Image from "next/image";
import Button from "@/components/Button"; // Import your existing Button component
type CardProps = {
  title: string;
  image: string;
  active?: boolean;
  name?: string;
  designation?: string;
  stack?: string[];
};

const Card = ({ image, active, name, designation, stack }: CardProps) => {
  return (
    <div
      className={`
        relative rounded-[32px] p-8
        bg-[#111113] border
        transition-all duration-300 min-h-[571px] w-[400px] mx-auto
        flex flex-col items-center
        ${active ? "border-orange-500" : "border-white/5"}
      `}
    >
      {/* Rectangular Image Container - Matches 330x219 ratio */}
      <div className="w-full max-w-[330px] h-[219px] rounded-2xl overflow-hidden mb-6">
        <Image
          src={image}
          alt={name || "Talent"}
          width={330}
          height={219}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name and Designation */}
      <div className="text-center mb-6">
        <h3 className="text-primary-dark text-3xl font-bold tracking-tight leading-tight">
          {name}
          {/* {name?.split(" ")[0]}{" "}
          <span className="text-gray-400 font-semibold">
            {name?.split(" ")[1]}
          </span> */}
        </h3>
        <p className="text-[var(--color-primary-dark)] text-lg font-medium mt-2">
          {designation}
        </p>
      </div>

      {/* Skill Stack Tags */}
      <div className="flex flex-wrap gap-2 justify-center mb-8 px-2">
        {stack?.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-[#1C1C1E] px-4 py-2 rounded-full text-xs font-medium text-[var(--color-text)] border border-white/5"
          >
            {tech}
          </div>
        ))}
      </div>

      {/* Hire Now Button - Aligned to bottom */}
      <div className="mt-auto">
        <Button
          text="Hire Now"
          icon="/icons/arrow-right.svg"
          size="medium"
          radius="full"
          variant="glass"
          className="px-6 inline-flex items-center gap-2"
        />
      </div>
    </div>
  );
};

export default Card;
