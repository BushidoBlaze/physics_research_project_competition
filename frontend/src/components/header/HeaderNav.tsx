import {Link} from "react-router-dom";
import {SECTIONS} from "./header-sections.data.ts";
import {useScrollSpy} from "./useScrollSpy.ts";
import "./Header.css";

export default function HeaderNav() {
    const {currentActiveId, scrollToSection} = useScrollSpy(SECTIONS, {
        rootMargin: "-20% 0px -20% 0px",
    });

    return (
        <ul className="header__menu">
            {SECTIONS.map(section => (
                <li key={section.id}>
                    <button
                        type="button"
                        onClick={() => scrollToSection(section.id)}
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
                <Link className="header__button header__login" to="/404">
                    Войти
                </Link>
            </li>
        </ul>
    );
}
