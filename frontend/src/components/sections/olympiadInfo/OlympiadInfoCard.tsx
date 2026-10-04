import CardHeader from "@/ui/card/cardHeader/CardHeader.tsx";
import CardNumber from "@/ui/card/cardNumber/CardNumber.tsx";
import CardTitle from "@/ui/card/cardTitle/CardTitle.tsx";
import CardContent from "@/ui/card/cardContent/CardContent.tsx";
import "./OlympiadInfo.css";

interface OlympiadInfoCardProps {
    number: string;
    title: string;
    description: string;
}

export default function OlympiadInfoCard({number, title, description}: OlympiadInfoCardProps) {
    return (
        <section className="olympiad-info-card">
            <div className="olympiad-info-card__overlay">
                <CardHeader className="olympiad-info-card__header">
                    <CardNumber number={number} className="olympiad-info-card__number"/>
                    <CardTitle title={title} className="olympiad-info-card__title"/>
                </CardHeader>
                <CardContent description={description} className="olympiad-info-card__content"/>
            </div>
        </section>
    )
}