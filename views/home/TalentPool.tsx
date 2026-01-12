"use client";

import Card from "@/components/TalentCard";
import SliderDots from "@/components/Slider";
import { useSlider } from "@/components/hooks/Slider";
import Button from "@/components/Button";

const TalentPool = () => {
  const { emblaRef, emblaApi, index } = useSlider();

  const teamData = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "UI/UX Designer",
      title: "UI/UX Design Services",
      image: "/images/home/ali-haider.webp",
      stack: ["Figma", "Adobe XD", "Sketch", "InVision", "Marvel", "Axure RP"]
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "Senior Full Stack Developer",
      title: "Software Development Outsourcing",
      image: "/images/home/ali-haider.webp",
      stack: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker"]
    },
    {
      id: 3,
      name: "David Rodriguez",
      designation: "DevOps Engineer",
      title: "Cloud Infrastructure Services",
      image: "/images/home/ali-haider.webp",
      stack: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Ansible", "Linux"]
    },
    {
      id: 4,
      name: "Emma Wilson",
      designation: "Mobile App Developer",
      title: "Dedicated Development Team",
      image: "/images/home/ali-haider.webp",
      stack: ["React Native", "Flutter", "iOS", "Android", "Firebase", "GraphQL"]
    },
    {
      id: 5,
      name: "Emma Wilson",
      designation: "Mobile App Developer",
      title: "Dedicated Development Team",
      image: "/images/home/ali-haider.webp",
      stack: ["React Native", "Flutter", "iOS", "Android", "Firebase", "GraphQL"]
    }
  ];

  return (
    <section >
      <div >
        {/* Header */}
        <div className=" mx-auto mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
            <div className="flex flex-col md:flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Our Network of <span className="gradient-text">Talent</span> Pool
              </h2>
              <p className="text-gray-400 mt-2 max-w-xl text-sm sm:text-base">
                At TECHIONIK, we have a diverse talent network comprising skilled developers, designers, project managers, and product managers, ensuring comprehensive expertise for your project's success.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Button
                text="Hire Developers Now"
                icon="/icons/arrow-right.svg"
                size="medium"
                radius="full"

                href="#"
                variant="glass"
                className="inline-flex w-full md:w-auto justify-center"
              />

            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 md:gap-8">
            {teamData.map((slide, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] lg:flex-[0_0_25%]"
              >
                <Card
                  name={slide.name}
                  designation={slide.designation}
                  title={slide.title}
                  image={slide.image}
                  active={index === i}
                  stack={slide.stack}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6">
          <SliderDots
            count={teamData.length}
            activeIndex={index}
            onDotClick={(i) => emblaApi?.scrollTo(i)}
          />
        </div>
      </div>
    </section>
  );
};

export default TalentPool;
