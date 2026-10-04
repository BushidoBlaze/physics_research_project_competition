import MainTitle from "@/ui/mainTitle/MainTitle.tsx";
import OlympiadInfoSection from "@/components/sections/olympiadInfo/OlympiadInfoSection.tsx";
import "./OlympiadInfo.css";

export default function OlympiadInfoSectionBlock() {
    return (
        <div className="olympiad__info">
            <MainTitle id="about" title="Больше, чем просто соревнование"/>
            <div className="olympiad-info__description">
                <p className="olympiad-info__text">
                    Конкурс исследовательских проектов по физике — это не только проверка знаний,
                    но и возможность раскрыть свой потенциал.
                    Здесь ценятся мышление, интерес к науке и стремление понять, как устроен мир.
                </p>
            </div>
            <OlympiadInfoSection/>
        </div>
    );
}
