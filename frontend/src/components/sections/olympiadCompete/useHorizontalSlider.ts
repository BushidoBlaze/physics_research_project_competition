import {useCallback, useEffect, useRef, useState} from "react";

const AUTO_PLAY_INTERVAL = 4000;
const MANUAL_PAUSE_DURATION = 8000;

export function useHorizontalSlider() {
    const viewportRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const [translateX, setTranslateX] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);
    const [totalCards, setTotalCards] = useState(0);

    // Refs для избежания stale closures
    const maxIndexRef = useRef(0);
    const touchStartX = useRef<number | null>(null);
    const touchDeltaX = useRef(0);
    const isPaused = useRef(false);
    const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const updateTranslate = useCallback((index: number) => {
        const viewport = viewportRef.current;
        const track = trackRef.current;
        if (!viewport || !track) return;

        const cards = track.querySelectorAll<HTMLElement>(".olympiad-compete-card");
        if (!cards.length) return;

        const style = getComputedStyle(track);
        const gap = parseFloat(style.columnGap || "0") || 0;
        const cardWidth = cards[0].getBoundingClientRect().width;
        const viewportWidth = viewport.clientWidth;

        const cardsVisible = Math.max(1, Math.floor((viewportWidth + gap) / (cardWidth + gap)));
        const calculatedMaxIndex = Math.max(0, cards.length - cardsVisible);

        setMaxIndex(calculatedMaxIndex);
        maxIndexRef.current = calculatedMaxIndex;
        setTotalCards(cards.length);

        const clampedIndex = Math.min(index, calculatedMaxIndex);
        const maxTranslate = Math.max(0, track.scrollWidth - viewportWidth);

        // На последней позиции snap до точного конца — исключает пиксельный недобег
        const offset = clampedIndex >= calculatedMaxIndex
            ? maxTranslate
            : clampedIndex * (cardWidth + gap);

        setTranslateX(Math.round(offset));
    }, []);

    useEffect(() => {
        updateTranslate(activeIndex);

        const viewport = viewportRef.current;
        const track = trackRef.current;
        if (!viewport || !track) return;

        const ro = new ResizeObserver(() => updateTranslate(activeIndex));
        ro.observe(viewport);
        ro.observe(track);

        return () => ro.disconnect();
    }, [activeIndex, updateTranslate]);

    // Авто-скролл
    useEffect(() => {
        autoPlayRef.current = setInterval(() => {
            if (!isPaused.current) {
                setActiveIndex(i => (i >= maxIndexRef.current ? 0 : i + 1));
            }
        }, AUTO_PLAY_INTERVAL);

        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
            if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        };
    }, []);

    // Пауза при ручном взаимодействии — авто-скролл возобновится через MANUAL_PAUSE_DURATION
    const manualInteract = useCallback(() => {
        isPaused.current = true;
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(() => {
            isPaused.current = false;
        }, MANUAL_PAUSE_DURATION);
    }, []);

    const pauseAutoPlay = useCallback(() => {
        isPaused.current = true;
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    }, []);

    const resumeAutoPlay = useCallback(() => {
        isPaused.current = false;
    }, []);

    const next = useCallback(() => {
        manualInteract();
        setActiveIndex(i => Math.min(i + 1, maxIndexRef.current));
    }, [manualInteract]);

    const prev = useCallback(() => {
        manualInteract();
        setActiveIndex(i => Math.max(i - 1, 0));
    }, [manualInteract]);

    const goTo = useCallback((index: number) => {
        manualInteract();
        setActiveIndex(Math.max(0, Math.min(index, maxIndexRef.current)));
    }, [manualInteract]);

    const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowRight") {
            e.preventDefault();
            next();
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            prev();
        } else if (e.key === "Home") {
            e.preventDefault();
            goTo(0);
        } else if (e.key === "End") {
            e.preventDefault();
            goTo(maxIndexRef.current);
        }
    }, [next, prev, goTo]);

    // Touch / swipe — пауза на время взаимодействия
    const onTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
        touchDeltaX.current = 0;
        isPaused.current = true;
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    }, []);

    const onTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
        if (touchStartX.current == null) return;
        touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    }, []);

    const onTouchEnd = useCallback(() => {
        const SWIPE_THRESHOLD = 50;
        if (touchDeltaX.current <= -SWIPE_THRESHOLD) {
            setActiveIndex(i => Math.min(i + 1, maxIndexRef.current));
        } else if (touchDeltaX.current >= SWIPE_THRESHOLD) {
            setActiveIndex(i => Math.max(i - 1, 0));
        }
        touchStartX.current = null;
        touchDeltaX.current = 0;
        resumeTimerRef.current = setTimeout(() => {
            isPaused.current = false;
        }, MANUAL_PAUSE_DURATION);
    }, []);

    const isStart = activeIndex === 0;
    const isEnd = activeIndex >= maxIndex;

    return {
        viewportRef,
        trackRef,
        translateX,
        activeIndex,
        maxIndex,
        totalCards,
        isStart,
        isEnd,
        next,
        prev,
        goTo,
        onKeyDown,
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        pauseAutoPlay,
        resumeAutoPlay,
    };
}
