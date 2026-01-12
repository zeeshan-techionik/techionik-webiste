
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
        <HeroSection slides={heroHomeData} />
      </section>

     

    </main>

  );
}
