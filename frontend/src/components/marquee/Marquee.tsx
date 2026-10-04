import "./Marquee.css";

const MARQUEE_TEXT =
    "Физика Исследование Эксперимент Наука Конкурс Новые горизонты";

export default function Marquee() {
    return (
        <div className="marquee" aria-hidden="true">
            <div className="marquee__track">
                <span className="marquee__text">{MARQUEE_TEXT}</span>
                <span className="marquee__text">{MARQUEE_TEXT}</span>
                <span className="marquee__text">{MARQUEE_TEXT}</span>
                <span className="marquee__text">{MARQUEE_TEXT}</span>
            </div>
        </div>
    );
}
