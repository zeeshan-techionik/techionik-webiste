"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

const filters = ["Frontend", "Backend", "Mobile Platforms", "Database"];

const techIcons = [

  { name: "Java", icon: "/icons/java.svg"},
  { name: "Go", icon: "/icons/go.svg" },
  { name: "Angular", icon: "/icons/angular.svg"},
  { name: "Vue", icon: "/icons/vuejs.svg"},
  { name: "Meteor", icon: "/icons/meteor.svg"},
  { name: "JavaScript", icon: "/icons/java-script.svg" },
  { name: ".NET", icon: "/icons/dot.svg" },
  { name: "Ember", icon: "/icons/dot.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "HTML5", icon: "/icons/html.svg"},
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "CSS3", icon: "/icons/css.svg"},
  { name: "C++", icon: "/icons/c++.svg"},
];


const firstRow = [...techIcons, ...techIcons];
const secondRow = [...techIcons.reverse(), ...techIcons.reverse()];

export default function TechStack() {
  const [active, setActive] = useState("Frontend");

  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              <span className="gradient-text">Technologies</span> We Use
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl">
              Languages, frameworks, platforms, and tools we use to engineer
              scalable, secure, and high-performance web solutions.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`px-4 py-2 rounded-full text-sm transition-all
                  ${active === item
                    ? " text-white bg-primary-dark"
                    : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl py-10
          bg-white/5 backdrop-blur-xl
          border border-orange-500/20
          shadow-[0_0_80px_rgba(230, 230, 230, 0.18)]"
        

        >
 
<div className="overflow-hidden">
  <div className="flex gap-6 w-max animate-scroll pause-on-hover">
    {firstRow.map((tech, idx) => (
      <div
        key={idx}
        className="relative flex items-center justify-center
        min-w-[150px] min-h-[140px]
        hover:border-orange-500/40 transition"
      >
        <Image
          src={tech?.icon ?? ""}
          alt={tech.name}
          fill
          className="cover object "
          loading="lazy"
        />
      </div>
    ))}
  </div>
</div>


          <div className="overflow-hidden mt-6">
            <div className="flex gap-6 w-max animate-scrollRight pause-on-hover">
              {secondRow.map((tech, idx) => (
                <div
                  key={idx}
                  className="relative flex items-center justify-center
        min-w-[150px] min-h-[140px]
        hover:border-orange-500/40 transition"
                >
             <Image
          src={tech?.icon ?? ""}
          alt={tech.name}
          fill
          className="cover object"
          loading="lazy"
        />
           
                </div>
              ))}
            </div>
          </div>


        </motion.div>
        <div className="flex justify-center mt-10">
          <Button
            text="View All Technologies"
            icon="/icons/arrow-right.svg"
            size="medium"
            radius="full"
            href="#"
            variant="glass"
            className="inline-flex w-full md:w-auto justify-center"
          />

        </div>
      </div>
    </section>
  );
}
