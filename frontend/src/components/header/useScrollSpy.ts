import {useEffect, useState} from "react";

type Section = { id: string };

export function useScrollSpy(
    sections: Section[],
    options?: IntersectionObserverInit
) {
    const [currentActiveId, setCurrentActiveId] = useState(sections[0]?.id ?? "");

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCurrentActiveId(entry.target.id);
                }
            });
        }, options);

        sections.forEach(({id}) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections, options]);

    const scrollToSection = (targetId: string) => {
        const el = document.getElementById(targetId);
        if (!el) return;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({behavior: reducedMotion ? "auto" : "smooth", block: "start"});
        setCurrentActiveId(targetId);
    };

    return {currentActiveId, scrollToSection};
}
