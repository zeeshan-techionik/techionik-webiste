import OutSourceModels from "@/components/OutSourceModel";
import TechServices from "@/views/home/TechServices";
// import AboutSection from "@/components/sections/home/hero/AboutSection";
import ServicesHero from "@/components/sections/home/hero/ServiceHero";
import TalentPool from "@/views/home/TalentPool";
import CTASection from "@/components/CTAComponent";
import { servicesData } from "@/data/TechServices";
import { ServiceHeroData } from "@/data/ServiceHeroData";
import OurClientSays from "@/components/OurClientSays";

const OurParentServices = () => {
  return (
    <main className="overflow-x-hidden scroll-smooth">
      <section id="hero">
        <ServicesHero slides={ServiceHeroData} />
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
      <section id="CTASection">
        <CTASection />
      </section>
      <section id="talent-pool">
        <TalentPool />
      </section>
      <section id="ourclient-says">
        <OurClientSays />
      </section>
    </main>
  );
};

export default OurParentServices;
