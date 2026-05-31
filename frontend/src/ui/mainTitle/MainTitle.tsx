import "./MainTitle.css";

interface MainTitleProps {
    title: string;
    className?: string;
    id?: string;
}

export default function MainTitle({title, className, id}: MainTitleProps) {
    return <h2 id={id} className={`main__title ${className || ""}`}>{title}</h2>;
}