export interface OlympiadPrizesSectionProps {
    place: string;
    title: string;
    description: string[];
}

export const PRIZES_CARD_CONTENT: OlympiadPrizesSectionProps[] = [
    {
        place: "1 место",
        title: "Диплом 1 степени",
        description: [
            "Дипломы победителям",
            "Памятные сувениры"
        ]
    },
    {
        place: "2 место",
        title: "Диплом 2 степени",
        description: [
            "Дипломы победителям",
            "Памятные сувениры"
        ]
    },
    {
        place: "3 место",
        title: "Диплом 3 степени",
        description: [
            "Дипломы победителям",
            "Памятные сувениры"
        ]
    }
];