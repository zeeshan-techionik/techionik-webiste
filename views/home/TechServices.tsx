"use client";

import Button from "@/components/Button";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



const TechServices: React.FC<any> = ({servicesData}) => {
  const [selectedService, setSelectedService] = useState<any>(servicesData?.services?.[0]);

  return (
    <section className="mx-auto  bg-black/50">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 md:mb-12 gap-4 md:gap-0">
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {servicesData?.gradiantText} <span className="gradient-text">{servicesData?.afterGradientText}</span>
          </h2>
          <p className="text-gray-400 mt-4">
        {servicesData?.description??""}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
          {servicesData?.services.map((service:any) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all ${
                selectedService.id === service.id
                  ? "bg-orange-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>

      {/* Service Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedService.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-secondary rounded-2xl p-6 md:p-8 lg:p-12 flex flex-col md:flex-row gap-6 md:gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            key={selectedService.id + "-img"}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden"
          >
            <Image
              src={selectedService?.image??""}
              alt={selectedService.title}
              width={500}
              height={300}
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Content */}
          <motion.div
            key={selectedService.id + "-content"}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-white flex flex-col justify-between gap-4"
          >
            <h3 className="text-2xl md:text-3xl font-semibold">{selectedService.title}</h3>
            <p className="text-gray-300 leading-relaxed">{selectedService.description}</p>
            <div className="flex justify-center md:justify-start mt-4">
  
               <Button
            text={`${selectedService.ctaText}`}
              icon="/icons/arrow-right.svg"
              size="medium"
              radius="full"
          
              href="#"
         variant="glass"
         className="hidden md:inline-flex"
            />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default TechServices;
