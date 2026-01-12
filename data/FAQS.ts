// data/faqs.ts
export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is Custom Software Development?",
    answer:
      "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
  },
  {
    id: 2,
    question: "How much do Software Development services cost?",
    answer:
      "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
  },
  {
    id: 3,
    question: "Why hire a custom software development company?",
    answer:
      "Hiring a professional company ensures expertise, better software architecture, maintenance support, and cost-effective solutions tailored to your business needs.",
  },
  {
    id: 4,
    question: "What technologies do you use?",
    answer:
      "We use modern technologies like React, Next.js, Node.js, Python, and cloud services to deliver scalable and efficient solutions.",
  },
  {
    id: 5,
    question: "How long does it take to develop custom software?",
    answer:
      "The timeline depends on the complexity of the project, ranging from a few weeks for simple applications to several months for enterprise solutions.",
  },
  {
    id: 6,
    question: "Do you provide post-development support?",
    answer:
      "Yes, we provide ongoing maintenance, updates, and support to ensure your software continues to meet your business needs.",
  },
  {
    id: 7,
    question: "Can you integrate our existing systems?",
    answer:
      "Absolutely! We can integrate with your existing systems, APIs, and databases for seamless functionality.",
  },
  {
    id: 8,
    question: "Is my data secure during development?",
    answer:
      "Yes, we follow strict security protocols and data protection standards to ensure your data remains safe throughout the development process.",
  },
];
