import React from "react";
import CardTitle from "@/ui/card/cardTitle/CardTitle.tsx";
import "./OlympiadPrizes.css";

interface OlympiadPrizesCardProps {
    place: string;
    title: string;
    children: React.ReactNode;
}

export default function OlympiadPrizesCard({place, title, children}: OlympiadPrizesCardProps) {
    return (
        <section className="olympiad-prizes-card">
                <div className="olympiad-period-card__overlay">
                    <CardTitle title={place} className="olympiad-prizes-card__place"/>

                    <div className="olympiad-prizes-card__content">
                        <CardTitle title={title} className="olympiad-prizes-card__description-title"/>

                        <div className="olympiad-prizes-card__description">
                            {children}
                        </div>
                    </div>
                </div>
        </section>
    );
}