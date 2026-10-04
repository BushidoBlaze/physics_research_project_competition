import "./CardTitle.css";

interface CardTitleProps {
    title: string;
    className?: string;
}

export default function CardTitle({title, className}: CardTitleProps) {
    return <h4 className={`card-item__title ${className || ""}`}>{title}</h4>;
}