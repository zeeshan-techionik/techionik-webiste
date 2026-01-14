interface JourneyData {
    title: string;
    gradientTitle: string;
    afterGradientTitle: string;
    description: string;
    list: string[];
    years: string[];    
}

export const journeyData: JourneyData = {
    title: "Our",
    gradientTitle: "Journey",
    afterGradientTitle: "So Far",
    description:
    "CodersWire operates across multiple locations worldwide, ensuring seamless collaboration and support for our clients. Our headquarters in the United States serves as the central hub, while our global offices allow us to deliver cutting-edge solutions tailored to regional markets.",

    list: [
        'National recognition',
        'New partnerships formed',
        'Product launch success'
    ],

    years: [
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
        '2024',
        '2025'
    ]

}