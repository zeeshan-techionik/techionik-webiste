import { heroHomeData } from "@/data/HeroSectionData";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import FooterSection from "@/components/sections/home/footer-content/FooterContent";
import OutSourceModels from "@/components/OutSourceModel";
import TechServices from "@/views/home/TechServices";
import { servicesData } from "@/data/TechServices";

const OurParentServices = () => {
  return (
    <main className="overflow-x-hidden scroll-smooth">
      <section id="hero">
        <HeroSection slides={heroHomeData} />
      </section>
      <section id="outsourcingmodel">
        <OutSourceModels />
      </section>
      <section
        id="tech-services"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20"
      >
        <TechServices servicesData={servicesData} />
      </section>
      {/* <section id="footer">
        <FooterSection />
      </section> */}
    </main>
  );
};

export default OurParentServices;
