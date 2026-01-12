import caseStudyimge from "@/public/banners/caseStudy.webp";
export interface CaseStudy {
  id: number;
  brand: string;
  title: string;
  solution: string;
  stats: { label: string; value: string }[];
  imageDesktop: string;
  imageMobile: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    brand: "RASTAH",
    title: "Empowering South Asian Fashion Identity",
    solution: "Custom Surveillance Software",
    stats: [
      { value: "50%", label: "Less Time Spent on Manual Reviews" },
      { value: "2X", label: "Boost in Productivity" },
    ],
    imageDesktop: "/banners/caseStudy.webp",
    imageMobile: "/images/rastah-mobile.png",
  },
   {
    id: 2,
    brand: "RASTAH",
    title: "2nd",
    solution: "Custom Surveillance Software",
    stats: [
      { value: "50%", label: "Less Time Spent on Manual Reviews" },
      { value: "2X", label: "Boost in Productivity" },
    ],
    imageDesktop: "/banners/caseStudy.webp",
    imageMobile: "/banners/caseStudy.webp",
  },
   {
    id: 3,
    brand: "RASTAH",
    title: "Empowering South Asian Fashion Identity",
    solution: "Custom Surveillance Software",
    stats: [
      { value: "50%", label: "Less Time Spent on Manual Reviews" },
      { value: "2X", label: "Boost in Productivity" },
    ],
    imageDesktop: "/banners/caseStudy.webp",
    imageMobile: "/banners/caseStudy.webp",
  },
   {
    id: 4,
    brand: "RASTAH",
    title: "Empowering South Asian Fashion Identity",
    solution: "Custom Surveillance Software",
    stats: [
      { value: "50%", label: "Less Time Spent on Manual Reviews" },
      { value: "2X", label: "Boost in Productivity" },
    ],
    imageDesktop: "/banners/caseStudy.webp",
    imageMobile: "/banners/caseStudy.webp",
  },
];
