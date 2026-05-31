import {ChevronLeft, ChevronRight} from "lucide-react";
import SwitchButton from "@/ui/slider/switchButton/SwitchButton.tsx";

interface SliderControlsProps {
    onPrev: () => void;
    onNext: () => void;
    isStart: boolean;
    isEnd: boolean;
}

export function SliderControls({onPrev, onNext, isStart, isEnd}: SliderControlsProps) {
    return (
        <div className="olympiad-compete-buttons">
            <SwitchButton
                onClick={onPrev}
                icon={<ChevronLeft size={32}/>}
                isEnd={isStart}
            />
            <SwitchButton
                onClick={onNext}
                icon={<ChevronRight size={32}/>}
                isEnd={isEnd}
            />
        </div>
    );
}