import {PERIOD_CARD_CONTENT} from "./olympiad-period.data.ts";
import OlympiadPeriodCard from "@/components/sections/olympiadPeriod/OlympiadPeriodCard.tsx";
import "./OlympiadPeriod.css";

export default function OlympiadPeriodSection() {
    return (
        <div className="olympiad-period-container">
            <article className="olympiad-period-cards">
                {PERIOD_CARD_CONTENT.map((card, i) => (
                    <OlympiadPeriodCard
                        key={i}
                        periodDate={card.periodDate}
                        title={card.title}
                        description={card.description}
                        moreDescription={card.moreDescription}
                        Icon={card.icon}
                    />
                ))}
            </article>
        </div>
    )
}