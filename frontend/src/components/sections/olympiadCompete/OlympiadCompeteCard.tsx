import React from 'react';
import CardHeader from "@/ui/card/cardHeader/CardHeader.tsx";
import CardNumber from "@/ui/card/cardNumber/CardNumber.tsx";
import CardTitle from "@/ui/card/cardTitle/CardTitle.tsx";
import CardContent from "@/ui/card/cardContent/CardContent.tsx";
import "./OlympiadCompete.css";

interface CardCompeteCardProps {
    number: string;
    title: string;
    description: string;
    button?: React.ReactNode;
}

export default function OlympiadCompeteCard({number, title, description, button}: CardCompeteCardProps) {
    return (
        <section className="olympiad-compete-card">
            <div className="olympiad-compete-card__overlay">
                <CardHeader className="olympiad-compete-card__header">
                    <CardNumber number={number} className="olympiad-compete-card__number"/>
                    <CardTitle title={title} className="olympiad-compete-card__title"/>
                </CardHeader>

                <div className="olympiad-compete-card__content">
                    <CardContent description={description} className="olympiad-compete-card__description"/>
                    {button}
                </div>
            </div>
        </section>
    );
}
