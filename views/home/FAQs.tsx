"use client";
import { useState } from "react";
import { faqs, FAQ } from "@/data/FAQS";
import { motion, AnimatePresence } from "framer-motion";

const FAQComponent = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      <h2 >
        Software Development <span className="text-orange-500">FAQs</span>
      </h2>
      <p className="text-gray-400 mb-10 ">
        Find quick answers to the most common questions about our services and solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq: FAQ) => (
          <div
            key={faq.id}
            className="bg-[#16161A] border border-[#2A2A34] rounded-xl shadow-[0_4px_20px_0px_#00000040] p-5 cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(faq.id)}
            >
              <h3>{faq.id}. {faq.question}</h3>
              <span className="text-orange-500 font-bold text-xl">
                {openFAQ === faq.id ? "−" : "+"}
              </span>
            </div>

            <AnimatePresence>
              {openFAQ === faq.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 body-2"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
