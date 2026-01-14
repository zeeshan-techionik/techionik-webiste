interface ServeItem {
  icon: string;
  title: string;
  subtitle?:string;
  description: string;
  list1?: string[];
  list2?: string[]
  image: string
}

interface ServeData {
  title: string;
  description: string;
  serve1: ServeItem[];
  serve2: ServeItem[];
  serve3: ServeItem[]
}


export const serveData: ServeData = {
  title: "Whom We Serve",
  description:
    "We work with all kinds of businesses, from Startups to SMB’s and Large-scale enterprises!",
  serve1: [
    {
      icon: "/icons/smallbg.svg",
      title: "Startups",
      description: "Empowering startups with agile and scalable technology solutions that help turn innovative ideas into successful businesses. MVP Development Services Rapid Prototyping Solutions Scalable Architecture Design",
      list1: [
        'MVP Development Services',
        'Rapid Prototyping Solutions',
        'Scalable Architecture Design'
      ],
      list2: [
        'Lean & Agile Development',
        'Product Validation and Testing',
        'Growth Hacking Strategies'
      ],
      image: '/icons/streamline.svg'
    },
  ],

  serve2: [
    {
      icon: "/icons/smallbg.svg",
      title: "Small & Medium Sized",
      subtitle: "Businesses",
      description: "Empowering startups with agile and scalable technology solutions that help turn innovative ideas into successful businesses. MVP Development Services Rapid Prototyping Solutions Scalable Architecture Design",
      list1: [
        'MVP Development Services',
        'Rapid Prototyping Solutions',
        'Scalable Architecture Design',
        'Rapid Prototyping Solutions'
      ],

      image: '/icons/smallbd.svg'
    },
  ],

  serve3: [
    {
      icon: "/icons/smallbg.svg",
      title: "Large-Scale Enterprises",
      description: "Empowering startups with agile and scalable technology solutions that help turn innovative ideas into successful businesses. MVP Development Services Rapid Prototyping Solutions Scalable Architecture Design",
      list1: [
        'MVP Development Services',
        'Rapid Prototyping Solutions',
        'Scalable Architecture Design',
        'Rapid Prototyping Solutions'
      ],
      
      image: '/icons/building.svg'
    },
  ]
};