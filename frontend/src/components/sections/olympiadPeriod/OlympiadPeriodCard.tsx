import React, {useState} from "react";
import CardHeader from "@/ui/card/cardHeader/CardHeader.tsx";
import CardNumber from "@/ui/card/cardNumber/CardNumber.tsx";
import CardTitle from "@/ui/card/cardTitle/CardTitle.tsx";
import CardContent from "@/ui/card/cardContent/CardContent.tsx";
import {Button} from "@/ui/button/Button.tsx";
import CardBackgroundIcon from "@/ui/card/cardBackgroundIcon/CardBackgroundIcon.tsx";
import "./OlympiadPeriod.css";

interface OlympiadPeriodCardProps {
    periodDate: string;
    title: string;
    description: string;
    moreDescription: string;
    Icon: React.ElementType;
}

export default function OlympiadPeriodCard({
                                               periodDate,
                                               title,
                                               description,
                                               Icon,
                                               moreDescription,
                                           }: OlympiadPeriodCardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="olympiad-period-card">
            <div className="olympiad-period-card__overlay">
                <CardHeader className="olympiad-period-card__header">
                    <CardNumber number={periodDate} className="olympiad-period-card__date"/>
                    <CardTitle title={title} className="olympiad-period-card__title"/>
                </CardHeader>

                <CardContent
                    description={expanded ? moreDescription : description}
                    className="olympiad-period-card__content"
                />

                <div className="olympiad-period-card__buttons">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setExpanded(prev => !prev)}
                        aria-expanded={expanded}
                    >
                        {expanded ? "Закрыть" : "Больше"}
                    </Button>
                </div>
            </div>

            <CardBackgroundIcon Icon={Icon} size={400} className="olympiad-period-card__background-icon"/>
        </section>
    );
}
