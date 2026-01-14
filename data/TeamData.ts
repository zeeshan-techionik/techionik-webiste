// ===== Interfaces =====

export interface HeadingParts {
  title: string;
  middleTitle: string;
  lastTitle: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;          // from /public
  socialIcon?: string;
  socialLink?: string;
  layout: 0 | 1;          // 0 = image right, 1 = image left
}

export interface TeamSection {
  title: string;
  description: string;
  member: TeamMember;
}

// ===== Heading Data =====

export const teamHeading: HeadingParts = {
  title: "",
  middleTitle: "",
  lastTitle: "",
};

// ===== Team Sections Data =====

export const teamSections: TeamSection[] = [
  {
    title: "Our Mission",
    description:
      "At TECHIONIK, our mission is to revolutionize enterprise innovation by integrating hybrid intelligence and strategic AI-driven engineering to deliver measurable business outcomes. In the era of artificial intelligence, we are committed to developing cutting-edge AI models that secure cloud environments, business emails, and organizational documents against both external and internal threats.",
    member: {
      name: "Hassan Suhail",
      position: "CEO and Founder",
      image: "/images/about/ceo.png",
      socialIcon: "/icons/linkedin.svg",
      socialLink: "#",
      layout: 0, // image right
    },
  },
  {
    title: "Our Vision",
    description:
      "At TECHIONIK, we provide cutting-edge software development and IT outsourcing services, helping businesses worldwide accelerate growth, enhance efficiency, and drive digital transformation.",
    member: {
      name: "Haseeb Suhail",
      position: "Chief Technology Officer",
      image: "/images/about/cto.png",
      socialIcon: "/icons/linkedin.svg",
      socialLink: "#",
      layout: 1, // image left
    },
  },
  {
    title: "Our Philosophy",
    description:
      "At TECHIONIK, we believe innovation starts with understanding human behavior. Our philosophy centers on Behavioral Impact Engineering using AI to redefine how people and companies connect.",
    member: {
      name: "Ayyub Zaman",
      position: "Chief Operating Officer",
      image: "/images/about/coo.png",
      socialIcon: "/icons/linkedin.svg",
      socialLink: "#",
      layout: 0, // image right
    },
  },
];
