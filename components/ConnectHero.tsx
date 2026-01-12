"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { ContactHeroData } from "../data/ConnectHero";
import { MdOutlinePayments } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";

interface ContactHeroProps {
  content: ContactHeroData;
}

const ContactHero: React.FC<any> = ({ content }) => {
  return (
    <div className="relative min-h-[530px] mx-auto">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full rounded-2xl overflow-hidden">
        <Image
          src={content.backgroundImage}
          alt={content.title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>


      <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-8 lg:p-12 text-center space-y-6 md:space-y-8 z-10 min-h-[530px]">
        <h2>
          {content.title.split(content.highlight || "").map((part, idx, arr) => (
            <React.Fragment key={idx}>
              {part}
              {idx < arr.length - 1 && (
                <span className="gradient-text">{content.highlight}</span>
              )}
            </React.Fragment>
          ))}
        </h2>

        <p className="body-1 leading-relaxed max-w-[600px]">{content.description}</p>
  
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
      
          <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-full">
            <div className="w-5 h-5 sm:w-6 sm:h-6  flex items-center justify-center flex-shrink-0">
        <MdOutlinePayments  color="#F05323" height={2000} width={200} className="h-[48px] w-[48px]"  />
            </div>
            <span className="text-black font-semibold text-base sm:text-lg">100% Safe Payment</span>
          </div>
          
      
          <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-full">
            <div className="w-10 h-10 sm:w-6 sm:h-6   flex items-center justify-center flex-shrink-0" >
          <HiOutlineUserGroup color="#F05323" height={2000} width={200} className="h-[48px] w-[48px]"  />
            </div>
            <span className="text-black font-semibold text-base sm:text-lg">1k+ People Trust Us</span>
          </div>
        </div>

        <Button
          text={content.buttonText}
          icon={content.buttonIcon || "/icons/arrow-right.svg"}
          size="medium"
          radius="full"
          href={content.buttonLink}
          variant={ "glass"}
          className="inline-flex w-full md:w-auto justify-center"
        />
      </div>
    </div>
  );
};

export default ContactHero;
