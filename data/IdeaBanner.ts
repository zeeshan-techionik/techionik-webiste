export interface IdeaBannerData {
  title: string;
  highlight?: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  buttonVariant?: "glass" | "gradient" | "solid";
  buttonIcon?: string;
}

export const ideaBannerContent: IdeaBannerData = {
  title: "Got an idea or Concerns?",
  highlight: "idea",
  ctaText: "Let’s Discuss",
  ctaLink: "#contact",
  backgroundImage: "/banners/idea-banner.png",
  buttonVariant: "glass",
  buttonIcon: "/icons/arrow-right.svg",
};
