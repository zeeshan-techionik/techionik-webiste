interface Services {
    id: number;
    icon: string;
    title: string;
    description: string;
    state: boolean;
    lists: string[];
}

interface ServiceData {
    title: string;
    middleTitle: string;
    lastTitle: string;
    description: string;
    slider:{
        service1: Services[];
        service2: Services[];
        service3: Services[];
        service4: Services[];
    }
}

export const serviceData: ServiceData = {
    title: "Our",
    middleTitle: "Core",
    lastTitle: "Services",
    description: "We offer a range of comprehensive services, from custom application to product development, IT consulting, QA testing, and more.",
    
    slider: {

        service1: [
            {
                id: 1,
                icon: "icons/cloud.svg",
                title: "Cloud Services",
                description: 
                "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
                state: true,
                lists: [
                    'Cloud Consulting',
                    'Cloud Application Development',
                    'Cloud Security Consulting',
                    'Configuration Management',
                    'Cloud Migration',
                    'Cloud Infrastructure Management'
                ]
            }
        ],
        
        service2: [
            {
                id: 2,
                icon: "icons/ai-brain.svg",
                title: "AI & Automation",
                description: 
                "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
                state: false,
                lists: [
                    'Cloud Consulting',
                    'Cloud Application Development',
                    'Cloud Security Consulting',
                    'Configuration Management',
                    'Cloud Migration',
                    'Cloud Infrastructure Management'
                ]
            }
        ],
        
        service3: [
            {
                id: 3,
                icon: "icons/vibe-coding.svg",
                title: "Software Development",
                description: 
                "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
                state: false,
                lists: [
                    'Cloud Consulting',
                'Cloud Application Development',
                'Cloud Security Consulting',
                'Configuration Management',
                'Cloud Migration',
                'Cloud Infrastructure Management'
            ]
        }
    ],
    
    service4: [
        {
            id: 4,
            icon: "icons/data-line.svg",
            title: "Data Science",
            description: 
            "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
                'Cloud Consulting',
                'Cloud Application Development',
                'Cloud Security Consulting',
                'Configuration Management',
                'Cloud Migration',
                'Cloud Infrastructure Management'
            ]
        }
    ]
}
}