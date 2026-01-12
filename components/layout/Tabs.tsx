"use client";
import { useState } from "react";
import  WhyChoiceUs from "@/views/home/tabs/whyChoseUs";
export default function Tabs() {
  const [activeTab, setActiveTab] = useState("highlights");

  return (
    <div className=" mx-auto w-full">
      {/* Tab Buttons */}
      <div className="flex overflow-x-auto border-b border-gray-700 bg-surface  tabs-scrollbar  max-w-[3840px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 flex ">
        <button
          className={`py-3  text-sm font-semibold flex-shrink-0 ${
            activeTab === "highlights"
              ? "bg-[#26262B] text-orange-500"
              : "text-gray-300 hover:text-white"
          }`}
          onClick={() => setActiveTab("highlights")}>
          Why Choose Us
        </button>
        
           <button
          className={`py-3 px-6 text-sm font-semibold flex-shrink-0 ${
            activeTab === "Technologies"
              ? "bg-[#26262B] text-orange-500"
              : "text-gray-300 hover:text-white"
          }`}
          onClick={() => setActiveTab("Technologies")}
        >
        Technologies
        </button>
           <button
          className={`py-3 px-6 text-sm font-semibold flex-shrink-0 ${
            activeTab === "Workflow"
              ? "bg-[#26262B] text-orange-500"
              : "text-gray-300 hover:text-white"
          }`}
          onClick={() => setActiveTab("Workflow")}
        >
      Workflow
        </button>
           <button
          className={`py-3 px-6 text-sm font-semibold flex-shrink-0 ${
            activeTab === "Industries"
              ? "bg-[#26262B] text-orange-500"
              : "text-gray-300 hover:text-white"
          }`}
          onClick={() => setActiveTab("Industries")}
        >
         Industries
        </button>
           <button
          className={`py-3 px-6 text-sm font-semibold flex-shrink-0 ${
            activeTab === "Solutions"
              ? "bg-[#26262B] text-orange-500"
              : "text-gray-300 hover:text-white"
          }`}
          onClick={() => setActiveTab("Solutions")}
        >
         Solutions
        </button>
           <button
          className={`py-3 px-6 text-sm font-semibold flex-shrink-0 ${
            activeTab === "Outsourcing Models"
              ? "bg-[#26262B] text-orange-500"
              : "text-gray-300 hover:text-white"
          }`}
          onClick={() => setActiveTab("Outsourcing Models")}
        >
       Outsourcing Models
        </button>
           <button
          className={`py-3 px-6 text-sm font-semibold flex-shrink-0 ${
            activeTab === "Case Study"
              ? "bg-[#26262B] text-orange-500"
              : "text-gray-300 hover:text-white"
          }`}
          onClick={() => setActiveTab("Case Study")}
        >
        Case Study
        </button>
           <button
          className={`py-3 px-6 text-sm font-semibold flex-shrink-0 ${
            activeTab === "Outsourcing Models"
              ? "bg-[#26262B] text-orange-500"
              : "text-gray-300 hover:text-white"
          }`}
          onClick={() => setActiveTab("Outsourcing Models")}
        >
          Outsourcing Models
        </button>
           <button
          className={`py-3 px-6 text-sm font-semibold flex-shrink-0 ${
            activeTab === "Case Study"
              ? "bg-[#26262B] text-orange-500"
              : "text-gray-300 hover:text-white"
          }`}
          onClick={() => setActiveTab("Case Study")}
        >
         Case Study
        </button>
           <button
          className={`py-3 px-6 text-sm font-semibold flex-shrink-0 ${
            activeTab === "Solutions"
              ? "bg-[#26262B] text-orange-500"
              : "text-gray-300 hover:text-white"
          }`}
          onClick={() => setActiveTab("Solutions")}
        >
      Solutions
        </button>
           <button
          className={`py-3 px-6 text-sm font-semibold flex-shrink-0 ${
            activeTab === "Solutions"
              ? "bg-[#26262B] text-orange-500"
              : "text-gray-300 hover:text-white"
          }`}
          onClick={() => setActiveTab("Solutions")}
        >
       Solutions
        </button>

        
      </div>

      {/* Tab Content */}
      <div>
        {/* {activeTab === "highlights" && <WhyChoiceUs />}
        {activeTab === "certifications" && <Certifications />} */}
      </div>
    </div>
  );
}

// ----------------- Certifications -----------------
function Certifications() {
  const certs = [
    { name: "ISO 9001:2015", logo: "/icons/iso9001.png" },
    { name: "ISO 14001:2015", logo: "/icons/iso14001.png" },
    { name: "BAFE SP101", logo: "/icons/bafe.png" },
    { name: "SSIP", logo: "/icons/ssip.png" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center">
      {certs.map((cert, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <img src={cert.logo} alt={cert.name} className="w-20 h-20 mb-2" />
          <div className="text-gray-400 text-center text-sm">{cert.name}</div>
        </div>
      ))}
    </div>
  );
}
