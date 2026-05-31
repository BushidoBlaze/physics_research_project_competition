import OlympiadCompeteCard from "./OlympiadCompeteCard.tsx";
import {SWITCH_CARD_CONTENT} from "./olympiad-compete.data.ts";
import {useHorizontalSlider} from "@/components/sections/olympiadCompete/useHorizontalSlider.ts";
import {SliderControls} from "@/ui/slider/SliderControls.tsx";
import {SliderTrack} from "@/ui/slider/SliderTrack.tsx";
import {Button} from "@/ui/button/Button.tsx";
import "./OlympiadCompete.css";

export default function OlympiadCompeteSection() {
    const slider = useHorizontalSlider();
    const indicatorCount = slider.maxIndex + 1;

    return (
        <div
            className="olympiad-compete-container"
            role="region"
            aria-roledescription="carousel"
            aria-label="Шаги участия в конкурсе"
            tabIndex={0}
            onKeyDown={slider.onKeyDown}
            onMouseEnter={slider.pauseAutoPlay}
            onMouseLeave={slider.resumeAutoPlay}
        >
            <SliderControls
                onPrev={slider.prev}
                onNext={slider.next}
                isStart={slider.isStart}
                isEnd={slider.isEnd}
            />

            <div
                className="slider-viewport"
                ref={slider.viewportRef}
                onTouchStart={slider.onTouchStart}
                onTouchMove={slider.onTouchMove}
                onTouchEnd={slider.onTouchEnd}
            >
                <SliderTrack
                    trackRef={slider.trackRef}
                    translateX={slider.translateX}
                >
                    {SWITCH_CARD_CONTENT.map(card => (
                        <OlympiadCompeteCard
                            key={card.id}
                            number={card.number}
                            title={card.title}
                            description={card.description}
                            button={
                                card.buttonText && (
                                    <Button to="/404" variant="primary" size="md">
                                        {card.buttonText}
                                    </Button>
                                )
                            }
                        />
                    ))}
                </SliderTrack>
            </div>

            {indicatorCount > 1 && (
                <div className="slider-indicators" role="tablist" aria-label="Навигация по слайдеру">
                    {Array.from({length: indicatorCount}, (_, i) => (
                        <button
                            key={i}
                            type="button"
                            role="tab"
                            aria-selected={i === slider.activeIndex}
                            aria-label={`Перейти к слайду ${i + 1}`}
                            className={`slider-indicator ${i === slider.activeIndex ? "is-active" : ""}`}
                            onClick={() => slider.goTo(i)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
