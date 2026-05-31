import {useEffect, useRef, useState} from "react";
import {ArrowUpToLine} from "lucide-react";
import "./BackToTop.css";

export default function BackToTopButton() {
    const [visible, setVisible] = useState(false);
    const scrollingRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollingRef.current) return;
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll, {passive: true});
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        scrollingRef.current = true;
        window.scrollTo({top: 0, behavior: "smooth"});

        const reset = () => {
            scrollingRef.current = false;
            setVisible(false);
        };

        window.addEventListener("scrollend", reset, {once: true});

        // fallback для браузеров без scrollend
        setTimeout(() => {
            if (scrollingRef.current) reset();
        }, 1000);
    };

    return (
        <button
            type="button"
            className={`back-to-top__button ${visible ? "is-visible" : ""}`}
            onClick={scrollToTop}
            aria-label="Вернуться к началу страницы"
            tabIndex={visible ? 0 : -1}
        >
            <ArrowUpToLine size={18} aria-hidden="true"/>
        </button>
    );
}
