'use client';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../../Button";
import Image from "next/image";
import { serviceData } from "../../../../data/ServicesData";
import { ArrowLeft, ArrowRight } from "../../../arrow-icons";

const ServiceCard = () => {
  const allServices = [
    ...serviceData.slider.service1,
    ...serviceData.slider.service2,
    ...serviceData.slider.service3,
    ...serviceData.slider.service4,
  ];

  const [services, setServices] = useState(allServices);

  // Toggle one service at a time (accordion behavior)
  const handleToggle = (id: number) => {
    setServices(prev =>
      prev.map(service => ({    
        ...service,
        state: service.id === id ? !service.state : false,
      }))
    );
  };

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 4;
    const w = window.innerWidth;

    if (w >= 1280) return 4; // xl
    if (w >= 1024) return 3; // lg
    if (w >= 768) return 2;  // md
    if (w >= 640) return 2;  // sm
    return 1;                // below sm
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const visibleServices = services.slice(
    startIndex,
    startIndex + visibleCount
  );

  const handlePrev = () => {
    setStartIndex(prev =>
      prev === 0 ? services.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex(prev =>
      prev + visibleCount >= services.length ? 0 : prev + 1
    );
  };

  const swipeConfidenceThreshold = 80;

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -swipeConfidenceThreshold) {
      handleNext(); // swipe left
    } else if (info.offset.x > swipeConfidenceThreshold) {
      handlePrev(); // swipe right
    }
  };



  return (
    <>
     <div className="flex justify-between space-y-16">
      <div className="space-y-7">
        <h2>
          Our{" "}
          <span className="">
            Core{" "}
          </span> 
          Services
        </h2>
        <p className="body-2">
          We offer a range of comprehensive services, from custom application to product development, IT consulting, QA testing, and more.
        </p>
      </div>
      <Button 
        text="View All Services"
        icon="/icons/arrow-right.svg"
        size="medium"
        radius="full"
        href="#"
        className={`hidden md:inline-flex`}
        variant="glass"
      />

     </div>
    <motion.div
      className="flex gap-6 overflow-hidden"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
    >
      {visibleServices.map((service, index) => (
        <motion.div
          key={service.id}
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -40 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
  className={`header min-h-101 border-r pr-6
    ${service.state ? "max-w-124.25" : "max-w-80.25 flex flex-col justify-between"}
    ${index === visibleServices.length - 1 ? "border-r-transparent" : "border-r border-r-[#2A2A34]"}
  `}
        >
          <div className="flex flex-wrap items-center gap-2.5 pb-7 w-fit">
            <div className="w-12 h-12 border p-1.5 rounded-full flex items-center justify-center bg-[#26262B] border-[#26262B]">
              <Image
                src={service.icon}
                alt={service.title}
                width={28}
                height={28}
              />
            </div>
            <h3>{service.title}</h3>
          </div>

          {/* Animate content expand/collapse */}
          <AnimatePresence>
            {service.state && (
              <motion.div
                className="content pb-12"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <p className="caption wrap-break-word leading-7">
                  {service.description}
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 pl-2 leading-7">
                  {service.lists.map((item, idx) => (
                    <li key={idx} className="caption">{item}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="w-auto">
            {service.state ? (
              <Button
                text="Explore More"
                icon="/icons/arrow-right.svg"
                size="medium"
                radius="full"
                href="#"
                className={`hidden md:inline-flex`}
                variant="glass"
                iconRotate={45}
              />
            ) : (
              <Button
                icon="/icons/round-plus.svg"
                size="large"
                radius="full"
                href="#"
                className={`hidden md:inline-flex md:px-1 md:pr-2.5 md:justify-center md:flex-end`}
                variant="glass"
                onClick={() => handleToggle(service.id)}
              >
                {/* Animate the plus icon rotation */}
                <motion.span
                  animate={{ rotate: service.state ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/icons/round-plus.svg"
                    alt="toggle"
                    width={24}
                    height={24}
                  />
                </motion.span>
              </Button>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>

    <div className="slider space-x-4 flex justify-end">
            <button onClick={handlePrev} className="p-2 rounded-full border border-white cursor-pointer">
              <ArrowLeft className="w-6 h-6 " />
            </button>
            
            <button onClick={handleNext} className="p-2 rounded-full border border-gradient cursor-pointer">
              <ArrowRight className="w-6 h-6 " />
            </button>
      </div>
    </>
  );
};

export default ServiceCard;


// 'use client';
// import Button from "../../../Button";
// import { ArrowLeft, ArrowRight } from '../../../arrow-icons';
// import Image from "next/image";

// const ServiceCard = () => {
//   const handleToggle = () => {
//     // write code to change false into true and true into false
//   };

//   return (
//     <>
//       <section className="">
//         <div
//           className={`header min-h-101 border-r border-r-[#2A2A34] pr-6 ${
//             true ? "max-w-104.25" : "w-fit flex flex-col justify-between"
//           }`}
//         >
//           <div className="flex items-center gap-2.5 pb-7 w-fit">
//             <div className="w-12 h-12 border p-1.5 rounded-full flex items-center justify-center bg-[#26262B] border-[#26262B]">
//               <Image
//                 src="/icons/cloud.svg"
//                 alt="Cloud Services"
//                 width={28}
//                 height={28}
//               />
//             </div>
//             <h3>Cloud Services</h3>
//           </div>

//           <div className={`content pb-12 ${true ? "visible" : "hidden"}`}>
//             <p className="caption wrap-break-word leading-7">
//               Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.
//             </p>
//             <ul className="list-disc list-inside mt-4 space-y-2 pl-2 leading-7">
//               <li className="caption">Cloud Consulting</li>
//               <li className="caption">Cloud Application Development</li>
//               <li className="caption">Cloud Security Consulting</li>
//               <li className="caption">Configuration Management</li>
//               <li className="caption">Cloud Migration</li>
//               <li className="caption">Cloud Infrastructure Management</li>
//             </ul>
//           </div>

//           <div className="w-auto">
//             {true ? (
//               <Button
//                 text="Explore More"
//                 icon="/icons/arrow-right.svg"
//                 size="medium"
//                 radius="full"
//                 href="#"
//                 className={`hidden md:inline-flex`}
//                 variant="glass"
//                 iconRotate={45}
//               />
//             ) : (
//               <Button
//                 // text="Explore More"
//                 icon="/icons/round-plus.svg"
//                 size="large"
//                 radius="full"
//                 href="#"
//                 className={`hidden md:inline-flex md:px-1 md:pr-2.5 md:justify-center md:flex-end`}
//                 variant="glass"
//                 onClick={handleToggle}
//               />
//             )}
//           </div>
//         </div>
//         <div className="slider space-x-4 flex justify-end">
//             <button className="p-2 rounded-full border border-white cursor-pointer">
//               <ArrowLeft className="w-6 h-6 " />
//             </button>
            
//             <button className="p-2 rounded-full border border-gradient cursor-pointer">
//               <ArrowRight className="w-6 h-6 " />
//             </button>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServiceCard;
