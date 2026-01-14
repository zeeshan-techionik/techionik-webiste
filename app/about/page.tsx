import PartnerLogos from "@/components/layout/PartnerLogo";
import AboutSection from "@/components/sections/home/hero/AboutSection";
import { AboutUsData } from "@/data/AboutSectionData";
import { industriesData } from "@/data/IndustriesSection";
import { partners } from "@/data/partners";
import TechServices from "@/views/home/TechServices";
import IndustriesSection from "@/views/home/IndustriesSection";
import TechStack from "@/views/home/TechStacks";
import { servicesData } from "@/data/TechServices"; 
// import Journey from "@/components/Jounery";
import { teamSections } from "@/data/TeamData";
import TeamCard from "@/components/TeamCards";
// import { GiJourney } from "react-icons/gi";


export default function AboutPage() {
  return (
      <main className="overflow-x-hidden scroll-smooth">
        
            <section id="about">
                <AboutSection slides={AboutUsData} />
            </section>
            <section id="logos">
                <PartnerLogos partners={partners} className="" />
            </section>
            {/* <section id="journey">
                <GiJourney />
            </section> */}
            <section className="bg-black py-20 px-4 md:px-20 flex flex-col gap-20">
                <TeamCard sections={teamSections} className="mx-auto" />
            </section>
               
            <section id="tech-services" className="max-w-7xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20">
                <TechServices  servicesData={servicesData} />
            </section>
            <section id="tech-stack">
                <TechStack />
            </section>
            <section id="industrial">
                <IndustriesSection industries= {industriesData}/>
            </section>
            
            
        
      </main> 
    );
}
