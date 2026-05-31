import {PRIZES_CARD_CONTENT} from "./olympiad-prizes.data.ts";
import OlympiadPrizesCard from "@/components/sections/olympiadPrizes/OlympiadPrizesCard.tsx";
import "./OlympiadPrizes.css";

export default function OlympiadPrizesSection() {
    return (
        <div className="olympiad-prizes-container">
            <article className="olympiad-prizes-cards">
                {PRIZES_CARD_CONTENT.map((item, i) => (
                    <OlympiadPrizesCard
                        key={i}
                        place={item.place}
                        title={item.title}
                    >
                        <ul className="olympiad-prizes-card__list">
                            {item.description.map((text, i) => (
                                <li className="olympiad-prizes-card__item" key={i}>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </OlympiadPrizesCard>
                ))}
            </article>
        </div>
    )
}