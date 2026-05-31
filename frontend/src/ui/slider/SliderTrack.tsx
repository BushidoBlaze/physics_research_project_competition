import type {ReactNode, RefObject} from "react";

interface SliderTrackProps {
    trackRef: RefObject<HTMLDivElement | null>;
    translateX: number;
    children: ReactNode;
}

export function SliderTrack({trackRef, translateX, children}: SliderTrackProps) {
    return (
        <article
            ref={trackRef}
            className="olympiad-compete-cards"
            style={{transform: `translateX(-${translateX}px)`}}
        >
            {children}
        </article>
    );
}