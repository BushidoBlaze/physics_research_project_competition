import {INFO_CARD_CONTENT} from "./olympiad-info.data.ts"
import OlympiadInfoCard from "./OlympiadInfoCard.tsx";
import "./OlympiadInfo.css";

export default function OlympiadInfoSection() {
    return (
        <div className="olympiad-info-container">
            <article className="olympiad-info-cards">
                {INFO_CARD_CONTENT.map((card, i) => (
                    <OlympiadInfoCard
                        key={i}
                        number={card.number}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </article>
        </div>
    );
}