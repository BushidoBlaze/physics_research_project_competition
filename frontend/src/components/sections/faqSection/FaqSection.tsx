import {useState} from "react";
import {ChevronDown} from "lucide-react";
import MainTitle from "@/ui/mainTitle/MainTitle.tsx";
import {FAQ_ITEMS} from "./faq.data.ts";
import "./FaqSection.css";

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => {
        setOpenIndex(prev => (prev === i ? null : i));
    };

    return (
        <section className="faq">
            <MainTitle id="faq" title="Частые вопросы"/>

            <ul className="faq__list">
                {FAQ_ITEMS.map((item, i) => {
                    const isOpen = openIndex === i;
                    const panelId = `faq-panel-${i}`;
                    const btnId = `faq-button-${i}`;
                    return (
                        <li key={i} className={`faq__item ${isOpen ? "is-open" : ""}`}>
                            <h3 className="faq__heading">
                                <button
                                    id={btnId}
                                    type="button"
                                    className="faq__question"
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                    onClick={() => toggle(i)}
                                >
                                    <span>{item.question}</span>
                                    <ChevronDown
                                        className={`faq__icon ${isOpen ? "is-open" : ""}`}
                                        aria-hidden="true"
                                        size={22}
                                    />
                                </button>
                            </h3>

                            <div
                                id={panelId}
                                role="region"
                                aria-labelledby={btnId}
                                hidden={!isOpen}
                                className="faq__answer"
                            >
                                <p className="faq__answer-text">{item.answer}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
