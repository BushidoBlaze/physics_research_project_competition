import OlympiadCompeteSection from "@/components/sections/olympiadCompete/OlympiadCompeteSection.tsx";
import MainTitle from "@/ui/mainTitle/MainTitle.tsx";
import "./OlympiadCompete.css";

export default function OlympiadCompeteSectionBlock() {
    return (
        <div className="olympiad__compete">
            <MainTitle id="how" title="Как участвовать"/>

            <p className="olympiad__compete-info">
                К участию допускаются как индивидуальные участники, так и команды в составе двух человек.

            </p>

            <p className="olympiad__compete-info olympiad__compete-info--attention">
                В случае командного участия регистрацию проходят оба участника.
            </p>

            <OlympiadCompeteSection/>
        </div>
    )
}