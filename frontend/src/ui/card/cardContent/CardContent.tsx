import "./CardContent.css";

interface CardContentProps {
    description: string;
    className?: string;
}

export default function CardContent({ description, className }: CardContentProps) {
    return <p className={`card-item__content ${className || ""}`}>{description}</p>;
}