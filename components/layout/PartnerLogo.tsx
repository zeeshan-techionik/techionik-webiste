"use client";

import React from "react";
import Image from "next/image";
import { Partner } from "@/data/partners";

interface PartnerLogosProps {
  partners: Partner[];
  className?: string;
}

const PartnerLogos: React.FC<PartnerLogosProps> = ({ partners, className = "" }) => {
  return (
    <div className={`relative overflow-hidden w-full h-16 flex items-center ${className}`}>
      <div className="flex gap-6 animate-partner-scroll">
        {partners.map((partner) => (
          <Image
            key={partner.id}
            src={partner.logo}
            alt={partner.name}
            width={80}
            height={40}
            className="h-8 sm:h-10 w-auto object-contain"
          />
        ))}
      </div>

      {/* Component-specific scoped CSS */}
      <style jsx>{`
        .animate-partner-scroll {
          display: flex;
          gap: 1.5rem;
          animation: partner-scroll 18s linear infinite;
        }

        @keyframes partner-scroll {
          0% {
            transform: translateX(50%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default PartnerLogos;
