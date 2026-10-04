import "./CardNumber.css";

interface CardNumberProps {
    number: string;
    className?: string;
}

export default function CardNumber({ number, className }: CardNumberProps) {
    return <h3 className={`card-item__number ${className || ""}`}>{number}</h3>;
}