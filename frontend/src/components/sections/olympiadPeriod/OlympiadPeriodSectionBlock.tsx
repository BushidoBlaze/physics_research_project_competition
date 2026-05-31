import OlympiadPeriodSection from "@/components/sections/olympiadPeriod/OlympiadPeriodSection.tsx";
import MainTitle from "@/ui/mainTitle/MainTitle.tsx";
import {Button} from "@/ui/button/Button.tsx";
import "./OlympiadPeriod.css";

export default function OlympiadPeriodSectionBlock() {
    return (
        <div className="olympiad__period">

            <MainTitle id="dates" title="Период проведения"/>
            <OlympiadPeriodSection/>

            <div className="olympiad-button__period">
                <Button to="/404" variant="primary" size="md">Зарегистрироваться</Button>
            </div>
        </div>
    );
}
