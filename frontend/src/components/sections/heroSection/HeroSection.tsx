import {useEffect, useState} from "react";
import {Button} from "@/ui/button/Button.tsx";
import Countdown from "@/ui/countdown/Countdown.tsx";
import "./HeroSection.css";

import heroSliderImage1 from "@/assets/images/hero-slider-image-1.jpg";
import heroSliderImage2 from "@/assets/images/hero-slider-image-2.jpg";
import heroSliderImage3 from "@/assets/images/hero-slider-image-3.jpg";

const SLIDES = [
    {src: heroSliderImage1, alt: "Студенты МарГУ в физической лаборатории"},
    {src: heroSliderImage2, alt: "Учебная аудитория физико-математического факультета"},
    {src: heroSliderImage3, alt: "Исследовательский проект по физике"},
];

const REGISTRATION_DEADLINE = "2026-02-28T23:59:59";

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion) return;

        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero__container">
            <div className="hero__slider" aria-hidden="true">
                {SLIDES.map((slide, idx) => (
                    <img
                        key={idx}
                        src={slide.src}
                        alt={slide.alt}
                        className={`hero__slide ${idx === current ? "active" : ""}`}
                    />
                ))}
            </div>

            <div className="hero__overlay"></div>

            <div className="hero__content">
                <div className="hero__content-section">
                    <div className="hero__description">
                        <h1 className="hero__title">
                            Конкурс исследовательских проектов по физике
                            для школьников 9–11 классов <b>«Новые горизонты»</b>
                        </h1>
                        <p className="hero__text">Больше чем просто – <b>конкурс</b></p>

                        <Countdown
                            targetDate={REGISTRATION_DEADLINE}
                            label="До окончания регистрации:"
                            className="hero__countdown"
                            decorative
                        />
                    </div>

                    <div className="hero__buttons">
                        <Button to="/404" variant="primary" size="lg">
                            Принять участие
                        </Button>

                        <Button href="#about" variant="secondary" size="lg">
                            Узнать больше
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
