
import Tabs from "@/components/layout/Tabs";
import FooterContact from "@/components/sections/home/footer-content/FooterContent";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import OutsourcingModels from "@/components/OutSourceModel";
import CoreServices from "@/components/CoreServices";
import CaseStudies from "@/views/home/CaseStudies";
import ContactHero from "@/components/ConnectHero";
import FAQComponent from "@/views/home/FAQs";
import IndustriesSection from "@/views/home/IndustriesSection";
import AiSection from "@/views/home/AiAndMl";
import OurClients from "@/views/home/OurClients";
import WhyChoiceUs from "@/views/home/tabs/whyChoseUs";
import IdeaBanner from "@/views/home/IdeaBanner";
import TechServices from "@/views/home/TechServices";
import TechStack from "@/views/home/TechStacks";
import TalentPool from "@/views/home/TalentPool";
import AllBlogs from "@/views/home/AllBlogs";
import {heroHomeData} from "../data/HeroSectionData"; 
import {outsourcingModelsData} from "../data/outSourceModel";
import {ideaBannerContent} from "../data/IdeaBanner";
import {contactHeroContent} from "../data/ConnectHero";
import { servicesData } from "@/data/TechServices"; 
import {caseStudies} from "@/data/CaseStudy"
import {industriesData,CoreServicesData} from  "@/data/IndustriesSection"

export default function Home() {
  
  return (

  <main className="overflow-x-hidden scroll-smooth">
      
      <section id="hero">
        <HeroSection slides={heroHomeData}  />
      </section>

      <section id="why-choose-us" className="mx-auto  ">
        <WhyChoiceUs />
      </section>

      <section id="outsourcing-models">
        <OutsourcingModels outsourcingModelsData={outsourcingModelsData} />
      </section>
      
      <section id="idea-banner" className="bg-primary max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 space-y-16">
        <IdeaBanner content={ideaBannerContent} />
      </section>
   <section id="core-Service-Home">
        <CoreServices   Services= {CoreServicesData as any} />
      </section>


      <section id="contact-hero  " className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20 ">
        <ContactHero content={contactHeroContent} />
      </section>

     
      <section id="tech-services" className="max-w-7xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20">
        <TechServices  servicesData={servicesData} />
      </section>
      <section id="case-studies" className="py-20">
         <CaseStudies caseStudies={caseStudies as any[]} />
      </section>

      <section id="industries">
        <IndustriesSection   industries= {industriesData as any} />
      </section>
      
    <section id="TechStack">
        <TechStack />
      </section>
          <section id="TalentPool" className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20">
        <TalentPool  />
      </section>
     <section id="AllBlogs">
        <AllBlogs />
      </section>
      <section id="our-clients" className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20">
        <OurClients />
      </section>

      <section id="faqs">
        <FAQComponent />
      </section>

      <section id="ai-section">
        <AiSection />
      </section>

      <section id="footer">
        <FooterContact />
      </section>

    </main>

  );
}
