"use client";

import Image from "next/image";
import Button from "@/components/Button";
export default function AiSection() {
  return (
    <section className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 flex justify-center py-16 px-4">

      <div className="relative w-full  min-h-[642px] rounded-[24px] overflow-hidden bg-black">


        <div
          className="absolute inset-0 p-[1px] rounded-[24px]"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(22,22,26,0), #F05323, rgba(22,22,26,0))",
          }}
        >

          <div
            className="relative z-10 w-full min-h-[642px] rounded-[24px] backdrop-blur-[40px] bg-black/90"
          >

            <div className="flex flex-col lg:flex-row w-full min-h-[642px]">


              <div className="relative w-full lg:w-[653px] h-[642px] flex items-center justify-center overflow-hidden">


                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/banners/smart-automation.webp"
                    alt="Smart Automation"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 653px"
                  />
                </div>


                <div className="relative z-10 flex items-center justify-center w-full h-full px-6">
                  <div className="text-center max-w-md space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      Smart Automation keeps your systems powerful, not complicated
                    </h2>

                    <p className="text-white/80 text-base md:text-lg">
                      Book a quick call and get a clear look at how Whenevr works,
                      what's included, and whether it fits your pace.
                    </p>

                    <Button
                      text="Let's Talk"
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


              <div className="flex-1 flex items-start justify-end pt-[88px] pr-[67px]">


                <div
                  className="relative w-[318px] h-[406px] rounded-full p-8 backdrop-blur-xl border"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(22,22,26,0.4), rgba(40,40,46,0.6))",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <Image
                    src="/banners/Calendar.webp"
                    alt="Calendar"
                    fill
                    className="object-contain p-4"
                    sizes="318px"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}