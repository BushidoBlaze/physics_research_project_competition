import OlympiadPrizesSection from "@/components/sections/olympiadPrizes/OlympiadPrizesSection.tsx";
import MainTitle from "@/ui/mainTitle/MainTitle.tsx";
import "./OlympiadPrizes.css";

export default function OlympiadPrizesSectionBlock() {
    return (
        <div className="olympiad__prizes">
            <MainTitle id="prizes" title="Призы"/>
            <div className="olympiad-prizes__description">
                <p className="olympiad-prizes__description-text">
                    Образовательный опыт ценен сам по себе, но получать призы всегда приятно!
                </p>
                <b className="olympiad-prizes__description-info">
                    Сертификаты участника будут выданы всем участникам.
                </b>
            </div>

            <OlympiadPrizesSection/>
        </div>
    )
}