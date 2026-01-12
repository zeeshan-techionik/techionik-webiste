export type ServiceType = {
  id?: number;
  title: string;
  description: string;
gradiantText: string;
afterGradientText: string;
  image?: string;
  services?: any[];
};

export const servicesData: ServiceType = {
title: "Emerging",
gradiantText: "Innovation &",
afterGradientText: "Disruptive Technologies",
description:
  "Building responsive and dynamic websites using the latest technologies to ensure optimal performance and user experience.",


services:[
  {
    id: 1,
    title: "AI & ML",
    description:
      "Unlock the potential of AI and Machine Learning software development with our top-level AI and ML engineers. We offer smart solutions to automate your processes, reveal hidden patterns and facilitate predictive analysis so that you always stay ahead over your competitors.",
    image: "/images/home/ai-image.webp",
    ctaText:  "View AI & ML",
   ctaLink:"#"
     
  },
  {
    id: 2,
    title: "Data Science",
    description:
      "Unlock the potential of AI and Machine Learning software development with our top-level AI and ML engineers. We offer smart solutions to automate your processes, reveal hidden patterns and facilitate predictive analysis so that you always stay ahead over your competitors.",
    image: "/images/home/ai-image.webp", 
        ctaText:  "View Science",
   ctaLink:"#"
  },
  {
    id: 3,
    title: "Computer Vision",
    description:
      "Unlock the potential of AI and Machine Learning software development with our top-level AI and ML engineers. We offer smart solutions to automate your processes, reveal hidden patterns and facilitate predictive analysis so that you always stay ahead over your competitors.",
    image: "/images/home/ai-image.webp", 
        ctaText:  "View Services",
   ctaLink:"#"
  },
    {
    id: 4,
    title: "Big Data",
    description:
      "Unlock the potential of AI and Machine Learning software development with our top-level AI and ML engineers. We offer smart solutions to automate your processes, reveal hidden patterns and facilitate predictive analysis so that you always stay ahead over your competitors.",
    image: "/images/home/ai-image.webp", 
        ctaText:  "View Services",
   ctaLink:"#"
  },
    {
    id: 5,
    title: "Block Chain",
       description:
      "Unlock the potential of AI and Machine Learning software development with our top-level AI and ML engineers. We offer smart solutions to automate your processes, reveal hidden patterns and facilitate predictive analysis so that you always stay ahead over your competitors.",
    image: "/images/home/ai-image.webp", 
        ctaText:  "View Services",
   ctaLink:"#"
  },
    {
    id: 6,
    title: "Natural Language",
    description:
      "Unlock the potential of AI and Machine Learning software development with our top-level AI and ML engineers. We offer smart solutions to automate your processes, reveal hidden patterns and facilitate predictive analysis so that you always stay ahead over your competitors.",
    image: "/images/home/ai-image.webp", 
        ctaText:  "View Services",
   ctaLink:"#"
  },

]

  
}




