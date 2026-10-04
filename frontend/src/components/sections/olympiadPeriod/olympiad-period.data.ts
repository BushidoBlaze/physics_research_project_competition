import React from "react";
import {PiNumberCircleOneThin, PiNumberCircleTwoThin, PiNumberCircleThreeThin} from "react-icons/pi";

export interface OlympiadPeriodSectionProps {
    periodDate: string;
    title: string;
    description: string;
    moreDescription: string;
    icon: React.ElementType;
}

export const PERIOD_CARD_CONTENT: OlympiadPeriodSectionProps[] = [
    {
        periodDate: "2 февраля — 28 февраля 2026",
        title: "Первый этап",
        description: "Дистанционный этап на образовательной онлайн-платформе.",
        moreDescription:
            "I этап — дистанционный, на образовательной онлайн-платформе. 2 февраля — 28 февраля 2026 г.",
        icon: PiNumberCircleOneThin,
    },
    {
        periodDate: "2 марта — 31 марта 2026",
        title: "Второй этап",
        description: "Очный этап на базе университета-партнёра.",
        moreDescription:
            "II этап — очный, на базе университета-партнёра. 2 марта — 31 марта 2026 г.",
        icon: PiNumberCircleTwoThin,
    },
    {
        periodDate: "1 апреля — 18 апреля 2026",
        title: "Третий этап",
        description: "Оценка проектов, подведение итогов и награждение.",
        moreDescription:
            "Работа жюри по оценке проектов: 1 апреля — 15 апреля 2026 г. Подведение итогов и награждение победителей — 18 апреля 2026 г.",
        icon: PiNumberCircleThreeThin,
    },
];
