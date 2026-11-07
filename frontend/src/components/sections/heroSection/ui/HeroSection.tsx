import { useEffect, useState } from "react";
import { SLIDES } from "../data/hero-section.data.ts";
import "./HeroSection.css";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero__container">
      <div className="hero__slider">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero__background ${index === currentSlide ? "active" : ""}`}
            style={
              slide.image
                ? { backgroundImage: `url(${slide.image})` }
                : undefined
            }
          />
        ))}
      </div>

      <div className="hero__overlay"></div>

      <div className="hero__content">
        <div className="hero__content-section">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero__slide ${index === currentSlide ? "active" : ""}`}
            >
              <h1 className="hero__title">{slide.title}</h1>
              <p className="hero__text">{slide.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
