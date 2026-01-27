"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Button from "@/components/Button";
import { useSlider } from "@/components/hooks/Slider"; // Ensure this hook is correctly imported
import { ourClientSaysData } from "../data/OurClientSaysData";

const OurClientSays = () => {
  // Initialize slider logic to handle the right and left arrow clicks
  const { emblaRef, emblaApi } = useSlider();

  return (
    <section className="bg-black py-24 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Fix: Added min-width and flex-shrink-0 to prevent button cutting */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-muted)] mb-4">
              {ourClientSaysData.title}{" "}
              <span className="gradient-text">
                {ourClientSaysData.highlightedText}
              </span>{" "}
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              {ourClientSaysData.description}
            </p>
          </div>

          <div className="flex-shrink-0">
            <Button
              text={ourClientSaysData.ctaText}
              icon="/icons/arrow-right.svg"
              size="medium"
              radius="full"
              href={ourClientSaysData.ctaLink}
              variant="glass"
              className="inline-flex items-center"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Testimonial Slider Area */}
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {ourClientSaysData.testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_100%] min-w-0 px-2"
                  >
                    <div className="bg-[var(--color-secondary-dark)] rounded-[32px] p-8 md:p-12 border border-white/15 relative h-full">
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <h3 className="text-[var(--color-text)] text-2xl md:text-3xl font-bold mb-2">
                            {testimonial.name}
                          </h3>
                          <p className="text-[var(--color-primary-light)] text-sm font-medium">
                            {testimonial.position} at {testimonial.company}
                          </p>
                        </div>
                        <div className="relative w-16 h-16 rounded-full border-2 border-[var(--color-primary-light)] overflow-hidden flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed mb-8">
                        "{testimonial.content}"
                      </p>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className="fill-[#C19800] text-[#C19800]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fix: Linked emblaApi calls to handle slider movement on click */}
            <div className="flex gap-4">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="p-3 rounded-full border border-white/20 text-[var(--color-text)] hover:border-[var(--color-primary)] transition-all"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="p-3 rounded-full border border-[var(--color-primary)] text-primary transition-all"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>

          {/* Globe/Avatar Visualization */}
          <div className="relative w-full h-[500px] lg:h-[600px] mx-auto gap-20 hidden lg:block overflow-visible">
            {/* The Background Globe Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/ParentServices/OurCustomerSaysMedia/bg_OurCutsomersays.png"
                alt="Globe Background"
                fill
                className="object-contain object-center scale-100 lg:scale-140 translate-y-0"
                priority
              />
            </div>
            {ourClientSaysData.globeIcons.map((icon) => (
              <div
                key={icon.id}
                className="absolute w-14 h-14 rounded-full border-2 overflow-hidden bg-black"
                style={{
                  top: icon.top,
                  left: icon.left,
                  borderColor: icon.borderColor,
                }}
              >
                <Image
                  src={icon.image}
                  alt="Client"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClientSays;
