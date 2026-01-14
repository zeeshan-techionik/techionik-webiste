export interface OutsourcingSlide {
  title: string;

  description: string;
  MiddleTitle?: string;
  lastTitle?: string;
  slides: slides[];
}

export interface slides {
  title: string;
  image: string;
  hoverImage: string;
  bulletPoints: string[];
}

export const outsourcingModelsData: OutsourcingSlide = {
  title: "Ours",
  MiddleTitle: "Outsourcing",
  lastTitle: "Models",

  description:
    "Our outsourcing models are designed to optimize your operational success and project outcomes.",
  slides: [
    {
      title: "Software Development Outsourcing",
      image: "/images/ParentServices/outsourcingmedia/full.png",
      hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.png",
      bulletPoints: [
        "Full-scale development handled with expertise. ",
        "Pain-free project management and delivery assurance.",
        "Full-scale development handled with expertise. ",
        "Pain-free project management and delivery assurance.",
      ],
    },
    {
      title: "Dedicated Development Team",
      image: "/images/ParentServices/outsourcingmedia/full.png",
      hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.png",
      bulletPoints: [
        "Full-scale development handled with expertise. ",
        "Pain-free project management and delivery assurance.",
        "Full-scale development handled with expertise. ",

        "Pain-free project management and delivery assurance.",
      ],
    },
    {
      title: "Quality Assurance & Testing",
      image: "/images/ParentServices/outsourcingmedia/full.png",
      hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.png",

      bulletPoints: [
        "Full-scale development handled with expertise. ",
        "Pain-free project management and delivery assurance.",
        "Full-scale development handled with expertise. ",
        "Pain-free project management and delivery assurance.",
      ],
    },
    {
      title: "UI/UX & Design Services",
      image: "/images/ParentServices/outsourcingmedia/full.png",
      hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.png",

      bulletPoints: [
        "Full-scale development handled with expertise. ",
        "Pain-free project management and delivery assurance.",
        "Full-scale development handled with expertise. ",
        "Pain-free project management and delivery assurance.",
      ],
    },
  ],
};
