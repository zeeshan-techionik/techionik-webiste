import { IconType } from "react-icons";

export interface ContactHeroFeature {
  icon: IconType;
  text: string;
}

export interface ContactHeroData {
  title: string;
  highlight?: string;
  description: string;
  backgroundImage: string;
  features: ContactHeroFeature[];
  buttonText: string;
  buttonLink: string;
  buttonVariant?: "glass" | "gradient" | "solid";
  buttonIcon?: string;
}

import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";

export const contactHeroContent = {
  title: "Ready to Elevate Your Business?",
  highlight: "Elevate",
  description:
    "Contact us today to discuss how we can tailor our expertise to meet your unique needs.",
  backgroundImage: "/banners/buissness-banner.png",
  features: [
    { icon: "MdOutlinePayments", text: "100% Safe Payment" },
    { icon: "HiOutlineUserGroup", text: "1k+ People Trust Us" },
  ],
  buttonText: "Let’s Talk",
  buttonLink: "#contact",
  buttonVariant: "glass",
  buttonIcon: "/icons/arrow-right.svg",
};
