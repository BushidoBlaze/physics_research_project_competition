import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import {Link} from "react-router-dom";
import {LayoutGrid, X} from "lucide-react";
import {SECTIONS} from "./header-sections.data.ts";
import {useScrollSpy} from "./useScrollSpy.ts";
import "./Header.css";

export default function BurgerHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const {currentActiveId, scrollToSection} = useScrollSpy(SECTIONS, {
        rootMargin: "-20% 0px -20% 0px",
    });

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [isOpen]);

    const handleNav = (id: string) => {
        scrollToSection(id);
        setIsOpen(false);
    };

    return (
        <div className="burger-header">
            <button
                className="burger-button"
                onClick={() => setIsOpen(true)}
                aria-label="Открыть меню"
                aria-expanded={isOpen}
                aria-controls="burger-menu"
            >
                <LayoutGrid className="burger-button__icon" strokeWidth={1}/>
            </button>

            {createPortal(
                <>
                    <div
                        className={`burger-overlay ${isOpen ? "burger-overlay--visible" : ""}`}
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />

                    <aside
                        id="burger-menu"
                        className={`burger-menu ${isOpen ? "burger-menu--open" : ""}`}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Меню навигации"
                    >
                        <button
                            className="burger-close"
                            onClick={() => setIsOpen(false)}
                            aria-label="Закрыть меню"
                        >
                            <X size={28}/>
                        </button>

                        <ul className="burger-menu__list">
                            {SECTIONS.map(section => (
                                <li className="burger-menu__item" key={section.id}>
                                    <button
                                        type="button"
                                        onClick={() => handleNav(section.id)}
                                        className={`header__button ${
                                            currentActiveId === section.id ? "active" : "inactive"
                                        }`}
                                        aria-current={currentActiveId === section.id ? "true" : undefined}
                                    >
                                        {section.label}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <Link
                                    className="burger-menu__button"
                                    to="/404"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Войти
                                </Link>
                            </li>
                        </ul>

                        <p className="burger-menu__credit">Created by Atlasov R.</p>
                    </aside>
                </>,
                document.body
            )}
        </div>
    );
}
