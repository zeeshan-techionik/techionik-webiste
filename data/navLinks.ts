  export interface NavLink {
    name: string;
    href: string;
    type?: "link" | "button";
    children?: NavLink[];
  }

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/",
    
    children: [
      { name: "Web Development", href: "/services/web" },
      { name: "Mobile Apps", href: "/services/mobile" },
      { name: "UI/UX Design", href: "/services/ui-ux" },
    ],
  },
  { name: "Portfolio", href: "/" },
  { name: "Contact", href: "/",  },
];